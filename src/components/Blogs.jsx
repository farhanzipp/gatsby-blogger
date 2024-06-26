import { Link } from 'gatsby';
import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import BlogCard from './BlogCard';

function Blogs({ blogProjects }) {
  return (
    <div className="w-full px-5 pt-10 pb-32 sm:px-11 md:px-20 lg:px-28 xl:px-32 bg-white">
      <h2 className="text-4xl mb-14 md:text-5xl font-works font-semibold text-center">Blogs</h2>
      <ul className="flex gap-4 mx-auto">
        {blogProjects.slice(0, 3).map((post) => {
          const image = getImage(post.featuredImage);
          const { title, slug } = post;
          const { excerpt } = post.childMarkdownRemark;
          return (
            <li key={slug}>
              <Link to={slug}>
                <BlogCard
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
      <div className="w-fit bg-black rounded-full mt-8 mx-auto">
        <Link to="/blog">
          <button type="button" className="py-3 px-5 rounded-full -translate-x-1 -translate-y-1 border-2 border-black bg-primary font-works font-semibold hover:-translate-x-2 hover:-translate-y-2 duration-150">See More Articles</button>
        </Link>
      </div>
    </div>
  );
}

export default Blogs;
