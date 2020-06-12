// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Projects &amp; other sites" />
    <h1>This is where I will list my projects and accomplishments</h1>
    <p></p>
    <div className="other-sites links">
      <div>
        <a href="https://www.linkedin.com/in/craigcouture/">LinkedIn</a>
      </div>
      <div>
        <a href="https://github.com/couturecraigj">GitHub</a>
      </div>
      <div>
        <a href="https://stackoverflow.com/story/moosecouture">StackOverflow</a>
      </div>
    </div>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
