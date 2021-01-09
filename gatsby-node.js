const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const POSTS_PER_PAGE = 10

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, trailingSlash: false })
    createNodeField({
      node,
      name: `slug`,
      value: `/changelog${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const posts = result.data.allMarkdownRemark.edges
  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  // Create changelog list pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/changelog` : `/changelog/page/${i + 1}`,
      component: path.resolve('./src/templates/ChangelogPage.js'),
      context: {
        limit: POSTS_PER_PAGE,
        skip: POSTS_PER_PAGE * i,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create individual changelog post pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/ChangelogPost.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
