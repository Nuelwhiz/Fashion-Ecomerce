"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  {
    name: "Collections",
    dropdown: [
      { name: "Men", href: "/collections/men" },
      { name: "Women", href: "/collections/women" },
      { name: "New Arrivals", href: "/collections/new-arrivals" },
      { name: "Best Sellers", href: "/collections/best-sellers" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="relative mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold tracking-[0.25em] text-zinc-900 hover:text-amber-600 transition"
        >
          EMIFEX
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((item) => (
            <div
              key={item.name}
              className="relative"
              ref={item.dropdown ? dropdownRef : null}
            >
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="flex items-center gap-1 text-sm uppercase tracking-widest font-medium text-zinc-700 hover:text-black transition"
                  >
                    {item.name}

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openDropdown ? "rotate-180" : ""
                      } `}
                    />
                  </button>

                  <div
                    className={`absolute left-0 top-full mt-5 w-52 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                      openDropdown
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-3"
                    }`}
                  >
                    {item.dropdown.map((drop) => (
                      <Link
                        key={drop.name}
                        href={drop.href}
                        onClick={() => setOpenDropdown(false)}
                        className="block px-5 py-3 text-sm text-zinc-700 hover:bg-amber-50 hover:text-amber-700 transition"
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="relative text-sm uppercase tracking-widest font-medium text-zinc-700 hover:text-black transition after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-amber-600 hover:after:w-full after:transition-all"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-5">
          <Search className="h-5 w-5 text-amber-600 cursor-pointer hover:text-zinc-700 transition" />

          <Heart className="h-5 w-5 text-zinc-900 cursor-pointer hover:text-red-500 transition" />

          <ShoppingBag className="h-5 w-5 text-zinc-900 cursor-pointer hover:text-amber-600 transition" />

          <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700 transition">
            Shop Now
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <X className="h-8 w-8 text-zinc-900" />
          ) : (
            <Menu className="h-8 w-8 text-zinc-900" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg border-t lg:hidden transition-all duration-300 ${
            mobileMenu
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-5"
          }`}
        >
          <nav className="flex flex-col gap-5 px-6 py-6">
            {links.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileDropdown(!mobileDropdown)}
                      className="flex w-full items-center justify-between text-sm uppercase tracking-widest font-medium text-zinc-700"
                    >
                      {item.name}

                      <ChevronDown
                        size={18}
                        className={` transition-transform ${
                          mobileDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileDropdown ? "max-h-60 mt-3" : "max-h-0"
                      }`}
                    >
                      <div className="ml-4 flex flex-col gap-3 border-l pl-4">
                        {item.dropdown.map((drop) => (
                          <Link
                            key={drop.name}
                            href={drop.href}
                            onClick={() => setMobileMenu(false)}
                            className="text-sm text-zinc-600 hover:text-amber-600"
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="text-sm uppercase tracking-widest font-medium text-zinc-700"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white">
              Shop Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
