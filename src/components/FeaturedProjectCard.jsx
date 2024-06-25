import { Link } from 'gatsby';
import React from 'react';

const bgColors = [
  'bg-accentred',
  'bg-blue-400',
  'bg-green-400',
  'bg-yellow-400',
  'bg-purple-400',
];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * bgColors.length);
  return bgColors[randomIndex];
}

function FeaturedProjectCard({
  title, excerpt, imageUrl, label, slug, index,
}) {
  return (
    <Link to={slug} state={{ fromPortfolioPage: true }}>
      <div className={`w-full gap-5 md:h-[60vh] flex flex-col md:flex-row flex-1 bg-secondary ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
        <img className="object-cover h-full md:w-1/2 hover:brightness-50 duration-150" src={imageUrl} alt={title} />
        <div className="h-full p-14 flex flex-col">
          <div className="flex gap-2 font-semibold ">
            {label.map((item) => (
              <div key={item} className={`w-fit p-2 border border-black shadow-solid-rb ${getRandomColor()} rounded-lg`}>
                {item}
              </div>
            ))}
          </div>

          <h3 className="my-7 text-3xl font-bold font-bricolage">{title}</h3>
          <p className="text-lg">{excerpt}</p>

          <p className="mt-auto text-lg font-semibold">See More</p>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedProjectCard;
