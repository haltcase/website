/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
	experimental: {
		typedRoutes: true
	},
	redirects: async () => [
		{
			source: "/.well-known/webfinger:path*",
			destination:
				"https://hachyderm.io/.well-known/webfinger?resource=acct:haltcase@hachyderm.io",
			permanent: false
		}
	],
	rewrites: async () => [
		{
			source: "/stats/:match*",
			destination: "https://stats.bolingen.me/:match*"
		}
	]
};

export default nextConfig;
