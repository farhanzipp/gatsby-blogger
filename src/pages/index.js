/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import PageLayout from '../components/PageLayout';
import CardItemSmall from '../components/CardItemSmall';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';

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

        <section className=" mb-16">
          <h2 className="font-mono text-2xl font-bold mb-7 dark:text-white">Blogs</h2>
          <ul className="flex flex-col gap-4 md:w-3/4 mx-auto">
            {blogProjects.slice(0, 3).map((post) => {
              const image = getImage(post.featuredImage);
              const { title, slug } = post;
              const { excerpt } = post.childMarkdownRemark;
              return (
                <li key={slug}>
                  <Link to={slug}>
                    <CardItemSmall
                      image={image}
                      title={title}
                      excerpt={excerpt}
                      slug={slug}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center mt-6 w-full">
            <Link to="/blog">
              <button type="button" className="p-2 border-sky-700 dark:text-white border-4 rounded-md hover:bg-sky-700 hover:text-white font-semibold transition">See More Articles</button>
            </Link>
          </div>
        </section>
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
