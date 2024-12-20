import type { APIRoute } from "astro";
import { STATS_URL } from "astro:env/server";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const prerender = false;

const getProxyUrl = (request: Request) => {
	const proxyUrl = new URL(STATS_URL);
	const requestUrl = new URL(request.url);
	const basePath = requestUrl.pathname.replace("/stats", "");
	return new URL(basePath, proxyUrl);
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ALL: APIRoute = async ({ request }) => {
	const proxyUrl = getProxyUrl(request);
	const response = await fetch(proxyUrl.href, request);
	return new Response(response.body);
};
