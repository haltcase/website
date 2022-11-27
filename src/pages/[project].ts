import fetch from "isomorphic-unfetch";
import { GetServerSideProps } from "next";

interface Props {
	url: string;
	repository: {
		url: string;
		homepageUrl: string | null;
	};
}

interface ViewerResult {
	data: {
		viewer: Props;
	};
}

const notFound = {
	notFound: true as const
};

const getProjectInfo = async (project: string): Promise<Props | undefined> => {
	const token = process.env.WEBSITE_GITHUB_TOKEN;

	if (token == null || token === "") {
		console.error(
			"[project]: no GitHub token found in WEBSITE_GITHUB_TOKEN environment variable."
		);
		return;
	}

	const query = `
query {
  viewer {
    repository (name: "${project}") {
      url
      homepageUrl
    }
  }
}
`.replace(/\s+/g, " ");

	const result = await fetch("https://api.github.com/graphql", {
		headers: {
			Authorization: `bearer ${token}`
		},
		method: "POST",
		body: JSON.stringify({ query })
	});

	try {
		const json: ViewerResult = await result.json();
		const { viewer } = json.data;

		if (viewer.repository.homepageUrl === "") {
			viewer.repository.homepageUrl = null;
		}

		return viewer;
	} catch {
		console.error(`Failed to retrieve GitHub project ${project}`);
	}
};

export const getServerSideProps: GetServerSideProps = async ({
	params,
	res
}) => {
	if (params == null || params.project == null) {
		return notFound;
	}

	const info = await getProjectInfo(String(params.project));

	if (info == null) {
		return notFound;
	}

	res.writeHead(301, {
		Location: info.repository.homepageUrl ?? info.repository.url
	});

	res.end();

	return {
		props: {}
	};
};

const NullPage = (): null => null;

export default NullPage;
