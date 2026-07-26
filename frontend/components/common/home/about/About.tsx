"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../../Button/Button";
import { values } from "./values";

export default function About() {
  return (
    <section className="bg-white py-24 px-6 lg:px-20 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
              alt="EMIFEX Fashion"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-8 -right-8 bg-[#C89B3C] text-white rounded-2xl p-6 shadow-xl">
            <h3 className="text-4xl font-bold">5+</h3>
            <p>Years of Excellence</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[6px] text-[#C89B3C] text-sm">
            About EMIFEX
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Tailoring Confidence Through Fashion
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            At EMIFEX, fashion is more than clothing—it's confidence,
            craftsmanship, and individuality. Every outfit is thoughtfully
            designed to deliver elegance, comfort, and lasting quality.
          </p>

          <div className="mt-10 space-y-6">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="border-l-4 border-[#C89B3C] pl-5"
              >
                <h3 className="font-semibold text-xl">{item.title}</h3>

                <p className="text-gray-600 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <Button className="mt-10">Discover More</Button>
        </motion.div>
      </div>
    </section>
  );
}
