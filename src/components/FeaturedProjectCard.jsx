import React from 'react'

const FeaturedProjectCard = () => {
    const imgUrl = 'https://picsum.photos/200/300';
 
  return (
    <div className='relative h-42 rounded-lg bg-white bg-cover shadow-lg dark:bg-neutral-700'>
        <div className='absolute w-full h-full rounded-lg brightness-50' style={{backgroundImage: `url(${imgUrl})`}}></div>
        <div className='p-6 z-10 text-white' style={{backdropFilter: 'brightness(0.9)'}}>
            <p className='text-sm font-mono'>Featured Project</p>
            <h3 className='mb-7 text-lg font-bold'>Project Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente pariatur officia ad repellat possimus aspernatur id ducimus voluptatem esse.</p>
            <div className='text-xs py-5 font-semibold'>label1 label2 label3</div>
            <div className='flex gap-5'>
                <a href='www.google.com'>Github</a>
                <a href="www.google.com">Visit</a>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProjectCard