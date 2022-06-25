import type { Icon as SimpleIcon } from "@icons-pack/react-simple-icons";
import { Github, Linkedin, Twitter } from "@icons-pack/react-simple-icons";
import type { Icon as FeatherIcon } from "react-feather";
import { Mail } from "react-feather";

interface SocialLink {
	href: string;
	Icon: SimpleIcon | FeatherIcon;
	callout?: string;
	display?: string;
}

const socialLinks: Readonly<Record<string, SocialLink>> = Object.freeze({
	GitHub: {
		href: "https://github.com/haltcase",
		Icon: Github,
		callout: "Follow on"
	},
	Twitter: {
		href: "https://twitter.com/haltcase",
		Icon: Twitter,
		callout: "Reach out on"
	},
	Email: {
		href: "mailto:bo@lingen.life",
		Icon: Mail,
		callout: "Email me at",
		display: "bo@lingen.life"
	},
	LinkedIn: {
		href: "https://www.linkedin.com/in/bo-lingen",
		Icon: Linkedin,
		callout: "Send a message on"
	}
});

export default socialLinks;
