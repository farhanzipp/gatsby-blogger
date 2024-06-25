import React from 'react';
import WEBSITE from '../images/website.svg';
import Marquee from './Marquee';

function Technologies() {
  return (
    <div className="w-full px-5 pt-10 pb-32 sm:px-11 md:px-20 lg:px-32 xl:px-52 bg-white">
      <h2 className="text-4xl md:text-5xl font-works font-semibold text-center">What I Can Do?</h2>
      <p className="text-lg text-center">I build clean and responsive website and adapt with various technologies</p>
      <img src={WEBSITE} alt="website" className="mx-auto my-9 md:right-0 w-3/4 md:w-2/4 lg:h-1/4 xl:w-1/4 bg-secondary rounded-lg" />

      <Marquee />
    </div>
  );
}

export default Technologies;
