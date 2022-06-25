import React from "react"
import Link from "next/link"

import Content from "../components/Content"
import Layout from "../components/Layout"
import Main from "../components/Main"
import MessageCycle from "../components/MessageCycle"

import styles from "./index.module.css"

const actions = [
  "program",
  "design",
  "improve",
  "automate"
]

const IndexPage: React.FunctionComponent = () => (
  <Layout title="Bo Lingen">
    <Main>
      <section className={styles.sidebar} style={{ display: "none" }}>
        <section className={styles.intro}>
          <img
            className={styles.introAvatar}
            src="https://avatars0.githubusercontent.com/u/16605186?s=460&u=56e08ad237910b19b4047e3248ff0179047a3e72&v=4"
            alt="" />

          <h2 className={styles.introName}>Bo Lingen</h2>

          <p className={styles.introContact}>
            <a href="mailto:bo@lingen.life">bo@lingen.life</a>
          </p>

          <section className={styles.introSummary}>
            <p>
              Learner, dreamer, and a believer that our reach exceeds our grasp.
            </p>

            <Link href="/about">
              <a className="button">
                <button>
                  More
                </button>
              </a>
            </Link>
          </section>

          <section className={styles.footer}>
            <p></p>
          </section>
        </section>
      </section>

      <Content
        header="hello &mdash; my name is bo"
        className={styles.frontPageContent}
        headerClassName={styles.frontPageContentHeader}>
        <h4 className={styles.frontPageContentActions}>
          <MessageCycle
            messages={actions}
            staticPrefix="I "
            staticSuffix=" things."
            interval={4000} />
        </h4>

        <p>
          I am the Data Services Manager and an engineer on the GATHER platform at&thinsp;
          <Link href="https://www.seachangemn.com">SeaChange Print Innovations</Link>
          &thinsp;by day, and a developer by night. Well, also day. Extending into the night.
          Please feel free to <Link href="/about"><a>read more about me</a></Link>,&thinsp;
          <Link href="/contact"><a>contact me</a></Link>, or check out some of the&thinsp;
          <Link href="/projects"><a>projects</a></Link> I’ve worked on.
        </p>
      </Content>
    </Main>
  </Layout>
)

export default IndexPage
