import "./styles.css";

import { FC } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
	title: {
		default: "Bo Lingen",
		template: "%s | Bo Lingen"
	}
};

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
	<html lang="en">
		<head>
			<script
				async
				defer
				data-website-id="ebb6ad49-b14c-443e-8ae1-38aebeac7aaf"
				data-domains="bolingen.me"
				src="/stats/us.js"></script>
		</head>

		<body>
			<Header />

			{children}

			<Footer />
		</body>
	</html>
);

export default RootLayout;
