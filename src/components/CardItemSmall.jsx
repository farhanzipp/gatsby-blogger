import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

function CardItemSmall({ title, image, excerpt }) {
  return (
    <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
      <div className="relative w-32 h-32 flex-shrink-0">
        <GatsbyImage image={image} alt={title} className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" />
      </div>
      <div className="flex flex-col gap-2 py-2 px-1">
        <p className="text-sm font-bold">{title}</p>
        <p className="text-xs text-gray-500">{excerpt}</p>
      </div>
    </div>
  );
}

export default CardItemSmall;
