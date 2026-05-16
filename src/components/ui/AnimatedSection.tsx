"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const parentVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

type Props = {
  children: ReactNode;
  className?: string;
};

export function AnimatedSection({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={parentVariants}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ children, className }: Props) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
