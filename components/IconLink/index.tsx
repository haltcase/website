import type { Icon as SimpleIcon } from "@icons-pack/react-simple-icons";
import { FunctionComponent } from "react";
import { Icon as FeatherIcon } from "react-feather";

interface Props {
	href: string;
	Icon: typeof SimpleIcon | FeatherIcon;
	title?: string;
	size?: string;
	rel?: string;
	target?: string;
}

const IconLink: FunctionComponent<Props> = ({
	href,
	Icon,
	title = "",
	size = "18",
	rel = "noreferrer",
	target = "_blank"
}) => (
	<a href={href} className="icon" title={title} rel={rel} target={target}>
		<Icon size={size} />
	</a>
);

export default IconLink;
