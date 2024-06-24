import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function InfinityMarquee() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const text = containerRef.current.querySelector('.text');
    const textWidth = text.scrollWidth; // Measure the width of the text content

    const animation = gsap.to(text, {
      x: -textWidth, // Move the text by its own width to create scrolling effect
      duration: 10, // Adjust duration for desired speed
      ease: 'linear', // Use a linear ease for consistent scrolling
      repeat: -1, // Repeat indefinitely
    });

    // Optionally pause/resume animation on hover (uncomment to enable)
    // containerRef.current.addEventListener("mouseenter", () => animation.pause());
    // containerRef.current.addEventListener("mouseleave", () => animation.play());

    return () => animation.kill(); // Cleanup function to stop animation on unmount
  }, []);

  return (
    <div ref={containerRef} className="marquee-container">
      <span className="text">Your React Logo Text Here</span>
    </div>
  );
}

export default InfinityMarquee;
