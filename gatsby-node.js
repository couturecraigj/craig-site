const path = require(`path`)
const dev = process.env.NODE_ENV !== 'production';
exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    return graphql(
      `
        query loadPagesQuery($limit: Int!) {
          allMarkdownRemark(limit: $limit${dev?'':',draft:false'}) {
            edges {
              node {
                frontmatter {
                  slug
                }
              }
            }
          }
        }
      `,
      { limit: 1000,  }
    ).then(result => {
      result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          // Path for this page — required
          path: `${edge.node.frontmatter.slug}`,
          component: blogPostTemplate,
          context: {
            slug: edge.node.frontmatter.slug
            // Add optional context data to be inserted
            // as props into the page component..
            //
            // The context data can also be used as
            // arguments to the page GraphQL query.
            //
            // The page "path" is always available as a GraphQL
            // argument.
          },
        })
      })
      resolve();
    })
  })
}
