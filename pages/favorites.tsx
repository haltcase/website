import React from "react"
import * as icons from "@icons-pack/react-simple-icons"

import Content from "../components/Content"
import Layout from "../components/Layout"
import Main from "../components/Main"

const ProjectPage: React.FunctionComponent = () => (
  <Layout title="Favorites | Bo Lingen">
    <Main>
      <Content Header="favorites">
        <ul style={{ listStyle: "none" }}>
          <li>
            <icons.DotNet />
          </li>
          <li>
            <icons.Github />
          </li>
          <li>
            <icons.ReactJs />
          </li>
          <li>
            <icons.LastDotFm />
          </li>
          <li>
            <icons.Windows />
          </li>
        </ul>
      </Content>
    </Main>
  </Layout>
)

export default ProjectPage
