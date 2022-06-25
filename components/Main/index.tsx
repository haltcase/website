import { FunctionComponent, PropsWithChildren } from "react";

import styles from "./main.module.css";

const Main: FunctionComponent<PropsWithChildren> = ({ children }) => (
	<main className={styles.main}>{children}</main>
);

export default Main;
