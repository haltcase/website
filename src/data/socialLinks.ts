interface SocialLink {
	href: string;
	icon: string;
	callout?: string;
	display?: string;
}

export const socialLinks = {
	GitHub: {
		href: "https://github.com/haltcase",
		icon: "simple-icons:github",
		callout: "Follow on"
	},
	Bluesky: {
		href: "https://bsky.haltcase.dev",
		icon: "simple-icons:bluesky",
		callout: "Reach out on"
	},
	Mastodon: {
		href: "https://hachyderm.io/@haltcase",
		icon: "simple-icons:mastodon",
		callout: "Boost on"
	},
	Email: {
		href: "mailto:bo@haltcase.dev",
		icon: "tabler:mail-filled",
		callout: "Email me at",
		display: "bo@haltcase.dev"
	},
	LinkedIn: {
		href: "https://www.linkedin.com/in/bo-lingen",
		icon: "simple-icons:linkedin",
		callout: "Send a message on"
	}
} satisfies Record<string, SocialLink>;
