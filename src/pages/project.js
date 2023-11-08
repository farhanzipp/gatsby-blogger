import React from "react";
import PageLayout from "../components/PageLayout";
import { graphql, Link } from "gatsby";
import CardItem from "../components/CardItem";
import Seo from "../components/Seo";

const Project = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  const labels = data.allBloggerPost.nodes;

  const portfolioPosts = posts.filter(post => {
    return labels.some(label => label.slug === post.frontmatter.slug);
  });

  return (
    <PageLayout> 
      <h1 className="text-3xl font-bold mb-3 dark:text-gray-200">Portfolio</h1>
      
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioPosts.map((post)=> {
          const imageUrl = post.frontmatter.featuredImageUrl;
          const title = post.frontmatter.title;
          const slug = post.frontmatter.slug;
          const label = labels.find((label) => label.slug === slug);
          const excerpt = post.excerpt;
          const author = data.site.siteMetadata.author.name;
          const published = post.frontmatter.date;
          return (
            <li key={slug}>
              <Link to={`/${slug}`} state={{ fromPortfolioPage: true}}>
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
    </PageLayout>
  )
}

export default Project;

export const Head = () => <Seo title="My Portofolio" />


export const blogsQuery = graphql`
  query {
    allBloggerPost(filter: {labels: {eq: "portfolio"}}) {
      nodes {
        labels
        slug
      }
    }
    allMarkdownRemark {
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

