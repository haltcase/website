export const errorNotFound = (options?: ResponseInit): Response =>
	new Response(null, {
		status: 404,
		statusText: "Not found",
		...options
	});
