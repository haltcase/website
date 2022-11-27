import "./styles.css";

import { AppProps } from "next/app";
import PlausibleProvider from "next-plausible";
import { FunctionComponent } from "react";

const domain =
	process.env.NODE_ENV === "production" ? "bolingen.me" : "localhost:3000";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
	return (
		<PlausibleProvider
			domain={domain}
			customDomain="https://plausible.lab.lingen.life"
			selfHosted
			enabled={domain.includes("localhost") || undefined}
			trackLocalhost={domain.includes("localhost")}
			trackOutboundLinks>
			<Component {...pageProps} />
		</PlausibleProvider>
	);
};

export default App;
