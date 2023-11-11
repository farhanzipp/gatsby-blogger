/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { graphql, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import PageLayout from '../components/PageLayout';
import CardItem from '../components/CardItem';
import Seo from '../components/Seo';
import CardItemSmall from '../components/CardItemSmall';

function Blog({ data }) {
  const posts = data.allBloggerPost.nodes;
  const firstThreeBlogs = posts.slice(0, 3);
  const anotherBlogs = posts.slice(3);

  return (
    <PageLayout>
      <h1 className="text-3xl font-bold mb-3 dark:text-gray-200">Blogs</h1>
      <div className="flex flex-wrap gap-8 mb-7 w-full h-60 rounded-xl bg-gradient-to-b from-red-500 via-white to-green-500">
        <img className="w-full object-cover rounded-xl sm:h-56" src="https://images.pexels.com/photos/3429784/pexels-photo-3429784.jpeg?auto=compress&cs=tinysrgb&w=400" alt="love palestine" />
        <div className="p-5 w-full relative -top-48  z-10">
          <h1 className="text-3xl font-bold text-center">Never Give Up!</h1>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-4 mt-3 sm:grid-cols-2 lg:grid-cols-3">
        {firstThreeBlogs.map((post) => {
          const image = getImage(post.featuredImage);
          const { title, slug, published } = post;
          const { excerpt } = post.childMarkdownRemark;
          const author = data.site.siteMetadata.author.name;
          const label = post.labels;

          return (
            <li key={slug}>
              <Link to={`/${slug}`}>
                <CardItem
                  image={image}
                  title={title}
                  label={label ? label.labels : []}
                  excerpt={excerpt}
                  author={author}
                  published={published}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="pt-5">
        {anotherBlogs.map((post) => {
          const image = getImage(post.featuredImage);
          const { title, slug } = post;
          const { excerpt } = post.childMarkdownRemark;
          return (
            <li key={slug} className="py-2">
              <Link to={`/${slug}`}>
                <CardItemSmall
                  title={title}
                  image={image}
                  excerpt={excerpt}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </PageLayout>
  );
}

export default Blog;

export function Head() {
  return <Seo title="All Blogs" />;
}

export const blogsQuery = graphql`
  query {
    allBloggerPost(filter: {labels: {nin:  ["project", "page"]}}, sort: {published: DESC}) {
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
