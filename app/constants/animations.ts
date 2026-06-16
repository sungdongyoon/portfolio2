import { HTMLMotionProps } from "motion/react";

export const sectionAnimation: Pick<
  HTMLMotionProps<"section">,
  "initial" | "whileInView" | "viewport" | "transition"
> = {
  initial: { opacity: 0, y: 70 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: "easeOut" },
};
