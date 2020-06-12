import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allFile(
        limit: 10
        filter: { sourceInstanceName: { eq: "posts" } }
        skip: 0
      ) {
        edges {
          node {
            name
            childMarkdownRemark {
              frontmatter {
                title
                slug
              }
              html
              timeToRead
              excerpt
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Hi from the blog page</h1>
      {data.posts.edges.map(({ node }) => (
        <div key={node.childMarkdownRemark.frontmatter.slug}>
          <Link to={`/${node.childMarkdownRemark.frontmatter.slug}`}>
            {node.childMarkdownRemark.frontmatter.title}
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export default Blog
