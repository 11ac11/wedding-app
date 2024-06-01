"use client";

import { motion } from "framer-motion";
import { Hamburger } from '@/components/hamburger'

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <Hamburger />
      {children}
    </motion.div>
  );
}
