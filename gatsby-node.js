exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    query {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
          nodes {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    `);
  
    if (result.errors) {
      reporter.panic("Error loading characters!", reporter.errors)
    }
  
    const posts = result.data.allMarkdownRemark.nodes;

    posts.forEach(post => {
        const slug = post.frontmatter.slug;
      actions.createPage({
        path: `/blog/${slug}`,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { slug: slug },
      })
    })
  }
  