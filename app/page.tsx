import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import { Timeline } from '@/components/sections/Timeline';
import Resume, { ContactUs } from '@/components/sections/Resume';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Resume />
      <ContactUs />
    </main>
  );
} 