"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"

type AnimatedHeadingProps = {
  as?: HeadingTag
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function AnimatedHeading({
  as = "h2",
  children,
  className,
  delay = 0,
  duration = 0.5,
}: AnimatedHeadingProps) {
  const Tag = as

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay }}
    >
      <Tag className={cn(className)}>{children}</Tag>
    </motion.div>
  )
}