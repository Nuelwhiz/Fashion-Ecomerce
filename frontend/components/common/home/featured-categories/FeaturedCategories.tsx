"use client";

import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { categories } from "./CategoryData";

export default function FeaturedCategories() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#FAF8F5]">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <span className="uppercase tracking-[6px] text-[#C89B3C] text-sm">
          Collections
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-black">
          Explore Our Categories
        </h2>

        <p className="max-w-2xl mx-auto mt-5 text-gray-600">
          Carefully tailored fashion pieces that combine elegance, comfort, and
          timeless style for every occasion.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              duration: 0.7,
            }}
          >
            <CategoryCard title={category.title} image={category.image} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
