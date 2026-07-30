"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "./testimonialData";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <Card className="border-0 shadow-lg rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <Quote className="w-10 h-10 text-[#C19A6B] mb-6" />

        <p className="text-gray-600 leading-8 flex-1">
          "{testimonial.review}"
        </p>

        <div className="flex mt-6 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star
              key={index}
              className="w-5 h-5 fill-[#C19A6B] text-[#C19A6B]"
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold text-lg text-[#1F2937]">
              {testimonial.name}
            </h4>

            <p className="text-sm text-gray-500">
              {testimonial.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}