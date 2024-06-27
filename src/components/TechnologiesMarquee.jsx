import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import {
  FaReact, FaCss3Alt, FaHtml5, FaNode, FaBootstrap,
} from 'react-icons/fa';
import {
  RiTailwindCssFill, RiJavascriptFill, RiGatsbyFill,
} from 'react-icons/ri';
import {
  TbBrandVite,
} from 'react-icons/tb';
import gsap from 'gsap';

function TechnologiesMarquee() {
  const marqueeRef = useRef();
  const itemsRef = useRef([]);

  useGSAP(() => {
    const items = itemsRef.current;
    const marqueeWidth = marqueeRef.current.offsetWidth;
    const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);

    // Create a GSAP timeline
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'none', duration: 10 },
    });

    // Animate each item across the screen
    items.forEach((item, index) => {
      const prevWidth = items.slice(0, index).reduce((acc, item) => acc + item.offsetWidth, 0);
      tl.fromTo(
        item,
        { x: prevWidth },
        { x: `+=${marqueeWidth}`, modifiers: { x: gsap.utils.unitize((x) => parseFloat(x) % (marqueeWidth + totalWidth) - totalWidth) } },
        0,
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="wrapper my-7 overflow-hidden whitespace-nowrap" ref={marqueeRef}>
      {[RiTailwindCssFill, FaBootstrap, FaCss3Alt, FaReact, FaHtml5,
        RiJavascriptFill, TbBrandVite, RiGatsbyFill, FaNode,
        RiTailwindCssFill, FaBootstrap, FaCss3Alt, FaReact, FaHtml5,
        RiJavascriptFill, TbBrandVite, RiGatsbyFill, FaNode,
        RiTailwindCssFill, FaCss3Alt, FaReact, FaHtml5].map((Icon, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="mr-6 inline-block"
          >
            <Icon size={42} />
          </div>
      ))}
    </div>
  );
}

export default TechnologiesMarquee;
