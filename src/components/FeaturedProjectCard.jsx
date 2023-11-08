import { Link } from 'gatsby'
import React from 'react'

const FeaturedProjectCard = ( { title, excerpt, imageUrl, label, slug, github, siteUrl }) => {
 
  return (
    <div className='relative h-full rounded-lg bg-white bg-cover shadow-lg dark:bg-neutral-700'>
        <div className='absolute w-full h-full rounded-lg brightness-50' style={{backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className='min-h-42 p-6 z-10 text-white' style={{backdropFilter: 'brightness(1)'}}>
            <p className='text-sm font-mono'>Featured Project</p>
            <Link to={slug} state={{ fromPortfolioPage: true}}>
              <h3 className='mb-7 text-lg font-bold hover:text-sky-600 transition-all'>{title}</h3>
            </Link>
            <p>{excerpt}</p>
            <div className='text-xs py-5 font-semibold'>{label}</div>
            <div className='flex gap-5'>
                <a href='www.google.com'>{github}</a>
                <a href="www.google.com">{siteUrl}</a>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProjectCard