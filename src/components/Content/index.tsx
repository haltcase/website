import classes from "clsx";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";

import Divider from "../Divider";
import styles from "./content.module.css";

export interface HeaderProps extends PropsWithChildren {
	Header: string | ReactNode;
	isSeamless?: boolean;
	className?: string;
	headerClassName?: string;
	HeaderAdorner?: ReactNode;
}

const DefaultHeader: FunctionComponent<HeaderProps> = ({
	Header,
	headerClassName = "",
	HeaderAdorner
}) => (
	<div className={styles.contentHeaderFlex}>
		<h1 className={classes(styles.container, headerClassName)}>{Header}</h1>

		{HeaderAdorner != null && HeaderAdorner}
	</div>
);

const Content: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
	children,
	Header,
	HeaderAdorner,
	headerClassName = "",
	className = "",
	isSeamless = false
}) => (
	<section
		className={classes(
			styles.content,
			isSeamless && styles.contentSeamless,
			className !== "" && className
		)}>
		<section className={styles.contentHeader}>
			{typeof Header === "string" ? (
				<DefaultHeader
					{...{ Header: Header, headerClassName, HeaderAdorner }}
				/>
			) : (
				Header
			)}

			<Divider />
		</section>

		<article className={styles.container}>{children}</article>
	</section>
);

export default Content;
