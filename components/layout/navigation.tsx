'use client';

import { FloatingNav } from "@/components/ui/floating-nav";
import { UserIcon, FolderIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

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
    name: "Contact",
    link: "#contact",
    icon: <EnvelopeIcon className="h-4 w-4" />,
  },
];

export function Navigation() {
  return <FloatingNav navItems={navItems} />;
} 