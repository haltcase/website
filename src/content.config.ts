import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const projects = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/data/projects"
	})
});

export const collections = {
	projects
};
