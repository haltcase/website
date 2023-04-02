import { withPlausibleProxy } from "next-plausible";

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
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

export default withPlausibleProxy({
	customDomain: "https://plausible.lab.lingen.life"
})(nextConfig);
