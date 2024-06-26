import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

function BlogCard({ title, image, excerpt }) {
  return (
    <div className="h-full w-fit bg-black rounded-2xl">
      <div className="h-full p-4 rounded-2xl -translate-x-1 -translate-y-1 border-2 border-black bg-secondary hover:-translate-x-2 hover:-translate-y-2 duration-150">
        <div className=" w-full h-32 flex-shrink-0">
          <GatsbyImage image={image} alt={title} className="w-full h-full object-cover object-center rounded-md duration-50 border border-black" />
        </div>
        <div className="mt-4 flex flex-col gap-5">
          <p className="h-24 text-xl font-bricolage font-bold">{title}</p>
          <p className="text-lg">{excerpt}</p>
        </div>

        <p className="mt-7 font-bold">Read More</p>
      </div>
    </div>
  );
}

export default BlogCard;
