'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GradientAnimation } from '../ui/gradient-animation';
import { CopyIcon } from 'lucide-react';
import GlobeDemo from '@/components/ui/globe-demo';

const TechStack = () => {
  const techStackCol1 = ['Python', 'SQL', 'PySpark'];
  const techStackCol2 = ['Kotlin', 'NextJS', 'Scikit-Learn'];

  return (
    <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
      <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
        {techStackCol1.map((tech) => (
          <span key={tech} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[000000]">
            {tech}
          </span>
        ))}
        <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[000000]"></span>
      </div>
      <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
        <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[000000]"></span>
        {techStackCol2.map((tech) => (
          <span key={tech} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[000000]">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const BentoCard = ({ children, className = '', ...props }: BentoCardProps) => (
  <div 
    className={`row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none ${className}`}
    style={{
      background: 'rgb(0,0,0)',
      backgroundColor: '#000'
    }}
    {...props}
  >
    <div className="relative h-full w-full flex flex-col">
      {children}
    </div>
  </div>
);

const About = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('kartikpatni729@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="min-h-screen w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/grid.svg"
          alt="Background grid"
          fill
          className="opacity-5"
          priority
        />
      </div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-7 w-full py-20">
          {/* Main Laptop Card */}
          <BentoCard className="lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]">
            <div className="w-full h-full absolute">
              <Image
                src="/b1.svg"
                alt="Laptop Display"
                fill
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
            <div className="justify-end group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white">
                I prioritize client collaboration, fostering open communication
              </div>
            </div>
          </BentoCard>

          {/* Globe Card */}
          <BentoCard className="lg:col-span-2 md:col-span-3 md:row-span-2 justify-between flex flex-col space-y-4">
            <div className="h-full">
              <div className="justify-start group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
                <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white">
                  I&apos;m very flexible with time zone communications
                </div>
                <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
                  <GlobeDemo />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Tech Stack Card */}
          <BentoCard className="lg:col-span-2 md:col-span-3 md:row-span-2">
            <div className="justify-center group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
              <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                I constantly try to improve
              </div>
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white">
                My tech stack
              </div>
              <TechStack />
            </div>
          </BentoCard>

          {/* Tech Enthusiast Card */}
          <BentoCard className="lg:col-span-2 md:col-span-3 md:row-span-1">
            <div className="w-full h-full absolute">
              <Image src="/grid.svg" alt="Grid pattern" fill className="object-cover object-center" />
            </div>
            <div className="absolute right-0 -bottom-5">
              <Image src="/b4.svg" alt="Decoration" width={200} height={200} className="object-cover object-center w-full h-full" />
            </div>
            <div className="justify-start group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white">
                Tech enthusiast with a passion for development.
              </div>
            </div>
          </BentoCard>

          {/* Movie Project Card */}
          <BentoCard className="md:col-span-3 md:row-span-2">
            <div className="w-full h-full absolute">
              <Image
                src="/b5.svg"
                alt="Decoration"
                width={400}
                height={400}
                className="absolute right-0 bottom-0 md:w-96 w-60 object-cover object-center"
              />
            </div>
            <div className="absolute right-0 -bottom-5 w-full opacity-80">
              <Image src="/grid.svg" alt="Grid pattern" fill className="object-cover object-center w-full h-full" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent" />
            <div className="justify-center md:justify-start lg:justify-center group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
              <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                The Inside Scoop
              </div>
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white">
                Currently building a Linux based AI Agent
              </div>
            </div>
          </BentoCard>

          {/* Contact Card */}
          <BentoCard className="lg:col-span-2 md:col-span-3 md:row-span-1">
            <GradientAnimation />
            <div className="justify-center md:max-w-full max-w-60 text-center group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10">
              <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 text-white">
                Do you want to start a project together?
              </div>
              <div className="mt-5 relative">
                <div className="absolute -bottom-5 right-0 block">
                  <Image src="/confetti.gif" alt="confetti" width={100} height={100} />
                </div>
                <button
                  onClick={copyEmail}
                  className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 !bg-[#161A31]">
                    <CopyIcon className="h-4 w-4" />
                    {copied ? 'Copied!' : 'Copy my email address'}
                  </span>
                </button>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default About; 