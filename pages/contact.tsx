import Link from "next/link";
import React from "react";

import socialLinks from "../client-data/social-links";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Main from "../components/Main";
import styles from "./contact.module.css";

const ContactPage: React.FunctionComponent = () => (
	<Layout title="Contact | Bo Lingen">
		<Main>
			<Content Header="contact">
				<ul className={styles.contactList}>
					{Object.entries(socialLinks).map(([title, link]) => (
						<li key={link.href}>
							<span>{link.callout}</span>
							<Link href={link.href}>{link.display ?? title}</Link>
						</li>
					))}
				</ul>
			</Content>
		</Main>
	</Layout>
);

export default ContactPage;
