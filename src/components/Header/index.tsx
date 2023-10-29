"use client";

import avatarImage from "@public/avatar.jpg";
import classes from "clsx";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";
import { Menu, X } from "react-feather";

import { links } from "@/client-data/nav-links";
import { NavLink } from "@/components/NavLink";

import styles from "./header.module.css";

export const Header: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onMenuClick = (): void => setIsOpen(!isOpen);

	return (
		<header className={classes(styles.header, isOpen && styles.open)}>
			<nav className={styles.navLeft}>
				<Link href="/" className={styles.logoContainer} title="Home">
					<Image className={styles.logoImage} src={avatarImage} alt="" />
					<span>bo lingen</span>
				</Link>
			</nav>

			<nav className={styles.navRight}>
				{/*
			<span className={styles.navIcon}>
				<Github size="18" />
			</span>

			<span className={styles.navIcon}>
				<Twitter size="18" />
			</span>
			*/}

				{links.map((link) => (
					<NavLink {...link} key={link.target} />
				))}

				<span className={styles.navMenu} onClick={onMenuClick}>
					{isOpen ? <X size="18" /> : <Menu size="18" />}
				</span>
			</nav>
		</header>
	);
};
