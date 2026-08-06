//import Image from "next/image";
import Hero from "@/components/landing/Hero/Hero";
import FeaturedCategories from "@/components/common/home/featured-categories/FeaturedCategories";
import BestSellers from "@/components/common/home/best-sellers/BestSellers";
import About from "@/components/common/home/about/About";
import WhyChoose from "@/components/common/home/why-choose/WhyChoose";
import Testimonials from "@/components/common/home/testimonials/Testimonials";
import Newsletter from "@/components/common/home/newsLetter/NewsLetter";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section>
          <FeaturedCategories />
        </section>
        <section>
          <BestSellers />
        </section>
        <section>
          <About />
        </section>
        <section>
          <WhyChoose />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <Newsletter />
        </section>
      </main>
    </>
  );
}
