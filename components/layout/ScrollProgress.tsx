import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-50"
        style={{ scaleX }}
      />
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        {['hero', 'about', 'statistics', 'timeline', 'projects', 'contact'].map((section) => (
          <motion.a
            key={section}
            href={`#${section}`}
            className="block w-3 h-3 my-4 rounded-full bg-gray-400 hover:bg-primary-500 transition-colors duration-200"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 1 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(section)?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          />
        ))}
      </nav>
    </>
  );
}; 