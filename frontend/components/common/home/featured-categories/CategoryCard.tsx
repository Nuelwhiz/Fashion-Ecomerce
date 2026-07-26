"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../../Button/Button";

interface Props {
  title: string;
  image: string;
}

export default function CategoryCard({
  title,
  image,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl"
    >
      <div className="relative h-[420px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-all duration-500" />

        <div className="absolute bottom-8 left-8">
          <h3 className="text-white text-3xl font-semibold mb-5">
            {title}
          </h3>

          <Button>Shop Now</Button>
        </div>
      </div>
    </motion.div>
  );
}