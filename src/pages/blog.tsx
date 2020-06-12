import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const PostList = ({ posts, nodeEnv }) => {
  return posts.edges
    .filter(({ node }) => {
      if (nodeEnv !== "production") return true
      if (node.childMarkdownRemark.frontmatter.draft) return false
      return true
    })
    .map(({ node }) => {
      return (
        <div key={node.childMarkdownRemark.frontmatter.slug}>
          <Link to={`/${node.childMarkdownRemark.frontmatter.slug}`}>
            {node.childMarkdownRemark.frontmatter.title}
          </Link>
        </div>
      )
    })
}

const Blog = () => {
  const data = useStaticQuery(graphql`
    query ProductionBlogQuery {
      site {
        siteMetadata {
          nodeEnv
        }
      }
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
                draft
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
      <PostList posts={data.posts} nodeEnv={data.site.siteMetadata.nodeEnv} />
    </Layout>
  )
}

export default Blog
