/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import ProjectCard from '../components/ProjectCard';

function removeVisitWebsite(text) {
  return text.replace('VISIT WEBSITE', '').trim();
}

function Project({ data }) {
  const posts = data.allBloggerPost.nodes;

  return (
    <PageLayout>
      <div className="w-full px-5 pt-10 pb-32 sm:px-11 md:px-20 lg:px-32 xl:px-52">
        <h2 className="text-4xl mb-10 md:text-5xl font-works font-semibold text-center">Projects</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const image = getImage(post.featuredImage);
            const { title, slug, published } = post;
            const { excerpt } = post.childMarkdownRemark;
            const author = data.site.siteMetadata.author.name;
            // const label = post.labels;
            return (
              <li key={slug}>
                <Link to={`/${slug}`} state={{ fromPortfolioPage: true }}>
                  <ProjectCard
                    image={image}
                    title={title}
                    excerpt={removeVisitWebsite(excerpt)}
                    author={author}
                    published={published}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
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
