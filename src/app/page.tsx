import Link from "next/link";

import Content from "@/components/Content";
import Main from "@/components/Main";
import MessageCycle from "@/components/MessageCycle";

import styles from "./index.module.css";

export const metadata = {
	title: "Bo Lingen"
};

const actions = ["program", "design", "improve", "automate"];

const IndexPage: React.FC = () => (
	<Main>
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
);

export default IndexPage;
