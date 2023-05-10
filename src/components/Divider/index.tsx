import { FC } from "react";

import styles from "./divider.module.css";

interface Props {
	width?: string;
}

const Divider: FC<Props> = ({ width = "100%" }) => (
	<div className={styles.divider} style={{ width }} />
);

export default Divider;
