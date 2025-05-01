'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const timelineItems = [
  {
    id: 0,
    title: 'Data Analyst Intern',
    company: 'Promist Solutions',
    date: '01 May 2024 - 31 July 2024',
    description: 'Worked as a Data Analyst intern, performing data cleaning, visualization, and generating actionable business insights for clients.',
    icon: BriefcaseIcon,
    isEducation: false,
  },
  {
    id: 1,
    title: 'B.Tech Computer Science Engineering',
    company: 'Lovely Professional University',
    date: '2022 - 2026',
    description: 'Specialized in Data Science and Machine Learning, maintaining excellent academic performance throughout the program.',
    icon: AcademicCapIcon,
    isEducation: true,
  },
];

export const Timeline: React.FC = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Simple Black Background */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Experience & <span className="text-blue-500">Education</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional journey and academic background.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700" />
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <item.icon className="w-6 h-6 text-blue-500 mr-2" />
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-sm text-gray-400 mb-4">
                      {item.date}
                    </p>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 