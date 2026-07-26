"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F0]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-16 px-6 py-16 lg:flex-row lg:px-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <span className="mb-5 inline-block rounded-full bg-amber-100 px-5 py-2 text-sm font-medium text-amber-700">
            New Collection 2026
          </span>

          <h1 className="text-5xl font-black leading-tight text-zinc-900 lg:text-7xl">
            Wear <br /> Confidence.
          </h1>

          <p className="mt-8 text-lg leading-8 text-zinc-600">
            Discover premium ready-to-wear outfits crafted for elegance,
            comfort, and confidence. Every stitch is designed to make you stand
            out wherever you go.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700"
            >
              Shop Collection
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/collections"
              className="rounded-full border border-zinc-900 px-8 py-4 font-semibold text-zinc-900 transition-all duration-300 hover:bg-zinc-900 hover:text-white"
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* Decorative Blur */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-200 blur-3xl" />

          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-zinc-300 blur-3xl" />

          <Image
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
            alt="Fashion Model"
            width={550}
            height={750}
            priority
            className="rounded-[40px] object-cover shadow-2xl transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
