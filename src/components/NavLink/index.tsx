import classes from "clsx";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ChevronRight } from "react-feather";

import styles from "./nav-link.module.css";

interface NavLinkProps<T extends string> {
	text: string;
	target: Route<T>;
}

export const NavLink = <T extends string>({
	text,
	target
}: NavLinkProps<T>): React.ReactNode => {
	const pathname = usePathname();

	return (
		<Link
			href={target}
			className={classes(
				styles.navLink,
				pathname === target && styles.navLinkActive
			)}
		>
			<span className={styles.navLinkBefore}>
				<ChevronRight size="10" />
			</span>
			<span className={styles.navLinkText}>{text}</span>
		</Link>
	);
};
