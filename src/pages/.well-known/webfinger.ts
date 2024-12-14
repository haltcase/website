import type { APIRoute } from "astro";

import { errorNotFound } from "@/lib/api/responses";

const destinations = {
	"acct:haltcase@hachyderm.io":
		"https://hachyderm.io/.well-known/webfinger?resource=acct:haltcase@hachyderm.io"
};

export const GET: APIRoute = ({ url, redirect }) => {
	const resource = url.searchParams.get("resource");

	if (!resource) {
		return redirect(destinations["acct:haltcase@hachyderm.io"]);
	}

	const destination =
		destinations[resource as unknown as keyof typeof destinations];

	if (!destination) {
		return errorNotFound();
	}

	return redirect(destination, 302);
};
