"use client";

import Link from "next/link";
import { navLinks } from "./NavLinks";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm font-medium text-gray-800 transition hover:text-amber-700"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}