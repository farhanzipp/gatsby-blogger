import React from "react";
import PageLayout from "../components/PageLayout";
import { graphql, Link } from "gatsby";
import CardItem from "../components/CardItem";
import Seo from "../components/Seo";
import CardItemSmall from "../components/CardItemSmall";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  const labels = data.allBloggerPost.nodes;

  const blogPosts = posts.filter(post => {
    return labels.some(label => label.slug === post.frontmatter.slug);
  });

  const firstThreeBlogs = blogPosts.slice(0, 3);
  const anotherBlogs = blogPosts.slice(3);

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
        {firstThreeBlogs.map((post)=> {
          const imageUrl = post.frontmatter.featuredImageUrl;
          const title = post.frontmatter.title;
          const slug = post.frontmatter.slug;
          const label = labels.find((label) => label.slug === slug);
          const excerpt = post.excerpt;
          const author = data.site.siteMetadata.author.name;
          const published = post.frontmatter.date;
          
          return (
            <li key={slug}>
              <Link to={`/${slug}`}>
                <CardItem
                  imageUrl={imageUrl}
                  title={title}
                  label={label ? label.labels : []}
                  excerpt={excerpt}
                  author={author}
                  published={published}
                >
                </CardItem>
              </Link>
            </li>
          )
        })}
      </ul>
      <ul className="pt-5">
        {anotherBlogs.map((post) => {
          const imageUrl = post.frontmatter.featuredImageUrl;
          const excerpt = post.excerpt;
          const title = post.frontmatter.title;
          const slug = post.frontmatter.slug;
          return (
            <li key={slug} className="py-2">
              <Link to={`/${slug}`}>
                <CardItemSmall
                  title={title}
                  imageUrl={imageUrl}
                  excerpt={excerpt}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </PageLayout>
  )
}

export default Blog;

export const Head = () => <Seo title="All Blogs" />


export const blogsQuery = graphql`
  query {
    allBloggerPost(filter: {labels: {nin:  ["project", "page"]}}, sort: {published: DESC}) {
      nodes {
        labels
        slug
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt(pruneLength: 70)
        frontmatter {
          slug
          title
          date(fromNow: true)
          featuredImageUrl
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
