import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel";
import tailwind from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";
import typesafeRoutes from "astro-typesafe-routes";

export default defineConfig({
	output: "static",
	adapter: vercel({
		isr: {
			expiration: 60 * 60 * 24
		}
	}),
	env: {
		schema: {
			STATS_URL: envField.string({
				context: "server",
				access: "secret",
				startsWith: "https://"
			}),
			WEBSITE_GITHUB_TOKEN: envField.string({
				context: "server",
				access: "secret"
			})
		}
	},

	integrations: [
		icon({
			include: {
				"simple-icons": ["bluesky", "github", "linkedin", "mastodon"],
				tabler: [
					"arrow-right",
					"chevron-right",
					"code",
					"menu-2",
					"mail-filled",
					"star",
					"world"
				]
			}
		}),
		typesafeRoutes(),
		svelte()
	],

	vite: {
		plugins: [tailwind()]
	}
});
