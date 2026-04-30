"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type FadeInProps = {
  children?: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  x?: number
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 18,
  x = 0,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}