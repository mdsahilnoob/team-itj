"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Robo Soccer",
    designation: "Team ITJ",
    content: (
      <p>
        Created a seamless <Highlight>Smart Home</Highlight> experience using affordable
        <Highlight>IOT devices</Highlight>.
      </p>
    ),
  },
  {
    id: 1,
    name: "Line Following Robot",
    designation: "Team ITJ",
    content: (
      <p>
        Developed an advanced{" "}
        <Highlight>autonomous robot</Highlight> capable of 
        <Highlight>precisely tracking </Highlight>and<Highlight>navigating</Highlight>predefined paths.
      </p>
    ),
  },
  {
    id: 2,
    name: "(ITJ-BOT) AI-Powered Chatbot",
    designation: "Team ITJ",
    content: (
      <p>
        Designed a chatbot to assist users with 
        <Highlight>technical troubleshooting</Highlight> in
        <Highlight>real-time</Highlight>.
      </p>
    ),
  },
];
