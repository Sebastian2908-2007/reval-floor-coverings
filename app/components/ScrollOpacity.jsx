'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollOpacity = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef();
  const { scrollY } = useScroll();
  const { ref: inViewRef, inView } = useInView({
    threshold: 0, // Start changing opacity as soon as the component comes into view
  });

  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setElementHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const opacity = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + elementHeight],
    [0, 1]
  );

  return (
    <motion.div
      ref={node => {
        ref.current = node;
        inViewRef(node);
      }}
      style={{ opacity }}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollOpacity;


