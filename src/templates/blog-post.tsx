import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.file.childMarkdownRemark.frontmatter.title} />
      <h1>{data.file.childMarkdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }}
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query BlogPostTemplateQuery($slug: String!) {
    file(childMarkdownRemark: { frontmatter: { slug: { eq: $slug } } }) {
      childMarkdownRemark {
        frontmatter {
          slug
          title
        }
        html
      }
    }
  }
`
