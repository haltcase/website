import React from "react"
import classes from "clsx"

import Divider from "../Divider"
import styles from "./content.module.css"

interface Props {
  header: string
  className?: string
  headerClassName?: string
  HeaderAdorner?: React.FunctionComponent
}

const IndexPage: React.FunctionComponent<Props> = ({
  children,
  header,
  HeaderAdorner,
  headerClassName = "",
  className = ""
}) => (
  <section className={classes(styles.content, className !== "" && className)}>
    <section className={styles.contentHeader}>
      <div className={styles.contentHeaderFlex}>
        <h1 className={classes(styles.container, headerClassName)}>{header}</h1>
        {HeaderAdorner != null && <HeaderAdorner />}
      </div>
      <Divider />
    </section>

    <article className={styles.container}>
      {children}
    </article>
  </section>
)

export default IndexPage
