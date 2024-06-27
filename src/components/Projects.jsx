import React from 'react';
import FeaturedProjectCard from './FeaturedProjectCard';

function removeVisitWebsite(text) {
  return text.replace('VISIT WEBSITE', '').trim();
}

function Projects({ featProjects }) {
  return (
    <div className="w-full py-14 bg-white">
      <h2 className="mb-10 text:4xl md:text-5xl font-works font-semibold text-center">Featured Projects</h2>
      <ul>
        {featProjects.map((post, index) => {
          const imageUrl = post.childMarkdownRemark.frontmatter.featuredImageUrl;
          const { title, slug } = post;
          const { excerpt } = post.childMarkdownRemark;

          const label = post.labels;
          return (
            <li key={slug}>
              <FeaturedProjectCard
                imageUrl={imageUrl}
                title={title}
                label={label}
                excerpt={removeVisitWebsite(excerpt)}
                slug={slug}
                index={index}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
