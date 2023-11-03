import React from "react";
import PageLayout from "../components/PageLayout";
import { graphql, Link } from "gatsby";
import CardItem from "../components/CardItem";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  const labels = data.allBloggerPost.nodes;
  return (
    <PageLayout> 
      <h1>Blogs</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post)=> {
          const imageUrl = post.frontmatter.featuredImageUrl;
          const title = post.frontmatter.title;
          const slug = post.frontmatter.slug;
          const label = labels.find((label) => label.slug === slug);
          const excerpt = post.excerpt;
          const author = data.site.siteMetadata.author.name;
          const published = post.frontmatter.date;
          
          return (
            <li key={slug}>
              <Link to={slug}>
                <CardItem
                  imageUrl={imageUrl}
                  title={title}
                  label={label ? label.labels : []}
                  excerpt={excerpt}
                  author={author}
                  published={published}
                >
                </CardItem>
              </Link>
            </li>
          )
        })}
      </ul>
    </PageLayout>
  )
}

export default Blog;

export const blogsQuery = graphql`
  query {
    allBloggerPost(sort: {published: DESC}) {
      nodes {
        labels
        slug
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt(pruneLength: 70)
        frontmatter {
          slug
          title
          date(fromNow: true)
          featuredImageUrl
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
  }
`;
