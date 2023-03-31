import { withPlausibleProxy } from "next-plausible";

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
	redirects: async () => [
		{
			source: "/.well-known/webfinger:path*",
			destination:
				"https://hachyderm.io/.well-known/webfinger?resource=acct:haltcase@hachyderm.io"
		}
	]
};

export default withPlausibleProxy({
	customDomain: "https://plausible.lab.lingen.life"
})(nextConfig);
