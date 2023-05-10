import { FC } from "react";
import { Code, Globe, Star } from "react-feather";

import socialLinks from "@/client-data/social-links";
import Content from "@/components/Content";
import IconLink from "@/components/IconLink";
import Main from "@/components/Main";
import { fetchTopRepos, Repository } from "@/lib/github-graphql";
import selectedProjects from "@/lib/selected-projects";

import styles from "./projects.module.css";

export const metadata = {
	title: "Projects"
};

export const revalidate = 600;

const getRepos = async (): Promise<Repository[]> => {
	const token = process.env.WEBSITE_GITHUB_TOKEN;

	if (token == null || token === "") {
		console.error(
			"Projects: no GitHub token found in WEBSITE_GITHUB_TOKEN environment variable."
		);

		return [];
	}

	const repos = (await fetchTopRepos()) ?? [];

	return repos;
};

interface ProjectListingProps {
	repo: Repository;
}

const ProjectListing: FC<ProjectListingProps> = ({ repo }) => (
	<section className={styles.projectListing}>
		<h3 className={styles.projectListingHeader}>
			<span className={styles.projectListingHeaderTitle}>{repo.name}</span>
			{repo.homepageUrl !== "" && (
				<IconLink
					href={repo.homepageUrl}
					Icon={Globe}
					title="Homepage"
					size="14"
					data-umami-event={`projects-homepage-${repo.name}`}
				/>
			)}
			{repo.url !== "" && (
				<IconLink
					href={repo.url}
					Icon={Code}
					title="Source"
					size="14"
					data-umami-event={`projects-repo-${repo.name}`}
				/>
			)}
			{repo.stargazerCount > 0 && (
				<a
					className={styles.projectListingStarCount}
					href={repo.url + "/stargazers"}
					title="GitHub Stars"
					data-umami-event={`projects-stargazers-${repo.name}`}>
					<Star size="14" className="icon" />
					<span>{repo.stargazerCount}</span>
				</a>
			)}
		</h3>

		{selectedProjects[repo.name].description}
	</section>
);

const ProjectPage = async () => {
	const repos = await getRepos();

	return (
		<Main>
			<Content Header="projects">
				<p className="italic textSmall">
					For a full list of my programming projects, please visit my&thinsp;
					<a href={socialLinks.GitHub.href} data-umami-event="projects-github">
						GitHub profile
					</a>
					.
				</p>

				{repos.length > 0 &&
					repos.map(repo => <ProjectListing repo={repo} key={repo.name} />)}
			</Content>
		</Main>
	);
};

export default ProjectPage;
