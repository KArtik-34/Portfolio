'use client';

import { FloatingNav } from "@/components/ui/floating-nav";
import { UserIcon, FolderIcon, EnvelopeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const navItems = [
  {
    name: "About",
    link: "#about",
    icon: <UserIcon className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FolderIcon className="h-4 w-4" />,
  },
  {
    name: "My Education & Experience",
    link: "#timeline",
    icon: <AcademicCapIcon className="h-4 w-4" />,
  },
];

export function Navigation() {
  return <FloatingNav navItems={navItems} />;
} 