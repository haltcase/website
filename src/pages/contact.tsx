import { FunctionComponent } from "react";

import socialLinks from "../client-data/social-links";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Main from "../components/Main";
import styles from "./contact.module.css";

const ContactPage: FunctionComponent = () => (
	<Layout title="Contact | Bo Lingen">
		<Main>
			<Content Header="contact">
				<ul className={styles.contactList}>
					{Object.entries(socialLinks).map(([title, link]) => (
						<li key={link.href}>
							<span>{link.callout}</span>
							<a href={link.href} target="_blank" rel="noreferrer">
								{link.display ?? title}
							</a>
						</li>
					))}
				</ul>
			</Content>
		</Main>
	</Layout>
);

export default ContactPage;
