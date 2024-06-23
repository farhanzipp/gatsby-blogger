import React from 'react'
import WEBSITE from '../images/website.svg'
import TechnologiesMarquee from './TechnologiesMarquee'

function Technologies() {
  return (
    <div className='w-full px-5 sm:px-11 md:px-20 lg:px-32 xl:px-52 py-10 bg-white'>
        <h2 className='text-5xl font-bricolage font-bold text-center'>What I Can Do?</h2>
        <p className='text-lg'>I can build clean and responsive website with various technologies</p>
        <img src={WEBSITE} alt="website image" className='mx-auto md:right-0 w-3/4 md:w-2/4 lg:h-1/4 xl:w-1/4 bg-white rounded-full' />
        <TechnologiesMarquee />
    </div>
  )
}

export default Technologies
