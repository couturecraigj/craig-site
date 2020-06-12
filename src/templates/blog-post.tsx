import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"

const IndexPage = ({data}) => {
  console.log(data)
  return (
  <Layout>
    <SEO title={data.file.childMarkdownRemark.frontmatter.title} />
  <h1>{data.file.childMarkdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{__html: data.file.childMarkdownRemark.html}} />
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query ($slug: String!){
    file(childMarkdownRemark: {frontmatter: {slug: {eq: $slug}}}) {
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
