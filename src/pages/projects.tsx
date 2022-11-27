import fetch from "isomorphic-unfetch";
import type { GetStaticProps } from "next";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Code, Globe, Star } from "react-feather";

import socialLinks from "../client-data/social-links";
import Content from "../components/Content";
import IconLink from "../components/IconLink";
import Layout from "../components/Layout";
import Main from "../components/Main";
import styles from "./projects.module.css";

interface Repository {
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

interface RepositoriesResult {
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

const selectedProjects = {
	trilogy: {
		description: (
			<p>
				Wrapper for SQLite databases in JavaScript, written in TypeScript. It is
				designed to make using SQL queries more ergonomic within JavaScript
				code.
			</p>
		)
	},
	"param.macro": {
		description: (
			<p>
				Plugin for the Babel JavaScript compiler to add semi-syntactic partial
				application and lambda parameters, inspired by similar features in Scala
				&amp; Kotlin. I designed an{" "}
				<a
					href="https://param-macro.bolingen.me"
					target="_blank"
					rel="noreferrer">
					online playground
				</a>{" "}
				for users to quickly experiment with the libary online.
			</p>
		)
	},
	cascade: {
		description: (
			<p>
				Method, accessor, and assignment cascades for Nim implemented as a
				compile-time macro, inspired by Smalltalk &amp; Dart.
			</p>
		)
	},
	glob: {
		description: (
			<p>
				Pure Nim library for searching for files that match Unix-style
				&ldquo;glob&rdquo; patterns, such as <code>./assets/**/*.png</code>.
			</p>
		)
	},
	tablemark: {
		description: (
			<p>
				TypeScript library for formatting JSON data to markdown tables. There is
				also a command-line wrapper,{" "}
				<a
					href="https://github.com/haltcase/tablemark-cli"
					target="_blank"
					rel="noreferrer">
					<code>tablemark-cli</code>
				</a>
				.
			</p>
		)
	}
};

const cachePeriod = 10 * 60;
const repoCount = 10;

export const getStaticProps: GetStaticProps<{
	repos: Repository[];
}> = async _context => {
	const token = process.env.WEBSITE_GITHUB_TOKEN;

	if (token == null || token === "") {
		console.error(
			"Projects: no GitHub token found in WEBSITE_GITHUB_TOKEN environment variable."
		);
		return {
			props: {
				repos: []
			},
			revalidate: cachePeriod
		};
	}

	const query = `
query {
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
}`.replace(/\s+/g, " ");

	let repos: Repository[] = [];

	try {
		const result = await fetch("https://api.github.com/graphql", {
			headers: {
				Authorization: `bearer ${token}`
			},
			method: "POST",
			body: JSON.stringify({ query, variables: { repoCount } })
		});

		const json: RepositoriesResult = await result.json();

		if (json.data != null) {
			repos = json.data.viewer.repositories.edges
				.map(edge => {
					console.log(edge);
					if (edge.node.homepageUrl == null) {
						edge.node.homepageUrl = "";
					}

					return edge.node;
				})
				.filter(repo => Object.keys(selectedProjects).includes(repo.name));
		}
	} catch (ex) {
		console.error(
			"Failed to retrieve repository information from GitHub. ",
			ex
		);
	}

	return {
		props: {
			repos
		},
		revalidate: cachePeriod
	};
};

interface ProjectListingProps {
	repo: Repository;
}

const ProjectListing: FunctionComponent<ProjectListingProps> = ({ repo }) => {
	return (
		<section className={styles.projectListing}>
			<h3 className={styles.projectListingHeader}>
				<span className={styles.projectListingHeaderTitle}>{repo.name}</span>
				{repo.homepageUrl !== "" && (
					<IconLink
						href={repo.homepageUrl}
						Icon={Globe}
						title="Homepage"
						size="14"
					/>
				)}
				{repo.url !== "" && (
					<IconLink href={repo.url} Icon={Code} title="Source" size="14" />
				)}
				{repo.stargazerCount > 0 && (
					<a
						href={repo.url + "/stargazers"}
						title="GitHub Stars"
						className={styles.projectListingStarCount}>
						<Star size="14" className="icon" />
						<span>{repo.stargazerCount}</span>
					</a>
				)}
			</h3>

			{selectedProjects[repo.name].description}
		</section>
	);
};

interface ProjectPageProps {
	repos: Repository[];
}

const ProjectPage: FunctionComponent<ProjectPageProps> = ({ repos = [] }) => (
	<Layout title="Projects | Bo Lingen">
		<Main>
			<Content Header="projects">
				<p className="italic textSmall">
					For a full list of my programming projects, please visit my&thinsp;
					<Link href={socialLinks.GitHub.href}>GitHub profile</Link>.
				</p>

				{repos.length > 0 &&
					repos.map(repo => <ProjectListing repo={repo} key={repo.name} />)}
			</Content>
		</Main>
	</Layout>
);

export default ProjectPage;
