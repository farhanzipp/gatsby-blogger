import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

function BlogCard({ title, image, excerpt }) {
  return (
    <div className="h-full w-fit bg-black rounded-2xl">
      <div className="h-full rounded-2xl -translate-x-1 -translate-y-1 border-2 border-black bg-secondary hover:-translate-x-2 hover:-translate-y-2 duration-150">
        <div className=" w-full h-48 flex-shrink-0">
          <GatsbyImage image={image} alt={title} className="w-full h-full object-cover object-center rounded-t-2xl duration-50" />
        </div>
        <div className="p-4 flex flex-col gap-5">
          <p className="h-20 text-xl font-bricolage font-bold">{title}</p>
          <p className="text-lg">{excerpt}</p>
        </div>

        <p className="px-4 pb-4 font-bold">Read More</p>
      </div>
    </div>
  );
}

export default BlogCard;
