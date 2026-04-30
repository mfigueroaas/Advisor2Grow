"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

import { servicesCore } from "@/data/services-core"
function ServiceCard({
  service,
  index,
}: {
  service: typeof servicesCore[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Corner brackets */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-border group-hover:border-primary transition-colors duration-200" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-r border-t border-border group-hover:border-primary transition-colors duration-200" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-border group-hover:border-primary transition-colors duration-200" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-border group-hover:border-primary transition-colors duration-200" />

      <div className="relative h-full bg-white border border-slate-200 p-6 transition-all duration-300 group-hover:border-orange-500 group-hover:shadow-md rounded-xl shadow-sm">
        {/* Code identifier */}
        <div className="absolute top-3 right-3 font-sans text-[10px] text-slate-500 group-hover:text-orange-500 transition-colors">
          [{service.code}]
        </div>

        {/* Icon */}
        <div className="mb-4 relative">
          <Icon
            className="w-10 h-10 text-slate-500 group-hover:text-orange-500 transition-colors duration-200"
            strokeWidth={1}
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 text-slate-900 group-hover:text-orange-500 transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed font-[var(--font-inter)]">
          {service.description}
        </p>

        {/* Bottom line indicator */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300" />

        {/* Hash detail */}
        <div className="absolute bottom-3 right-3 font-sans text-[8px] text-slate-400 group-hover:text-orange-500/50 transition-colors">
          #A2G
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 px-6 bg-slate-50" id="servicios">

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Nuestros Servicios
          </h2>
          <p className="text-slate-600 max-w-2xl font-[var(--font-inter)]">
            Soluciones integrales de tecnología diseñadas para impulsar 
            la transformación digital de tu empresa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesCore.map((service, index) => (
            <ServiceCard key={service.code} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
