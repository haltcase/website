import React from "react"
import Link from "next/link"

import Content from "../components/Content"
import Layout from "../components/Layout"
import Main from "../components/Main"

import styles from "./404.module.css"

const NotFoundPage: React.FunctionComponent = () => (
  <Layout title="Bo Lingen">
    <Main>
      <Content
        Header="404"
        className={styles.content}
        headerClassName={styles.header}>
        <p className={styles.errorBody}>
          This page could not be found.
          <Link href="/">
            <a className={styles.returnButton}><button>Home</button></a>
          </Link>
        </p>
      </Content>
    </Main>
  </Layout>
)

export default NotFoundPage
