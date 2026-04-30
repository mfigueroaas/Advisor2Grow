"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { serviciosSectionData } from "@/data/servicios-section"
export function ServiciosSection() {
  return (
    <section
      id="servicios"
      className="relative py-24 bg-page"
    >
      {/* Background Pattern */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros <span className="text-brand">Servicios</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluciones integrales de tecnologia para impulsar el crecimiento de tu empresa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviciosSectionData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 bg-surface border border-border hover:border-brand hover:shadow-md transition-all duration-300 overflow-hidden rounded-xl shadow-sm"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 bg-page border border-border group-hover:border-brand transition-colors rounded-lg">
                  <service.icon className="h-8 w-8 text-brand" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-xs px-2 py-1 bg-page text-muted-foreground border border-border rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <a 
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="inline-flex items-center text-sm text-brand hover:text-brand-strong transition-colors"
                >
                  Saber mas
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
