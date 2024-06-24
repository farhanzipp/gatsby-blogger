import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { RiTailwindCssFill } from 'react-icons/ri';

function TechnologiesMarquee() {
  const marqueeRef = useRef(null);

  useLayoutEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 }).to('#text', { duration: 60, xPercent: -50, ease: 'none' }).set('#text', { xPercent: 0 });
  }, []);

  return (
    <div id="marquee_container" className="relative overflow-hidden w-full h-14 -rotate-6 bg-slate-500">
      <div className="absolute flex gap-3 items-center top-1/2 -translate-y-1/2 whitespace-nowrap" ref={marqueeRef}>
        <RiTailwindCssFill />
      </div>
    </div>
  );
}

export default TechnologiesMarquee;
