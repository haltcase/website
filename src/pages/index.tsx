import Link from "next/link";
import { FunctionComponent } from "react";

import socialLinks from "../client-data/social-links";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Main from "../components/Main";
import MessageCycle from "../components/MessageCycle";
import styles from "./index.module.css";

const actions = ["program", "design", "improve", "automate"];

const IndexPage: FunctionComponent = () => (
	<Layout title="Bo Lingen">
		<Main>
			<section className={styles.sidebar} style={{ display: "none" }}>
				<section className={styles.intro}>
					<img className={styles.introAvatar} src="/avatar.jpg" alt="" />

					<h2 className={styles.introName}>Bo Lingen</h2>

					<p className={styles.introContact}>
						<a
							className="umami--click--sidebar-contact"
							href={socialLinks.Email.href}>
							{socialLinks.Email.display}
						</a>
					</p>

					<section className={styles.introSummary}>
						<p>
							Learner, dreamer, and a believer that our reach exceeds our grasp.
						</p>

						<Link className="umami--click--sidebar-about button" href="/about">
							<button>More</button>
						</Link>
					</section>

					<section className={styles.footer}>
						<p></p>
					</section>
				</section>
			</section>

			<Content
				Header="hello &mdash; my name is bo"
				className={styles.frontPageContent}
				headerClassName={styles.frontPageContentHeader}>
				<h4 className={styles.frontPageContentActions}>
					<MessageCycle
						messages={actions}
						staticPrefix="I "
						staticSuffix=" things."
						interval={4000}
					/>
				</h4>

				<p>
					I am an engineer on the GATHER platform at{" "}
					<a
						className="umami--click--intro-seachange-link"
						href="https://www.seachangemn.com"
						target="_blank"
						rel="noreferrer">
						SeaChange Print Innovations
					</a>{" "}
					by day, and a developer by night. Well, also day. Extending into the
					night. Please feel free to{" "}
					<Link className="umami--click--intro-about" href="/about">
						read more about me
					</Link>
					,{" "}
					<Link className="umami--click--intro-contact" href="/contact">
						contact me
					</Link>
					, or check out some of the{" "}
					<Link className="umami--click--intro-projects" href="/projects">
						projects
					</Link>{" "}
					I’ve worked on.
				</p>
			</Content>
		</Main>
	</Layout>
);

export default IndexPage;
