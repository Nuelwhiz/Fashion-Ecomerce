import Image from "next/image";
import Hero from "@/components/landing/Hero/Hero";
import FeaturedCategories from "@/components/common/home/featured-categories/FeaturedCategories";
import BestSellers from "@/components/common/home/best-sellers/BestSellers";
import About from "@/components/common/home/about/About";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div>
          <FeaturedCategories />
        </div>
        <div>
          <BestSellers />
        </div>
        <div>
          <About />
        </div>
      </main>
    </>
  );
}
