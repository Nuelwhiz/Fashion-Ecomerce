"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "./product";

export default function BestSellers() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#1F2937]">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <span className="uppercase tracking-[6px] text-[#C89B3C]">
          Our Collection
        </span>

        <h2 className="text-5xl font-bold mt-4">Best Sellers</h2>

        <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
          Discover handcrafted fashion pieces designed with elegance, confidence
          and timeless style.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.7,
            }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
