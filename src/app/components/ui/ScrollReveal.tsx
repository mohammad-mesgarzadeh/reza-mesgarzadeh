import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  as?: "section" | "div";
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 20,
  as = "div",
}: ScrollRevealProps) {
  const Component = as === "section" ? motion.section : motion.div;

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
