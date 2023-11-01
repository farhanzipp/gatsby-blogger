import React from "react"
import PageLayout from "../components/PageLayout"
import { graphql } from "gatsby"
import CardItem from "../components/CardItem";

const Blogs = ({ data }) => {
  const { edges: markdowns } = data.allMarkdownRemark;
  const { edges: blogs } = data.allBloggerPost;

  const posts = markdowns.map(({ node }, index) => {
    const { frontmatter, excerpt, id } = node;
    const { labels, author } = blogs[index].node;

    return (
      <li key={id}>
        <CardItem
          imageUrl={frontmatter.featuredImageUrl}
          title={frontmatter.title}
          label={labels}
          excerpt={excerpt}
          author={author.displayName}
          published={frontmatter.date}
        />
      </li>
    );
  });

  return (
    <PageLayout> 
      <h1>Blogs</h1>
      <ul>{posts}</ul>
    </PageLayout>
  );
}

export default Blogs

export const blogsQuery = graphql`
{
  allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
    edges {
      node {
        id
        frontmatter {
          featuredImageUrl
          title
          date(formatString: "DD-MM-YYYY")
        }
        excerpt
      }
    }
  }
  allBloggerPost {
    edges {
      node {
        labels
        author {
          displayName
        }
      }
    }
  }
}
`
