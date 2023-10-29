import type { FC, PropsWithChildren } from "react";

import styles from "./main.module.css";

export const Main: FC<PropsWithChildren> = ({ children }) => (
	<main className={styles.main}>{children}</main>
);
