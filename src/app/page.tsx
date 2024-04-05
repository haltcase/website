import Link from "next/link";

import { Content } from "@/components/Content";
import { Main } from "@/components/Main";
import { MessageCycle } from "@/components/MessageCycle";

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
			headerClassName={styles.frontPageContentHeader}
		>
			<h4 className={styles.frontPageContentActions}>
				<MessageCycle
					messages={actions}
					staticPrefix="I "
					staticSuffix=" things."
					interval={4000}
				/>
			</h4>

			<p>
				I am the Lead Developer at{" "}
				<a
					href="https://www.seachangemn.com"
					target="_blank"
					rel="noreferrer"
					data-umami-event="intro-seachange-link"
				>
					SeaChange
				</a>
				. Please feel free to{" "}
				<Link href="/about" data-umami-event="intro-about">
					read more about me
				</Link>
				,{" "}
				<Link href="/contact" data-umami-event="intro-contact">
					contact me
				</Link>
				, or check out some of the{" "}
				<Link href="/projects" data-umami-event="intro-projects">
					projects
				</Link>{" "}
				I’ve worked on.
			</p>
		</Content>
	</Main>
);

export default IndexPage;
