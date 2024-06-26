import React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import Breadcrumb from '../components/Breadcrumb';

function BlogPost({ data, location }) {
  const post = data.bloggerPost;
  const author = data.site.siteMetadata.author.name;
  const authorImg = post.author.image.url;
  const { published } = post;
  const readTime = post.childMarkdownRemark.timeToRead;
  const { slug } = post;

  const { fromPortfolioPage } = location.state || {};
  let crumbs;

  if (fromPortfolioPage) {
    crumbs = [
      { path: '/', label: 'Home' },
      { path: '/project', label: 'Projects' },
      { path: `/project/${slug}`, label: `${slug}` },
    ];
  } else {
    crumbs = [
      { path: '/', label: 'Home' },
      { path: '/blog', label: 'Blog' },
      { path: `/blog/${slug}`, label: `${slug}` },
    ];
  }

  return (
    <PageLayout>
      <div className="w-full bg-white">
        <div className="w-1/2 mx-auto">
          <Breadcrumb crumbs={crumbs} />
          <article>
            <h1 className="text-3xl font-bold blog-title">{post.title}</h1>
            <div className="flex py-2">
              <img src={authorImg} alt={author} className="w-10 h-10 rounded-full" />
              <div className="px-4">
                <p className="">{author}</p>
                <p className="mb-2 text-xs">
                  {readTime}
                  {' '}
                  min read •
                  <span>{published}</span>
                </p>
              </div>
            </div>
            <div className="w-2/3">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="blog-post"
              />
            </div>
          </article>
        </div>
      </div>
    </PageLayout>
  );
}

export default BlogPost;

export function Head({ data: { bloggerPost: post } }) {
  return (
    <Seo
      title={post.title}
      description={post.childMarkdownRemark.excerpt}
    />
  );
}

export const query = graphql`
  query blogPostTemplate($slug: String!) {
    bloggerPost(slug: {eq: $slug}) {
      id
      slug
      content
      title
      published(formatString: "MMM DD")
      childMarkdownRemark {
        excerpt
        timeToRead
      }
      featuredImage {
        childrenImageSharp {
          gatsbyImageData
        }
      }
      author {
        image {
          url
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
