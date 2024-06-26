import avatarImage from "@public/avatar.jpg";
import Image from "next/image";
import type { FC } from "react";
import { ArrowRight } from "react-feather";

import { skills } from "@/client-data/skills";
import { Content } from "@/components/Content";
import { Divider } from "@/components/Divider";
import { Main } from "@/components/Main";
import { MessageCycle } from "@/components/MessageCycle";

import styles from "./about.module.css";

export const metadata = {
	title: "About"
};

const HeaderAdorner: FC = () => (
	<div className={styles.aboutHeaderAdorner}>
		<div className={styles.aboutHeaderFlyout}>
			<span>bo</span>
			<ArrowRight size="14" />
		</div>

		<Image className={styles.aboutHeaderAvatar} src={avatarImage} alt="" />
	</div>
);

const AboutPage: FC = () => (
	<Main>
		<Content
			Header="about me"
			className={styles.aboutContent}
			HeaderAdorner={<HeaderAdorner />}
		>
			<p className={styles.aboutSkills}>
				<MessageCycle
					messages={skills}
					interval={2000}
					staticPrefix={"I do "}
					suffix={"."}
					cursor={"|"}
				/>
			</p>

			<p>
				I graduated with a degree in Graphic Communications Management (GCM),
				which is a print industry triple threat of{" "}
				<span className="italic">graphic design</span>,{" "}
				<span className="italic">communication skills</span>, and{" "}
				<span className="italic">project management</span>. After finishing my
				degree I started my career in print &amp; mail in the Minneapolis area,
				and am currently the Lead Developer at{" "}
				<a
					href="https://www.seachangemn.com"
					target="_blank"
					rel="noreferrer"
					data-umami-event="about-seachange-link"
				>
					SeaChange
				</a>
				.
			</p>

			<p>
				My career thus far has gotten me shouldered up to print-for-mail and
				given me opportunities to develop applications, automations, and
				processes. I am experienced in web design, including the design of email
				campaigns, and the web languages of HTML, CSS, and JavaScript /
				TypeScript. I have also become familiar with .NET programming, having
				developed applications in C#, F#, and PowerShell for various
				environments &mdash; including command line interfaces, complex desktop
				applications, and automation workflows.
			</p>

			<Divider width="25%" />

			<h3>personal</h3>

			<p>
				I spend most of my time creating things, like programming, writing, or
				producing music. I’ve written open source libraries and designed
				websites. I’ve written short stories. I’ve made instrumentals and
				recorded vocals over a couple dozen musical tracks and explored making
				film scores.
			</p>

			<p>
				I consider my interest and skills in web design to be due, at least in
				part, to GeoCities websites and MySpace pages.
			</p>

			<p>
				I believe in science. I love space and would maybe consider being on the
				third or fourth trip to Mars.
			</p>

			<p>
				Kurt Vonnegut and Stephen King still compete with one another for the
				title of my favorite author, despite the former’s death in 2007
				(although that only counts for those of you living through time
				linearly).
			</p>

			<Divider width="25%" />

			<h3>this site</h3>

			<p>
				This site was designed from scratch by hand, rather than using any
				templates. It’s written in TypeScript, uses React, is powered by
				Next.js, and is hosted by Vercel.
			</p>

			<blockquote className={styles.postSignoff}>
				To HTML’s <code>blink</code> and beyond.
			</blockquote>
		</Content>
	</Main>
);

export default AboutPage;
