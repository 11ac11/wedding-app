'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Hamburger } from '@/components/hamburger'
import { usePathname } from 'next/navigation'

export default function Template({ children }) {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <Hamburger />
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
