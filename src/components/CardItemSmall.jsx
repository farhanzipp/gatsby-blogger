import React from 'react'

const CardItemSmall = ({ title, imageUrl, excerpt }) => {
  return (
    <div className='flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start'>
        <div className='relative w-32 h-32 flex-shrink-0'>
            <img className='absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50' loading='lazy' src={imageUrl} />
        </div>
        <div className='flex flex-col gap-2 py-2 px-1'>
            <p className='text-sm font-bold'>{title}</p>
            <p className='text-xs text-gray-500'>{excerpt}</p>
        </div>
    </div>
  )
}

export default CardItemSmall