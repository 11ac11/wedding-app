// components/CircleImage.js
'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './CircleImage.module.css'

const CircleImage = ({ src }) => {
  const pathname = usePathname()
  const [imageSrc, setImageSrc] = useState(src)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentPathname, setCurrentPathname] = useState(pathname)

  useEffect(() => {
    if (pathname !== currentPathname) {
      setIsTransitioning(true)
      setTimeout(() => {
        setImageSrc(src)
        setIsTransitioning(false)
        setCurrentPathname(pathname)
      }, 1000) // Adjust this duration to match the CSS animation
    }
  }, [pathname, currentPathname, src])

  return (
    <div className={styles.container}>
      <AnimatePresence>
        <motion.img
          key={imageSrc}
          src={imageSrc}
          className={styles.circle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          alt="Circle"
        />
      </AnimatePresence>
    </div>
  )
}

export default CircleImage
