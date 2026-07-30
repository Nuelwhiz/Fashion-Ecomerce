"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="bg-[#111827] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="uppercase tracking-[6px] text-[#C19A6B]">
            Stay Updated
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Join the EMIFEX Community
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-300 leading-8">
            Be the first to discover our newest collections, exclusive offers,
            fashion tips, and special promotions delivered straight to your
            inbox.
          </p>

          <form className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-14 rounded-full border-white/20 bg-white text-black placeholder:text-gray-500"
            />

            <Button
              type="submit"
              className="h-14 rounded-full bg-[#C19A6B] px-8 text-white hover:bg-[#A87E50]"
            >
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
