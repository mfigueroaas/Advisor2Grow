"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import { techStackNodes } from "@/data/tech-stack"

export function TechStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 px-6 bg-page" id="tecnologias">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Núcleo Tecnológico
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-[var(--font-inter)]">
            Dominamos las plataformas líderes del mercado para construir arquitecturas robustas y escalables.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackNodes.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-xl border border-border bg-surface shadow-sm p-6 hover:border-brand hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg border border-border bg-page px-3 py-2 text-sm font-semibold text-foreground">
                {tech.name}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}