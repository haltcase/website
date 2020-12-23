import React from "react"
import Link from "next/link"

import ContactForm from "../components/ContactForm"
import Content from "../components/Content"
import Layout from "../components/Layout"
import Main from "../components/Main"

const ContactPage: React.FunctionComponent = () => (
  <Layout title="Contact | Bo Lingen">
    <Main>
      <Content header="contact">
        <p>
          If you’d like to contact me, you can use the form below to send me
          a message directly.

          You can also reach me through <Link href="mailto:bo@lingen.life"><a>email</a></Link>
          &thinsp;or on <Link href="https://twitter.com/ctycde"><a>Twitter</a></Link>.
        </p>

        <ContactForm />
      </Content>
    </Main>
  </Layout>
)

export default ContactPage
