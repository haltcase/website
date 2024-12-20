import type { APIRoute } from "astro";

import { errorNotFound } from "@/lib/api/responses";
import { fetchRepo } from "@/lib/services/github";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const prerender = false;

export const GET: APIRoute = async ({ params, redirect }) => {
	const { project } = params;

	if (!project) {
		return errorNotFound();
	}

	const info = await fetchRepo(project);

	if (info == null) {
		return errorNotFound();
	}

	return redirect(info.repository.homepageUrl ?? info.repository.url, 302);
};
