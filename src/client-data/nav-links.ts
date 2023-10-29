import type { Route } from "next";

interface NavLinkData<T extends string = string> {
	text: string;
	target: Route<T>;
}

export const links: NavLinkData[] = [
	{ text: "About", target: "/about" },
	{ text: "Projects", target: "/projects" },
	{ text: "Contact", target: "/contact" }
];
