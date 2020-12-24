import React from "react"
import Link from "next/link"

import Content from "../components/Content"
import Layout from "../components/Layout"
import Main from "../components/Main"

import styles from "./contact.module.css"

const ContactPage: React.FunctionComponent = () => (
  <Layout title="Contact | Bo Lingen">
    <Main>
      <Content header="contact">
        <ul className={styles.contactList}>
          <li>
            <span>Email me at</span>
            <Link href="mailto:bo@lingen.life"><a>bo@lingen.life</a></Link>
          </li>

          <li>
            <span>Send a message on</span>
            <Link href="www.linkedin.com/in/bo-lingen"><a>LinkedIn</a></Link>
          </li>

          <li>
            <span>Reach out on</span>
            <Link href="https://twitter.com/ctycde"><a>Twitter</a></Link>
          </li>

          <li>
            <span>Follow on</span>
            <Link href="https://github.com/citycide"><a>GitHub</a></Link>
          </li>
        </ul>
      </Content>
    </Main>
  </Layout>
)

export default ContactPage
