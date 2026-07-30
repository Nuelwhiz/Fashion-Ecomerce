"use client";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "./product";

export default function BestSellers() {
  return (
    <section className="bg-[#1F2937] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="uppercase tracking-[6px] text-[#C89B3C]">
            Our Collection
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">Best Sellers</h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            Discover handcrafted fashion pieces designed with elegance,
            confidence and timeless style.
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
      </div>
    </section>
  );
}
