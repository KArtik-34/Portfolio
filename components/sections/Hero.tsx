'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [points, setPoints] = useState("M0 150");
  
  useEffect(() => {
    let x = 0;
    const width = 800;
    const startY = 150;
    const endY = 50; // End point for straight line
    
    const interval = setInterval(() => {
      x += 20;
      // Create a straight line going up
      const newY = startY - ((x / width) * (startY - endY));
      
      setPoints(prev => {
        if (x > width) {
          x = 0;
          return "M0 150";
        }
        return `${prev} L${x} ${newY}`;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Grid Background */}
      <div className="absolute top-0 left-0 w-full h-[150vh] bg-black">
        {/* Grid Pattern with Blur */}
        <div 
          className="absolute inset-0 backdrop-blur-[1px]" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff20 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff20 1px, transparent 1px)
            `,
            backgroundSize: '96px 96px',
            filter: 'blur(0.5px)'
          }}
        />
        
        {/* Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
        
        {/* Strong Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
      </div>

      <section className="min-h-[85vh] flex flex-col items-start justify-center relative pt-12">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Centered Animated Line Chart */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px]">
            <motion.svg
              className="w-full h-[400px] opacity-30"
              viewBox="0 0 800 200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1 }}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              <motion.path
                d={points}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="square"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: "linear" }}
              />
            </motion.svg>
          </div>
          
          {/* Radial gradients for the glow effect */}
          <div className="absolute top-[-20%] -left-[20%] w-[140%] h-[140%] bg-[radial-gradient(circle_800px_at_20%_0%,#1a115530,transparent)]" />
          <div className="absolute top-[-20%] -right-[20%] w-[140%] h-[140%] bg-[radial-gradient(circle_800px_at_80%_0%,#1a115530,transparent)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full mt-[-10vh]">
          <div className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            GET YOUR BUSINESS ONLINE WITH US
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text">
              Transforming{' '}
              <span className="text-blue-500 dark:text-blue-500">data</span> into{' '}
              <span className="text-blue-500 dark:text-blue-500">strategic decisions</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mt-2">
              Hi! I&apos;m Kartikay — a Business Analyst & ML Developer building AI-powered insights and tools.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mt-5"
          >
            <Link 
              href="#projects" 
              className="group inline-flex items-center text-lg font-medium text-blue-500 hover:text-blue-600 transition-colors"
            >
              <span>Show My Work</span>
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDownIcon className="h-6 w-6 text-muted-foreground animate-bounce" />
        </motion.div>
      </section>
    </div>
  );
}