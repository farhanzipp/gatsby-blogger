import React from 'react';
import PROFILE from '../images/profile.svg';

function Hero() {
  return (
    <div className="w-full px-5 sm:px-11 md:px-20 lg:px-28 xl:px-32 flex flex-col gap-4 justify-center md:justify-between md:flex-row pb-20 bg-secondary">
      <div className="text-center md:text-left text-lg">
        <p>Hi, my name is</p>
        <h2 className="mt-3 mb-7 text-6xl xl:text-8xl font-bricolage font-black">
          FARHAN AJI PRATAMA
        </h2>
        <p>
          I build website as
          {' '}
          <b>frontend developer</b>
          ,
          <br />
          also passionate to create cool and useful things
          to make live easier.
        </p>
        <div className="w-fit bg-black rounded-full mt-8 mx-auto md:mx-0">
          <a href="/cv.pdf" download>
            <button type="button" className="py-3 px-5 rounded-full -translate-x-1 -translate-y-1 border-2 border-black bg-primary font-works font-semibold hover:-translate-x-2 hover:-translate-y-2 duration-150">Download CV</button>
          </a>
        </div>
      </div>
      <img src={PROFILE} alt="profile" className="mx-auto md:right-0 w-3/4 md:w-2/4 lg:h-1/4 xl:w-2/5 bg-white rounded-full" />
    </div>
  );
}

export default Hero;
