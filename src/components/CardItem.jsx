import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

function CardItem({
  image, title, label, excerpt, author, published,
}) {
  return (
    <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden hover:shadow-sky-200 hover:shadow-md">
      <GatsbyImage image={image} alt={title} className="h-44 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" />
      <div className="p-4">
        <span className="text-xs font-bold font-mono text-red-500">{label.join(' ')}</span>
        <h1 className="h-16 pt-1 title-font text-lg md:pb-0 md:text-sm font-bold text-gray-800">{title}</h1>
        <p className="text-sm">{excerpt}</p>
        <div className="flex justify-between pt-2">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            By
            {author}
          </h2>
          <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{published}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
