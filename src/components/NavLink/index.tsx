import classes from "clsx";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "react-feather";

import styles from "./nav-link.module.css";

interface NavLinkProps<T extends string> {
	text: string;
	target: Route<T>;
}

const NavLink = <T extends string>({ text, target }: NavLinkProps<T>) => {
	const pathname = usePathname();

	return (
		<Link
			href={target}
			className={classes(
				styles.navLink,
				pathname === target && styles.navLinkActive
			)}>
			<span className={styles.navLinkBefore}>
				<ChevronRight size="10" />
			</span>
			<span className={styles.navLinkText}>{text}</span>
		</Link>
	);
};

export default NavLink;
