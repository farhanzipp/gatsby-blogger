import React from "react";
import PageLayout from "../components/PageLayout";
import { graphql, Link } from "gatsby";
import CardItem from "../components/CardItem";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <PageLayout> 
      <h1>Blogs</h1>
      <ul>
        {posts.map(post => {
          const imageUrl = post.frontmatter.featuredImageUrl;
          const title = post.frontmatter.title;
          const slug = post.frontmatter.slug;
          const label = "not-defined";
          const excerpt = post.excerpt;
          const author = "not-defined";
          const published = post.frontmatter.date;
          return (
            <li key={slug}>
              <Link to={slug}>
                <CardItem
                  imageUrl={imageUrl}
                  title={title}
                  label={label}
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        frontmatter {
          slug
          title
          date(formatString: "DD-MM-YYYY")
          featuredImageUrl
        }
      }
    }
  }
`;
