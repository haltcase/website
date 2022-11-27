interface NavLinkData {
	text: string;
	target: string;
}

const links: NavLinkData[] = [
	{ text: "About", target: "/about" },
	{ text: "Projects", target: "/projects" },
	{ text: "Contact", target: "/contact" }
];

export default links;
