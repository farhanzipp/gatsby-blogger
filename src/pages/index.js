/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../components/PageLayout';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';

function Home({ data }) {
  const posts = data.allBloggerPost.nodes;

  const featProjects = posts.filter((post) => (
    post.labels.includes('featured')
  ));

  const blogProjects = posts.filter((post) => (
    !post.labels.includes('page')
    && !post.labels.includes('project')
  ));

  return (
    <PageLayout>
      <div className="mt-24">
        <Hero />
        <Technologies />
        <Projects featProjects={featProjects} />
        <Blogs blogProjects={blogProjects} />
      </div>
    </PageLayout>
  );
}

export default Home;

export function Head() {
  return <Seo title="Home" />;
}

export const blogsQuery = graphql`
query {
  allBloggerPost {
    nodes {
      title
      labels
      slug
      published(fromNow: true)
      childMarkdownRemark {
        excerpt(pruneLength: 180)
        frontmatter {
          featuredImageUrl
        }
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
