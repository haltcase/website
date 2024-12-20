import { basename } from "node:path";

import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import { type CollectionEntry, getCollection, getEntry } from "astro:content";
import { WEBSITE_GITHUB_TOKEN } from "astro:env/server";
import wretch from "wretch";

const api = wretch("https://api.github.com/graphql", {
	headers: {
		Authorization: `bearer ${WEBSITE_GITHUB_TOKEN}`
	}
});

export interface ErrorDetails {
	path: string[];
	extensions: { code: string; variableName: string };
	locations: { line: number; column: number }[];
	message: string;
}

export interface QueryResult {
	errors?: ErrorDetails[];
}

export const fetchGithub = async <TReturn extends QueryResult>(
	query: string,
	variables: Record<string, unknown> = {}
): Promise<TReturn | undefined> => {
	try {
		const result = await api
			.post({
				query: query.replaceAll(/\s+/g, " "),
				variables
			})
			.json<TReturn>();

		if (result.errors != null) {
			process.stderr.write(
				`${result.errors.map((it) => it.message).join("\n")}\n`
			);
			return;
		}

		return result;
	} catch (error) {
		process.stderr.write(`Failed to fetch from GitHub. ${String(error)}\n`);
	}
};

export interface Repository {
	name: string;
	url: string;
	homepageUrl: string;
	stargazerCount: number;
	isArchived: boolean;
	isDisabled: boolean;
	isEmpty: boolean;
	isTemplate: boolean;
	isFork: boolean;
}

export interface RepositoriesResult extends QueryResult {
	data?: {
		viewer: {
			repositories: {
				edges: {
					node: Repository;
				}[];
			};
		};
	};
}

export interface RenderableProjectData extends Repository {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	Content: AstroComponentFactory;
	collectionId: string | undefined;
	entry: CollectionEntry<"projects">;
}

export type SelectedProjectData = Omit<RenderableProjectData, "Component">;

export const fetchTopRepos = async (repoCount = 10): Promise<Repository[]> => {
	const query = `
query($repoCount: Int!) {
  viewer {
    repositories (
      first: $repoCount,
      orderBy: {
        field: STARGAZERS,
        direction: DESC
      },
      ownerAffiliations: OWNER
    ) {
      edges {
        node {
          name
          url
          homepageUrl
          stargazerCount
          isArchived
          isDisabled
          isEmpty
          isTemplate
          isFork
        }
      }
    }
  }
}`;

	const result = await fetchGithub<RepositoriesResult>(query, { repoCount });

	return (
		result?.data?.viewer.repositories.edges.map((edge) => ({
			...edge.node
		})) ?? []
	);
};

export const getSelectedProjects = async (): Promise<SelectedProjectData[]> => {
	const [topRepos, projectsCollection] = await Promise.all([
		fetchTopRepos(),
		getCollection("projects")
	]);

	const selectedProjects = projectsCollection.map((project) => ({
		id: project.id,
		name: project.filePath ? basename(project.filePath, ".md") : null
	}));

	const withEntry = await Promise.all(
		topRepos.map(async (repo) => {
			const collectionId =
				selectedProjects.find(({ name }) => name === repo.name)?.id || "";

			const entry = collectionId
				? await getEntry("projects", collectionId)
				: null;

			return {
				...repo,
				collectionId,
				entry
			};
		})
	);

	return withEntry.filter(
		(repo) => repo.entry != null
	) as SelectedProjectData[];
};

interface RepositoryResult {
	url: string;
	repository: {
		url: string;
		homepageUrl: string | null;
	};
}

interface ViewerResult extends QueryResult {
	data: {
		viewer: RepositoryResult;
	};
}

export const fetchRepo = async (
	name: string
): Promise<RepositoryResult | undefined> => {
	const query = `
query($name: String!) {
  viewer {
    repository (name: $name) {
      url
      homepageUrl
    }
  }
}
`;

	const result = await fetchGithub<ViewerResult>(query, { name });

	if (result?.data == null) {
		return;
	}

	const { viewer } = result.data;

	if (viewer.repository.homepageUrl === "") {
		viewer.repository.homepageUrl = null;
	}

	return viewer;
};
