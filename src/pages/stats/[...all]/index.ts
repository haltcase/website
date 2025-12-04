import type { APIRoute } from "astro";
import { STATS_URL, STATS_URL_2 } from "astro:env/server";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const prerender = false;

const getProxyUrl = (request: Request, statsDomain: string) => {
	const proxyUrl = new URL(statsDomain);
	const requestUrl = new URL(request.url);
	const basePath = requestUrl.pathname.replace("/stats", "");
	return new URL(basePath, proxyUrl);
};

export const ALL: APIRoute = async ({ request }) => {
	const requestUrl = new URL(request.url);
	const statsDomain = requestUrl.pathname.startsWith("/stats/api")
		? STATS_URL_2
		: STATS_URL;

	const proxyUrl = getProxyUrl(request, statsDomain);
	const response = await fetch(proxyUrl.href, request);
	return new Response(response.body);
};
