import {
	SiBluesky,
	SiGithub,
	SiLinkedin,
	SiMastodon
} from "@icons-pack/react-simple-icons";
import type { IconType } from "@icons-pack/react-simple-icons/types";
import type { Icon as FeatherIcon } from "react-feather";
import { Mail } from "react-feather";

interface SocialLink {
	href: string;
	Icon: IconType | FeatherIcon;
	callout?: string;
	display?: string;
}

export const socialLinks: Readonly<Record<string, SocialLink>> = Object.freeze({
	GitHub: {
		href: "https://github.com/haltcase",
		Icon: SiGithub,
		callout: "Follow on"
	},
	Bluesky: {
		href: "https://bsky.haltcase.dev",
		Icon: SiBluesky,
		callout: "Reach out on"
	},
	Mastodon: {
		href: "https://hachyderm.io/@haltcase",
		Icon: SiMastodon,
		callout: "Boost on"
	},
	Email: {
		href: "mailto:bo@haltcase.dev",
		Icon: Mail,
		callout: "Email me at",
		display: "bo@haltcase.dev"
	},
	LinkedIn: {
		href: "https://www.linkedin.com/in/bo-lingen",
		Icon: SiLinkedin,
		callout: "Send a message on"
	}
});
