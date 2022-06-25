import { Icon as SimpleIcon } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Icon as FeatherIcon } from "react-feather";

interface Props {
	href: string;
	Icon: SimpleIcon | FeatherIcon;
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
	rel = "",
	target = ""
}) => (
	<Link href={href}>
		<a className="icon" title={title} rel={rel} target={target}>
			<Icon size={size} />
		</a>
	</Link>
);

export default IconLink;
