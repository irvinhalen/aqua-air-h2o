import ScrollReveal from 'scrollreveal';
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealElementProps {
  children: ReactNode;
}

const ScrollRevealElement: React.FC<ScrollRevealElementProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      ScrollReveal().reveal(element, {
        // specify the scroll reveal options here
        origin: 'bottom',
        distance: '150px',
        opacity: 0,
        duration: 1000,
        // other options...
      });
    }
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export default ScrollRevealElement;
