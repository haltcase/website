import type { GetStaticProps } from "next";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Code, Globe, Star } from "react-feather";

import socialLinks from "../client-data/social-links";
import Content from "../components/Content";
import IconLink from "../components/IconLink";
import Layout from "../components/Layout";
import Main from "../components/Main";
import { cachePeriod } from "../lib/constants";
import { fetchTopRepos, Repository } from "../lib/github-graphql";
import selectedProjects from "../lib/selected-projects";
import styles from "./projects.module.css";

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

	const repos = (await fetchTopRepos()) ?? [];

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
						className={`umami--click--projects-homepage-${repo.name}`}
						href={repo.homepageUrl}
						Icon={Globe}
						title="Homepage"
						size="14"
					/>
				)}
				{repo.url !== "" && (
					<IconLink
						className={`umami--click--projects-repo-${repo.name}`}
						href={repo.url}
						Icon={Code}
						title="Source"
						size="14"
					/>
				)}
				{repo.stargazerCount > 0 && (
					<a
						className={`umami--click--projects-stargazers-${repo.name} ${styles.projectListingStarCount}`}
						href={repo.url + "/stargazers"}
						title="GitHub Stars">
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
					<Link
						className="umami--click--projects-github"
						href={socialLinks.GitHub.href}>
						GitHub profile
					</Link>
					.
				</p>

				{repos.length > 0 &&
					repos.map(repo => <ProjectListing repo={repo} key={repo.name} />)}
			</Content>
		</Main>
	</Layout>
);

export default ProjectPage;
