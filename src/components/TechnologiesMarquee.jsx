import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faNodeJs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';

const icons = [faReact, faJsSquare, faNodeJs, faHtml5, faCss3Alt];

function TechnologiesMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const totalWidth = marquee.scrollWidth;
    const duration = totalWidth / 50; // Adjust speed as needed

    gsap.fromTo(
      marquee,
      { x: 0 },
      {
        x: -totalWidth / 2,
        ease: 'none',
        duration: duration,
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className='relative overflow-hidden w-full h-14 -rotate-6 bg-slate-500'>
      <div className='absolute flex gap-3 items-center top-1/2 -translate-y-1/2 whitespace-nowrap' ref={marqueeRef}>
        {icons.concat(icons).map((icon, index) => (
          <FontAwesomeIcon
            key={index}
            icon={icon}
            className="text-white"
            size="3x"
          />
        ))}
      </div>
    </div>
  );
}

export default TechnologiesMarquee;
