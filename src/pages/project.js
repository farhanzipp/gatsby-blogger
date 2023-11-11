/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import PageLayout from '../components/PageLayout';
import CardItem from '../components/CardItem';
import Seo from '../components/Seo';

function Project({ data }) {
  const posts = data.allBloggerPost.nodes;

  return (
    <PageLayout>
      <h1 className="text-3xl font-bold mb-3 dark:text-gray-200">Projects</h1>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const image = getImage(post.featuredImage);
          const { title, slug, published } = post;
          const { excerpt } = post.childMarkdownRemark;
          const author = data.site.siteMetadata.author.name;
          const label = post.labels;
          return (
            <li key={slug}>
              <Link to={`/${slug}`} state={{ fromPortfolioPage: true }}>
                <CardItem
                  image={image}
                  title={title}
                  label={label}
                  excerpt={excerpt}
                  author={author}
                  published={published}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </PageLayout>
  );
}

export default Project;

export function Head() {
  return <Seo title="My Projects" />;
}

export const blogsQuery = graphql`
  query {
    allBloggerPost(filter: {labels: {eq: "project"}}) {
      nodes {
        title
        labels
        slug
        published(fromNow: true)
        childMarkdownRemark {
          excerpt(pruneLength: 70)
        }
        featuredImage {
          childImageSharp {
            gatsbyImageData(height: 200)
          }
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
