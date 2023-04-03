import ky from "ky-universal";

import selectedProjects from "./selected-projects";

export interface ErrorDetails {
	path: string[];
	extensions: { code: string; variableName: string };
	locations: Array<{ line: number; column: number }>;
	message: string;
}

export interface QueryResult {
	errors?: ErrorDetails[];
}

export const fetchGithub = async <TReturn extends QueryResult>(
	query: string,
	variables: Record<string, unknown> = {}
): Promise<TReturn | undefined> => {
	const token = process.env.WEBSITE_GITHUB_TOKEN;

	try {
		const result = await ky
			.post("https://api.github.com/graphql", {
				headers: {
					Authorization: `bearer ${token}`
				},
				json: { query: query.replace(/\s+/g, " "), variables }
			})
			.json<TReturn>();

		if (result.errors != null) {
			console.error(result.errors.map(it => it.message).join("\n"));
			return;
		}

		return result;
	} catch (ex) {
		console.error("Failed to fetch from GitHub. ", ex);
	}
};

export interface Repository {
	name: keyof typeof selectedProjects;
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
				edges: Array<{
					node: Repository;
				}>;
			};
		};
	};
}

export const fetchTopRepos = async (repoCount = 10) => {
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

	return result?.data?.viewer.repositories.edges
		.map(edge => {
			if (edge.node.homepageUrl == null) {
				edge.node.homepageUrl = "";
			}

			return edge.node;
		})
		.filter(repo => Object.keys(selectedProjects).includes(repo.name));
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
