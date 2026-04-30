"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { serviciosSectionData } from "@/data/servicios-section"
export function ServiciosSection() {
  return (
    <section
      id="servicios"
      className="relative py-24 bg-slate-50"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nuestros <span className="text-brand-primary">Servicios</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
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
              className="group relative p-6 bg-white border border-slate-200 hover:border-orange-500 hover:shadow-md transition-all duration-300 overflow-hidden rounded-xl shadow-sm"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 bg-slate-50 border border-slate-200 group-hover:border-orange-500 transition-colors rounded-lg">
                  <service.icon className="h-8 w-8 text-brand-primary" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-xs px-2 py-1 bg-slate-50 text-slate-600 border border-slate-200 rounded-md"
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
                  className="inline-flex items-center text-sm text-brand-primary hover:text-orange-500 transition-colors"
                >
                  Saber mas
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-primary group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
