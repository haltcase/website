import React from "react"

import styles from "./main.module.css"

const Main: React.FunctionComponent = ({
  children
}) => (
  <main className={styles.main}>
    {children}
  </main>
)

export default Main
