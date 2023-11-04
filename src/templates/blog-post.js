import React from "react";
import { graphql } from "gatsby";
import PageLayout from "../components/PageLayout";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const author = data.site.siteMetadata.author.name;
  const authorImg = data.bloggerPost.author.image.url;
  const published = post.frontmatter.date;
  const readTime = post.timeToRead;
  return (
    <PageLayout>
      <div className="container mx-auto p-5">
        <article>
            <h1 className="text-3xl font-bold blog-title">{post.frontmatter.title}</h1>
            <div className="flex py-2">
              <img src={authorImg} alt={author} />
              <div className="px-4">
                <p className="">{author}</p>
                <p className="mb-2 text-xs text-gray-200">{readTime} min read    •   <span>{published}</span></p>
              </div>
            </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} className="blog-post"/>
        </article>
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
        date(formatString: "MMM DD")
      }
      timeToRead
    }
    site {
      siteMetadata {
        author {
          name
        }
      }
    }
    bloggerPost {
      author {
        image {
          url
        }
      }
    }
  }
`;

