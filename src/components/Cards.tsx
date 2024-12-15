"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

export function GlowingStarsBackgroundCardPreview() {
    const cards = [
        {
          title: "Kshitij 2024",
          description:
            "Kshitij, the flagship techfest of IIT Kharagpur, cutting-edge events",
          // Add custom icon path for the left card here (optional)
        },
        {
          title: "Celesta 2024",
          description: "Celesta, IIT Patna's techfest, provided us with a platform",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4 text-white stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0 -6v-3m0 0H6v3m6 0v3"
              />
            </svg>
          ),
        },
        {
          title: "KIIT Fest 7.0",
          description: "KIIT Fest 7.0, was a memorable blend of learning, competition, and inspiration.",
          // Add custom icon path for the right card here (optional)
        },
      ];
    
      return (
        <div className="flex py-20 justify-center items-center antialiased">
          {cards.map((card, index) => (
            <div key={index} className={`mr-10 px-5${index === 2 ? '' : 'mr-auto'}`}>
              <GlowingStarsBackgroundCard>
                <GlowingStarsTitle>{card.title}</GlowingStarsTitle>
                <div className="flex justify-between items-end">
                  <GlowingStarsDescription>{card.description}</GlowingStarsDescription>
                  {card.icon && <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">{card.icon}</div>}
                </div>
              </GlowingStarsBackgroundCard>
            </div>
          ))}
        </div>
      );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
