import type { FC } from "react";

import styles from "./divider.module.css";

interface DividerProps {
	width?: string;
}

export const Divider: FC<DividerProps> = ({ width = "100%" }) => (
	<div className={styles.divider} style={{ width }} />
);
