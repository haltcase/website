import { withPlausibleProxy } from "next-plausible";

export default withPlausibleProxy({
	customDomain: "https://plausible.lab.lingen.life"
})({
	redirects: [
		{
			basePath: false,
			source: "/.well-known/webfinger",
			destination:
				"https://hachyderm.io/.well-known/webfinger?resource=acct:haltcase@hachyderm.io",
			permanent: true
		}
	]
});
