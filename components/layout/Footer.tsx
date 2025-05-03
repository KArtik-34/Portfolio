'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 w-full overflow-hidden">
      {/* Grid Background - Same as Hero */}
      <div className="absolute inset-0 bg-black">
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
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/30 to-black" />
        
        {/* Strong Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.9)_100%)] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Kartikay Patni</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Business analyst, developer, and ML enthusiast dedicated to transforming data into strategic insights.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/KArtik-34" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/kartikaypatni" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:kartikpatni729@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#resume" className="text-gray-400 hover:text-white transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Kartikay Patni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
