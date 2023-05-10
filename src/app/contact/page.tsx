import { FC } from "react";

import socialLinks from "@/client-data/social-links";
import Content from "@/components/Content";
import Main from "@/components/Main";

import styles from "./contact.module.css";

export const metadata = {
	title: "Contact"
};

const ContactPage: FC = () => (
	<Main>
		<Content Header="contact">
			<ul className={styles.contactList}>
				{Object.entries(socialLinks).map(([title, link]) => (
					<li key={link.href}>
						<span>{link.callout}</span>
						<a
							className={`umami--click--contact-${title.toLowerCase()}`}
							href={link.href}
							target="_blank"
							rel="noreferrer">
							{link.display ?? title}
						</a>
					</li>
				))}
			</ul>
		</Content>
	</Main>
);

export default ContactPage;
