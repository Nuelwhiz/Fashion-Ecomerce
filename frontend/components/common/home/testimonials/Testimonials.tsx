"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialData";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.25em] text-[#C19A6B] font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl font-bold text-[#1F2937] mt-3">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-5 leading-8">
            Every stitch tells a story of excellence. Hear from clients who
            trusted EMIFEX Creations to craft timeless outfits for life's
            biggest moments.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
