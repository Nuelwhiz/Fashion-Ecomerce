export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Okafor",
    role: "Business Executive",
    image: "/images/testimonials/client-1.jpg",
    review:
      "EMIFEX exceeded my expectations. Every outfit is crafted with precision and elegance. I always receive compliments whenever I wear them.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Adeyemi",
    role: "Entrepreneur",
    image: "/images/testimonials/client-2.jpg",
    review:
      "Excellent customer service and premium finishing. My custom senator outfit fit perfectly and was delivered on time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Chinedu Obi",
    role: "Groom",
    image: "/images/testimonials/client-3.jpg",
    review:
      "My wedding attire exceeded every expectation. EMIFEX made my special day even more memorable.",
    rating: 5,
  },
  {
    id: 4,
    name: "Samuel Johnson",
    role: "Creative Director",
    image: "/images/testimonials/client-4.jpg",
    review:
      "Luxury tailoring at its finest. From consultation to delivery, everything was seamless.",
    rating: 5,
  },
];