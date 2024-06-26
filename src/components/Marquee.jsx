import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
  FaReact, FaCss3Alt, FaHtml5, FaNode, FaBootstrap, FaGithub,
} from 'react-icons/fa';
import { RiTailwindCssFill, RiJavascriptFill, RiGatsbyFill } from 'react-icons/ri';
import { TbBrandVite } from 'react-icons/tb';
import { SiMui, SiExpress, SiNetlify } from 'react-icons/si';

const marqueeIcons = [
  RiTailwindCssFill, RiJavascriptFill, RiGatsbyFill, TbBrandVite,
  FaReact, FaCss3Alt, FaHtml5,
];

const marqueeIconsMobile = [
  FaReact, FaCss3Alt, FaHtml5, FaNode, FaBootstrap,
  RiTailwindCssFill, RiJavascriptFill, RiGatsbyFill, TbBrandVite,
  SiMui, SiExpress, SiNetlify, FaGithub,
];

function Marquee() {
  const marqueeElements = useRef([]);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );
  const marqueeTween = useRef();

  const resizeHandler = () => {
    gsap.set(marqueeElements.current, { clearProps: 'all' });
    setScreenWidth(window.innerWidth);
  };

  const marqueeElementsRefHandler = (e, i) => {
    marqueeElements.current[i] = e;
  };

  const renderMarqueeElements = () => {
    const iconsToRender = [...marqueeIcons];
    return iconsToRender.map((Icon, i) => (
      <div
        className="absolute"
        key={`marquee-${i}`}
        ref={(el) => marqueeElementsRefHandler(el, i)}
      >
        <Icon size={48} key={i} />
      </div>
    ));
  };

  const marqueeInitialSet = () => {
    gsap.set(marqueeElements.current, {
      xPercent: -100,
      x(index) {
        return (screenWidth / marqueeIcons.length) * index;
      },
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      resizeHandler();
      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('resize', resizeHandler);
        marqueeTween.current && marqueeTween.current.pause().kill();
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      marqueeInitialSet();
      marqueeTween.current && marqueeTween.current.pause().kill();
      marqueeTween.current = gsap.to(marqueeElements.current, {
        x: `+=${screenWidth * 1.5}`,
        ease: 'none',
        repeat: -1,
        duration: 20,
        rotation: 0.1,
        modifiers: {
          x: (x) => `${parseFloat(x) % (screenWidth * 1.1)}px`,
        },
      });
    }
  }, [screenWidth]);

  return (
    <div className="absolute w-full left-0">
      <div
        className="relative w-full mt-8 py-4 bg-black text-gray-200 flex overflow-hidden items-center"
        style={{ minHeight: '110px' }}
      >
        {renderMarqueeElements()}
      </div>
    </div>
  );
}

export default Marquee;
