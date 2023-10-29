import type { IconType } from "@icons-pack/react-simple-icons/types";
import type { FC } from "react";
import type { Icon as FeatherIcon } from "react-feather";

interface IconLinkProps extends React.ComponentProps<"a"> {
	Icon: IconType | FeatherIcon;
	size?: string;
	className?: string;
}

export const IconLink: FC<IconLinkProps> = ({
	Icon,
	size = "18",
	className,
	// eslint-disable-next-line unicorn/prevent-abbreviations
	rel = "noreferrer",
	target = "_blank",
	...rest
}) => (
	<a className={`icon ${className}`} rel={rel} target={target} {...rest}>
		<Icon size={size} />
	</a>
);
