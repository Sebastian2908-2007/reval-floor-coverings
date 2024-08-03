// components/ScrollFromRight.js
'use client'
// components/ScrollFromRight.js
// components/ScrollFromRight.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollFromRight = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger the animation when 10% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={controls}
      variants={{
        visible: { x: 0, opacity: 1, transition: { duration: 1 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFromRight;
