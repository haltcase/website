import { FC } from "react";
import { Code } from "react-feather";

import socialLinks from "@/client-data/social-links";
import IconLink from "@/components/IconLink";

import styles from "./footer.module.css";

const getCopyrightDate = (currentYear: number): string =>
	currentYear === 2020 ? "2020" : `2020-${currentYear}`;

const Footer: FC = () => (
	<footer className={styles.footer}>
		<div>
			<ul className={styles.iconList}>
				{Object.entries(socialLinks).map(([title, link]) => (
					<li key={link.href}>
						<IconLink
							className={`umami--click--footer-${title.toLowerCase()}`}
							{...link}
							title={title}
							rel="me noopener"
							target="_blank"
						/>
					</li>
				))}
			</ul>

			<p className={styles.footerText}>
				&copy; {getCopyrightDate(new Date().getFullYear())} Bo Lingen
			</p>

			<ul className={styles.iconList}>
				<li>
					<IconLink
						className={`umami--click--footer-source`}
						href="https://github.com/haltcase/website"
						Icon={Code}
						title="Source at GitHub"
					/>
				</li>
			</ul>
		</div>
	</footer>
);

export default Footer;
