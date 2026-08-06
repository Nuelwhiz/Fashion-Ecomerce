"use client";

import Link from "next/link";
import {
  /* Facebook,
  Instagram,
  Twitter, */
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const categories = [
    "Senator Wear",
    "Agbada",
    "Kaftans",
    "Street Shirts",
    "Custom Tailoring",
  ];

  return (
    <footer className="bg-[#111111] text-white">
      {/* Gold Top Border */}
      <div className="h-1 w-full bg-[#C19A6B]" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold tracking-wider">EMIFEX</h2>

            <p className="mt-5 max-w-sm leading-7 text-gray-400">
              We create premium bespoke fashion pieces that combine elegance,
              confidence and timeless craftsmanship for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-[#C19A6B]">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors duration-300 hover:text-[#C19A6B]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-[#C19A6B]">
              Categories
            </h3>

            <ul className="space-y-4 text-gray-400">
              {categories.map((category) => (
                <li
                  key={category}
                  className="transition-colors duration-300 hover:text-[#C19A6B] cursor-pointer"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-[#C19A6B]">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[#C19A6B]" />
                <span className="text-gray-400">Lagos, Nigeria</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#C19A6B]" />
                <span className="text-gray-400">+234 XXX XXX XXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#C19A6B]" />
                <span className="text-gray-400">hello@emifex.com</span>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-6">
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-all duration-300 hover:border-[#C19A6B] hover:bg-[#C19A6B] hover:text-black"
                >
                  <FaFacebook className="h-5 w-5" />
                </Link>

                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-all duration-300 hover:border-[#C19A6B] hover:bg-[#C19A6B] hover:text-black"
                >
                  <FaInstagram className="h-5 w-5" />
                </Link>

                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition-all duration-300 hover:border-[#C19A6B] hover:bg-[#C19A6B] hover:text-black"
                >
                  <FaXTwitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} EMIFEX Creations. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#C19A6B] transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-[#C19A6B] transition-colors"
            >
              Terms of Service
            </Link>

            <Link
              href="/returns"
              className="hover:text-[#C19A6B] transition-colors"
            >
              Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
