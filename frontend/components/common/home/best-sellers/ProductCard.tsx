"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../../Button/Button";

interface ProductProps {
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({
  name,
  price,
  image,
}: ProductProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl"
    >
      <div className="relative h-[360px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>

        <p className="text-[#C89B3C] font-bold text-lg mt-2">
          {price}
        </p>

        <Button className="mt-5 w-full">
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
}