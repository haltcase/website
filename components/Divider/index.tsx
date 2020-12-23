import React from "react"

import styles from "./divider.module.css"

interface Props {
  width?: string
}

const Divider: React.FunctionComponent<Props> = ({
  width = "100%"
}) => (
  <div className={styles.divider} style={{ width }} />
)

export default Divider
