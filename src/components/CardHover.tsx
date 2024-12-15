import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Kshitij 2024",
    description:
      "We had an incredible experience at Kshitij, the flagship techfest of IIT Kharagpur, known for its cutting-edge events and inspiring innovations.",
    link: "https://teamitj.tech/",
  },
  {
    title: "Celesta 2024",
    description:
      "Our participation in Celesta, IIT Patna's acclaimed techfest, provided us with a unique platform to explore cutting-edge technology and creativity.",
    link: "https://teamitj.tech/",
  },
  {
    title: "KIIT Fest 7.0",
    description:
      "Our participation in KIIT Fest 7.0, the renowned fest of KIIT University, was a memorable blend of learning, competition, and inspiration.",
    link: "https://teamitj.tech/",
  },
];
