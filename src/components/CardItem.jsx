import React from 'react'

const CardItem = ({ imageUrl, title, label, excerpt,  author, published }) => {
  
  return (
    <div className='h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden hover:shadow-sky-200 hover:shadow-md'>
        <img src={imageUrl} alt={title} className='h-40 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100' />
        <div className='p-4'>
          <span className='p-1 text-xs text-white bg-sky-600'>{label[0]}</span>
          <h1 className='h-20 pt-1 pb-2 title-font text-xl font-bold text-gray-800 mb-2'>{title}</h1>
          <p>{excerpt}</p>
          <div className='flex justify-between pt-2'>
            <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>By {author}</h2>
            <p className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>{published}</p>
          </div>
        </div>
    </div>
  )
}

export default CardItem