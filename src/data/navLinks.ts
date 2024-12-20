import type { Route } from "astro-typesafe-routes";

export interface NavLinkData {
	text: string;
	target: Route;
}

export const navLinks: NavLinkData[] = [
	{ text: "About", target: "/about" },
	{ text: "Projects", target: "/projects" },
	{ text: "Contact", target: "/contact" }
];
