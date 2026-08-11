"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCartStore } from "@/store/cart-store";

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
  const pathname = usePathname();
  const cartCount = useCartStore((state) => state.cartCount());
  
  const [hasMounted, setHasMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Set mounted status on client load to prevent SSR hydration mismatch
  useEffect(() => {
    setHasMounted(true);
  }, []);

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
        <nav className="hidden lg:flex items-center gap-2">
          {links.map((item) => {
            if (item.dropdown) {
              const isChildActive = item.dropdown.some(
                (drop) => pathname === drop.href
              );

              return (
                <div
                  key={item.name}
                  className="relative"
                  ref={dropdownRef}
                >
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm uppercase tracking-widest font-medium transition ${
                      isChildActive
                        ? "bg-amber-100 text-amber-800"
                        : "text-zinc-700 hover:text-black hover:bg-zinc-100"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-0 top-full mt-2 w-52 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                      openDropdown
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-3"
                    }`}
                  >
                    {item.dropdown.map((drop) => {
                      const isSubActive = pathname === drop.href;
                      return (
                        <Link
                          key={drop.name}
                          href={drop.href}
                          onClick={() => setOpenDropdown(false)}
                          className={`block px-5 py-3 text-sm transition ${
                            isSubActive
                              ? "bg-amber-100 font-semibold text-amber-900"
                              : "text-zinc-700 hover:bg-amber-50 hover:text-amber-700"
                          }`}
                        >
                          {drop.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm uppercase tracking-widest font-medium transition ${
                  isActive
                    ? "bg-amber-100 text-amber-800"
                    : "text-zinc-700 hover:text-black hover:bg-zinc-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-5">
          <Search className="h-5 w-5 text-amber-600 cursor-pointer hover:text-zinc-700 transition" />

          <Heart className="h-5 w-5 text-zinc-900 cursor-pointer hover:text-red-500 transition" />

          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative"
          >
            <ShoppingBag size={20} />
            {hasMounted && cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">
                {cartCount}
              </span>
            )}
          </Link>

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
          <nav className="flex flex-col gap-2 px-6 py-6">
            {links.map((item) => {
              if (item.dropdown) {
                const isChildActive = item.dropdown.some(
                  (drop) => pathname === drop.href
                );

                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setMobileDropdown(!mobileDropdown)}
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm uppercase tracking-widest font-medium transition ${
                        isChildActive
                          ? "bg-amber-100 text-amber-800"
                          : "text-zinc-700"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          mobileDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileDropdown ? "max-h-60 mt-2" : "max-h-0"
                      }`}
                    >
                      <div className="ml-4 flex flex-col gap-2 border-l-2 border-amber-200 pl-3">
                        {item.dropdown.map((drop) => {
                          const isSubActive = pathname === drop.href;
                          return (
                            <Link
                              key={drop.name}
                              href={drop.href}
                              onClick={() => setMobileMenu(false)}
                              className={`rounded-md px-3 py-2 text-sm transition ${
                                isSubActive
                                  ? "bg-amber-100 font-semibold text-amber-900"
                                  : "text-zinc-600 hover:text-amber-600"
                              }`}
                            >
                              {drop.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`rounded-lg px-4 py-3 text-sm uppercase tracking-widest font-medium transition ${
                    isActive
                      ? "bg-amber-100 text-amber-800"
                      : "text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <button className="mt-4 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white">
              Shop Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}