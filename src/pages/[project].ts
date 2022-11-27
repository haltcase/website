import { GetServerSideProps } from "next";

import { cachePeriod } from "../lib/constants";
import { fetchRepo } from "../lib/github-graphql";

const notFound = {
	notFound: true as const,
	revalidate: cachePeriod
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
