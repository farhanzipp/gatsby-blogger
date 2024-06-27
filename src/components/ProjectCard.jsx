import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

function ProjectCard({
  image, title, excerpt, author, published,
}) {
  return (
    <div className="h-full rounded-xl border border-black bg-white shadow-solid-rb">
      <GatsbyImage image={image} alt={title} className="h-1/2 w-full rounded-t-xl object-cover object-center" />
      <div className="px-4 pb-4 flex flex-col gap-2">
        <h1 className="h-16 title-font text-md md:pb-0 font-bold hover:underline">{title}</h1>
        <p className="text-sm">{excerpt}</p>
        <div className="h-full flex justify-self-end justify-between">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400">
            {author}
          </h2>
          <p className="tracking-widest text-xs title-font font-medium text-gray-400">{published}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
