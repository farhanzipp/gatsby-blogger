import React from "react";
import { graphql } from "gatsby";
import PageLayout from "../components/PageLayout";



const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <PageLayout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </PageLayout>
  );
};

export default BlogPost;

export const query = graphql`
  query blogPostTemplate($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        featuredImageUrl
        date(formatString: "DD-MM-YYYY")
      }
    }
  }
`;

