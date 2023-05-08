import Link from "next/link";

import Content from "@/components/Content";
import Main from "@/components/Main";

import styles from "./not-found.module.css";

export const metadata = {
	title: "404 | Bo Lingen"
};

const NotFoundPage: React.FC = () => (
	<Main>
		<Content
			Header="404"
			className={styles.content}
			headerClassName={styles.header}>
			<p className={styles.errorBody}>
				This page could not be found.
				<Link href="/" className={styles.returnButton}>
					<button>Home</button>
				</Link>
			</p>
		</Content>
	</Main>
);

export default NotFoundPage;
