import { FC, PropsWithChildren } from "react";

import styles from "./main.module.css";

const Main: FC<PropsWithChildren> = ({ children }) => (
	<main className={styles.main}>{children}</main>
);

export default Main;
