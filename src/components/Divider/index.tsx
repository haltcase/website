import { FunctionComponent } from "react";

import styles from "./divider.module.css";

interface Props {
	width?: string;
}

const Divider: FunctionComponent<Props> = ({ width = "100%" }) => (
	<div className={styles.divider} style={{ width }} />
);

export default Divider;
