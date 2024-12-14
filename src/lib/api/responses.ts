export const errorNotFound = (options?: ResponseInit) =>
	new Response(null, {
		status: 404,
		statusText: "Not found",
		...options
	});
