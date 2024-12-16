import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
// import Image from "next/image";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Team ITJ has been a fantastic platform for me to learn and grow as a tech enthusiast.",
      name: "Prashi Rain",
      designation: "Tech Team",
      src: "/images/backdrop_00.jpg",
    },
    {
      quote:
        "I've gained invaluable experience and knowledge through my involvement in Team ITJ's projects.",
      name: "Vedant Mishra",
      designation: "Tech Team",
      src: "/images/backdrop_02.jpg",
    },
    {
      quote:
        "Team ITJ has fostered a strong sense of community among its members, making it a truly enjoyable experience.",
      name: "Nilesh Jain",
      designation: "Marketing & Finance Team",
      src: "/images/backdrop_04.jpg",
    },
    {
      quote:
        "The supportive and encouraging atmosphere in Team ITJ has boosted my confidence and motivated me to strive for excellence.",
      name: "Simran Rai",
      designation: "Digital Team",
      src: "/images/backdrop_06.jpg",
    },
    {
      quote:
        "The opportunities to work on real-world projects have made my time in Team ITJ highly rewarding.",
      name: "Suyash Kumar Laur",
      designation: "Software Team",
      src: "/images/backdrop_01.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}