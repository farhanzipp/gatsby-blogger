import React from 'react'

const Footer = ( {title} ) => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className='bg-neutral-200 text-center font-bold dark:bg-gray-900 lg:text-left'>
        <p className='p-4 text-center text-neutral-700 dark:text-neutral-200'> ©{thisYear} {title}</p>
    </footer>
  )
}

export default Footer