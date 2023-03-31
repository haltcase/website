import { withPlausibleProxy } from "next-plausible";

export default withPlausibleProxy({
	customDomain: "https://plausible.lab.lingen.life"
})({
	redirects: [
		{
			source: "/.well-known/webfinger",
			destination:
				"https://hachyderm.io/.well-known/webfinger?resource=acct:haltcase@hachyderm.io",
			permanent: true
		}
	]
});
