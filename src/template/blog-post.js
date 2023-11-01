import React from "react";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <img src={post.frontmatter.featuredImageUrl} alt={post.frontmatter.title} />
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featuredImageUrl
        date(formatString: "DD-MM-YYYY")
      }
      html
    }
  }
`;

export default BlogPost;
