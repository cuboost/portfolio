"use client";
import { motion } from "framer-motion";

export default function LayoutChildren({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.main>
  );
}
