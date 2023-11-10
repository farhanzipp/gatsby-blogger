import * as React from "react"
import PageLayout from "../components/PageLayout"
import FeaturedProjectCard from "../components/FeaturedProjectCard"
import { Link, graphql } from "gatsby"
import CardItemSmall from "../components/CardItemSmall"
import Seo from "../components/Seo"

const Home = ({data}) => {
  const markdownPosts = data.allMarkdownRemark.nodes;
  const bloggerPosts = data.allBloggerPost.nodes;

  const featuredProjects= markdownPosts.filter(post => {
    return bloggerPosts.some(bloggerPosts => 
      bloggerPosts.slug === post.frontmatter.slug && 
      bloggerPosts.labels.includes("featured"));
  });

  const featuredBlogs= markdownPosts.filter(post => {
    return bloggerPosts.some(bloggerPosts => 
      bloggerPosts.slug === post.frontmatter.slug && 
      !bloggerPosts.labels.includes("page") &&
      !bloggerPosts.labels.includes("project") 
      );
  });

  const firstThreeBlogs = featuredBlogs.slice(0, 3);

  return (
    <PageLayout> 
      <section className=" mb-32 md:mb-40">
        <div className=" pt-32 pt dark:text-white ">
          <h2 className=" text-7xl font-mono">Farhan Aji<span className="text-sm  dark:text-gray-400">(he/him)</span></h2>
          <p className="pt-11 text-2xl dark:text-gray-400"> I am regular human being focusing on frontend web development and love build cool things for better life <span className="italic">(or whatever)</span></p>
        </div>
      </section>
      <section className=" mb-16">
        <h2 className="font-mono text-2xl font-bold dark:text-white mb-7">About</h2>
        <div className="text-xl dark:text-gray-400">
          <p className="py-2">My first journey as frontend developer started when <span className="font-semibold dark:text-white">"having my own blogger theme style"</span> idea appear on my head 2019 ago. </p>
          <p className="py-2">And now I am confident to help people bring their ideas into life with my knowledges and experiences. </p>
          <p className="py-2">Here some technologies lately i have been work with:</p>
          <ul className="py-2 px-4 w-full grid grid-cols-2 font-mono text-sm dark:text-white list-disc">
            <li>JavaScript (ES6)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Wordpress</li>
            <li>Gatsby.js</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </section>
      <section className=" mb-16">
        <h2 className="font-mono text-2xl font-bold mb-7 dark:text-white">Projects</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((post)=> {
              const imageUrl = post.frontmatter.featuredImageUrl;
              const title = post.frontmatter.title;
              const slug = post.frontmatter.slug;
              const label = bloggerPosts.find((label) => label.slug === slug);
              const excerpt = post.excerpt;
              return (
                <li key={slug}>
                    <FeaturedProjectCard
                      imageUrl={imageUrl}
                      title={title}
                      label={label ? label.labels : []}
                      excerpt={excerpt}
                      slug={slug}
                    />
                </li>
              )
            })}
        </ul>
        <div className="flex justify-center mt-6 w-full">
          <Link to="/project">
            <button className="p-2 border-sky-700 dark:text-white border-4 rounded-md hover:bg-sky-700 hover:text-white font-semibold transition">See More Projects</button>
          </Link>
        </div>
      </section>
      <section className=" mb-16">
        <h2 className="font-mono text-2xl font-bold mb-7 dark:text-white">Blogs</h2>
        <ul className="flex flex-col gap-4 md:w-3/4 mx-auto">
            {firstThreeBlogs.map((post)=> {
              const imageUrl = post.frontmatter.featuredImageUrl;
              const title = post.frontmatter.title;
              const slug = post.frontmatter.slug;
              const excerpt = post.excerpt;
              return (
                <li key={slug}>
                  <Link to={slug}>
                    <CardItemSmall
                      imageUrl={imageUrl}
                      title={title}
                      excerpt={excerpt}
                      slug={slug}
                    />
                  </Link>
                </li>
              )
            })}
        </ul>
        <div className="flex justify-center mt-6 w-full">
          <Link to="/blog">
            <button className="p-2 border-sky-700 dark:text-white border-4 rounded-md hover:bg-sky-700 hover:text-white font-semibold transition">See More Articles</button>
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}

export default Home

export const Head = () => <Seo title="Home" />

export const blogsQuery = graphql`
  query {
    allBloggerPost {
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
