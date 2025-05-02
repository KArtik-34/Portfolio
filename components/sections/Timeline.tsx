'use client'
import { Timeline } from "@/components/ui/timeline";
import { BriefcaseIcon, AcademicCapIcon, TrophyIcon, DevicePhoneMobileIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Image from "next/image";

const data = [
  {
    title: "July 2024",
    content: (
      <div>
        <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
          <BriefcaseIcon className="inline w-5 h-5 text-blue-500" /> Data Analyst Intern at Promist Solutions
        </p>
        <ul className="list-disc ml-6 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
          <li>Analyzed 10,000+ sales & marketing records using Python & Excel, identifying key performance drivers.</li>
          <li>Streamlined data cleaning workflows, reducing data preparation time by 30%.</li>
          <li>Developed interactive dashboards & visual reports, accelerating strategic decision-making by 40%.</li>
          <li>Delivered data-driven marketing recommendations, improving campaign performance by 7%.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Feb 2025",
    content: (
      <div>
        <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
          <ChartBarIcon className="inline w-5 h-5 text-green-500" /> Beverage Data Analysis Project
          <a href="https://github.com/Beverage-Sales-Analysis" target="_blank" rel="noopener noreferrer" className="ml-2 underline text-blue-500">GitHub</a>
        </p>
        <ul className="list-disc ml-6 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
          <li>Analyzed 10,000+ sales & marketing records using Python & Excel.</li>
          <li>Streamlined data cleaning workflows, reducing data preparation time by 30%.</li>
          <li>Developed interactive dashboards & visual reports, accelerating strategic decision-making by 40%.</li>
          <li>Delivered data-driven marketing recommendations, improving campaign performance by 7%.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Jan 2025",
    content: (
      <div>
        <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
          <ChartBarIcon className="inline w-5 h-5 text-green-500" /> Industry Trends Analysis
        </p>
        <ul className="list-disc ml-6 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
          <li>Engineered a trend analysis solution across 5 departments, aligning product strategies with industry standards.</li>
          <li>Processed 25K+ records from multiple sources, tracking technology adoption & hiring trends.</li>
          <li>Built automated data visualization dashboards, reducing report generation time by 40%.</li>
          <li>Provided strategic insights, increasing decision-making efficiency by 20%.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "2023 - 2024",
    content: (
      <div className="min-h-[700px]">
        <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
          <Image src="/kubernetes.png" alt="GCP Kubernetes" width={48} height={48} className="inline w-6 h-6 rounded mr-2" /> Google Cloud Platform (GCP) Expertise
        </p>
        <ul className="list-disc ml-6 text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mb-4">
          <li>Completed 10+ labs on Cloud Computing, Big Data & ML with Google Cloud Skills Boost.</li>
          <li>Hands-on with core infrastructure, services, and Kubernetes on GCP.</li>
        </ul>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <Image src="/core%20infra.png" alt="Core Infra" width={400} height={300} className="rounded-lg shadow w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105" />
          <Image src="/core%20services.png" alt="Core Services" width={400} height={300} className="rounded-lg shadow w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105" />
          <Image src="/create%20and%20manage%20resource.png" alt="Create and Manage Resource" width={400} height={300} className="rounded-lg shadow w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105" />
          <Image src="/kubernetes.png" alt="Kubernetes" width={400} height={300} className="rounded-lg shadow w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105" />
          <Image src="/infra.png" alt="Infra" width={400} height={300} className="rounded-lg shadow w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    ),
  },
  {
    title: "Jan 2022",
    content: (
      <div>
        <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
          <ChartBarIcon className="inline w-5 h-5 text-green-500" /> Banking Management System
          <a href="https://github.com/Banking_Management_System" target="_blank" rel="noopener noreferrer" className="ml-2 underline text-blue-500">GitHub</a>
        </p>
        <ul className="list-disc ml-6 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
          <li>Developed a secure banking system using Python (backend) & SQL (database), processing 500+ transactions.</li>
          <li>Designed an optimized database handling 10,000+ customer records.</li>
          <li>Improved SQL query performance, cutting response times by 25% & retrieval times by 20%.</li>
          <li>Implemented core banking features (account creation, deposits, withdrawals, balance tracking).</li>
        </ul>
      </div>
    ),
  },
  {
    title: "March 2023",
    content: (
      <div>
        <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
          <TrophyIcon className="inline w-5 h-5 text-yellow-500" /> Event Operations Manager – One World College Event
        </p>
        <ul className="list-disc ml-6 text-xs md:text-sm text-neutral-700 dark:text-neutral-300">
          <li>Led planning & execution, managing 13 stalls & a team of 18, generating ₹3.5L+ in 3 days.</li>
          <li>Negotiated 10+ vendor partnerships, increasing revenue by 15% through hybrid revenue models.</li>
          <li>Managed personal sales stalls, sourcing wholesale products & achieving a 70%+ sales conversion rate.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "2022 - 2026",
    content: (
      <div>
        <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
          <AcademicCapIcon className="inline w-5 h-5 text-purple-500" /> B.Tech Computer Science Engineering, Data Science and ML
        </p>
        <span className="text-xs text-neutral-500">Lovely Professional University, Phagwara, Punjab</span>
      </div>
    ),
  },
  {
    title: "2020 - 2022",
    content: (
      <div>
        <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
          <AcademicCapIcon className="inline w-5 h-5 text-purple-500" /> Intermediate
        </p>
        <span className="text-xs text-neutral-500">Don Bosco Sr Sec. School, Pithoragarh, Uttarakhand</span>
      </div>
    ),
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="section-padding relative overflow-visible bg-white">
      {/* Removed grid background to optimize LCP */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="container relative z-10">
        <Timeline data={data} />
      </div>
    </section>
  );
} 