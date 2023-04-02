import { GetStaticPaths, GetStaticProps } from "next";

import { cachePeriod } from "../lib/constants";
import { fetchRepo, fetchTopRepos } from "../lib/github-graphql";

const notFound = {
	notFound: true as const,
	revalidate: cachePeriod
};

export const getStaticPaths: GetStaticPaths = async () => {
	const repos = await fetchTopRepos();

	return {
		paths:
			repos?.map(repo => ({
				params: {
					project: repo.name
				}
			})) ?? [],
		fallback: "blocking"
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (params == null || params.project == null) {
		return notFound;
	}

	const info = await fetchRepo(String(params.project));

	if (info == null) {
		return notFound;
	}

	return {
		redirect: {
			destination: info.repository.homepageUrl ?? info.repository.url,
			permanent: false
		},
		revalidate: cachePeriod
	};
};

const NullPage = (): null => null;

export default NullPage;
