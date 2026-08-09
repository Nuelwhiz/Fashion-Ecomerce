import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  image,
}: ProductCardProps) {
  return (
    <article className="group">
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100">
        <Link href={`/shop/${id}`} className="block h-full w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Wishlist */}
        <button
          type="button"
          aria-label={`Add ${name} to wishlist`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-amber-600"
        >
          <Heart size={17} strokeWidth={1.8} />
        </button>
      </div>

      {/* Product Information */}
      <div className="mt-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-600">
          {category}
        </p>

        <Link href={`/shop/${id}`}>
          <h3 className="mt-1 text-base font-medium text-zinc-900 transition-colors duration-300 hover:text-amber-600 sm:text-lg">
            {name}
          </h3>
        </Link>

        <p className="mt-2 text-sm font-semibold text-zinc-900">
          ₦{price.toLocaleString()}
        </p>
      </div>
    </article>
  );
}