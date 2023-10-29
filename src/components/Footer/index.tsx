import type { FC } from "react";
import { Code } from "react-feather";

import { socialLinks } from "@/client-data/social-links";
import { IconLink } from "@/components/IconLink";

import styles from "./footer.module.css";

const getCopyrightDate = (currentYear: number): string =>
	currentYear === 2020 ? "2020" : `2020-${currentYear}`;

export const Footer: FC = () => (
	<footer className={styles.footer}>
		<div>
			<ul className={styles.iconList}>
				{Object.entries(socialLinks).map(([title, link]) => (
					<li key={link.href}>
						<IconLink
							{...link}
							title={title}
							rel="me noopener"
							target="_blank"
							data-umami-event={`footer-${title.toLowerCase()}`}
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
						href="https://github.com/haltcase/website"
						Icon={Code}
						title="Source at GitHub"
						data-umami-event="footer-source"
					/>
				</li>
			</ul>
		</div>
	</footer>
);
