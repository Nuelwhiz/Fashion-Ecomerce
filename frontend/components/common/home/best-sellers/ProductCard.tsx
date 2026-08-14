"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../../Button/Button";
import { useCartStore } from "@/store/cart-store";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(id, name, price, 1);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-2xl bg-gray-200 shadow-sm hover:shadow-xl"
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
        <h3 className="text-xl font-semibold text-zinc-700">
          {name}
        </h3>

        <p className="mt-2 text-lg font-bold text-[#C89B3C]">
          ₦{price.toLocaleString()}
        </p>

        <Button
          className="mt-5 w-full"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
}