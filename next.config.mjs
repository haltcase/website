/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
	experimental: {
		appDir: true,
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
