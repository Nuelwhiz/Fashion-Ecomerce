"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-amber-400"
          >
            Premium Collection
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold leading-tight md:text-6xl"
          >
            Elevate Your Style With Timeless Fashion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-lg text-zinc-300"
          >
            Discover premium handcrafted outfits designed with elegance,
            confidence, and exceptional attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex items-center gap-2 text-sm"
          >
            <Link
              href="/"
              className="text-zinc-300 transition hover:text-amber-400"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-amber-400">Shop</span>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-125 overflow-hidden rounded-3xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
            alt="Luxury Fashion"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}