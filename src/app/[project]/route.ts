import { notFound } from "next/navigation";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { fetchRepo } from "@/lib/github-graphql";

export const revalidate = 600;

interface ProjectRouteContext {
	params: {
		project: string;
	};
}

export const GET = async (
	_request: NextRequest,
	context: ProjectRouteContext
) => {
	if (context.params == null || context.params.project == null) {
		notFound();
	}

	const info = await fetchRepo(String(context.params.project));

	if (info == null) {
		notFound();
	}

	return NextResponse.redirect(
		info.repository.homepageUrl ?? info.repository.url,
		{
			status: 302
		}
	);
};
