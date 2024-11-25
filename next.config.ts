/* eslint-disable @typescript-eslint/require-await */
import type { NextConfig } from "next";

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
} satisfies NextConfig;

export default nextConfig;
