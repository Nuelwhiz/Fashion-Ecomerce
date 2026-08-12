"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  ChevronDown,
  X,
} from "lucide-react";
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

  // Prevent hydration mismatch for cart count
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close desktop dropdown when clicking outside
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenu(false);
    setMobileDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-gray-200 bg-white shadow-md"
          : "border-transparent bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 md:h-24 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-[0.2em] text-zinc-900 transition hover:text-amber-600 sm:text-2xl md:text-3xl"
        >
          EMIFEX
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
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
                    type="button"
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium uppercase tracking-widest transition ${
                      isChildActive
                        ? "bg-amber-100 text-amber-800"
                        : "text-zinc-700 hover:bg-zinc-100 hover:text-black"
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
                    className={`absolute left-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl transition-all duration-300 ${
                      openDropdown
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-3 opacity-0"
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
                className={`rounded-full px-4 py-2 text-sm font-medium uppercase tracking-widest transition ${
                  isActive
                    ? "bg-amber-100 text-amber-800"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden items-center gap-5 lg:flex">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="text-amber-600 transition hover:text-zinc-700"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Wishlist */}
          <button
            type="button"
            aria-label="Wishlist"
            className="text-zinc-900 transition hover:text-red-500"
          >
            <Heart className="h-5 w-5" />
          </button>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label={`Shopping cart${hasMounted ? ` with ${cartCount} items` : ""}`}
            className="relative text-zinc-900 transition hover:text-amber-600"
          >
            <ShoppingBag className="h-5 w-5" />

            {hasMounted && cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-medium text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Shop Now */}
          <Link
            href="/shop"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Mobile Cart */}
          <Link
            href="/cart"
            aria-label={`Shopping cart${hasMounted ? ` with ${cartCount} items` : ""}`}
            className="relative flex h-10 w-10 items-center justify-center text-zinc-900 transition hover:text-amber-600"
          >
            <ShoppingBag className="h-6 w-6" />

            {hasMounted && cartCount > 0 && (
              <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-medium text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-10 w-10 items-center justify-center text-zinc-900 transition hover:text-amber-600"
          >
            {mobileMenu ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-full w-full border-t bg-white shadow-lg transition-all duration-300 lg:hidden ${
            mobileMenu
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-5 opacity-0"
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
                      type="button"
                      onClick={() => setMobileDropdown(!mobileDropdown)}
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-widest transition ${
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
                        mobileDropdown
                          ? "mt-2 max-h-60"
                          : "max-h-0"
                      }`}
                    >
                      <div className="ml-4 flex flex-col gap-2 border-l-2 border-amber-200 pl-3">
                        {item.dropdown.map((drop) => {
                          const isSubActive = pathname === drop.href;

                          return (
                            <Link
                              key={drop.name}
                              href={drop.href}
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
                  className={`rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-widest transition ${
                    isActive
                      ? "bg-amber-100 text-amber-800"
                      : "text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Shop Now */}
            <Link
              href="/shop"
              className="mt-4 rounded-full bg-zinc-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Shop Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}