"use client"

import { motion } from "framer-motion"
import { Target, Eye, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Mision",
    description: "Proveer soluciones tecnologicas innovadoras que impulsen el crecimiento y la eficiencia de nuestros clientes."
  },
  {
    icon: Eye,
    title: "Vision",
    description: "Ser lideres en consultoria TI, reconocidos por nuestra excelencia tecnica y compromiso con el exito del cliente."
  },
  {
    icon: Shield,
    title: "Valores",
    description: "Integridad, innovacion, compromiso y excelencia en cada proyecto que emprendemos."
  },
  {
    icon: Users,
    title: "Equipo",
    description: "Profesionales certificados con amplia experiencia en las principales tecnologias del mercado."
  }
]

export function NosotrosSection() {
  return (
    <section
      id="nosotros"
      className="relative py-24 bg-[#1e2a3d]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-[#F26522]">Nosotros</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Con mas de 20 anos de experiencia, somos tu aliado estrategico en la transformacion digital de tu empresa.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-[#243246] border border-[#2d3d52] hover:border-[#F26522]/50 transition-all duration-300"
            >
              <div className="mb-4">
                <feature.icon className="h-10 w-10 text-[#F26522]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#F26522] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Por que elegirnos?
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              En Advisor2Grow, combinamos experiencia tecnica con una profunda comprension de las necesidades empresariales. Nuestro enfoque centrado en el cliente nos permite disenar soluciones a medida que generan valor real.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Trabajamos con las principales tecnologias cloud y on-premise, garantizando que tu infraestructura este preparada para los desafios del presente y del futuro.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "99.9%", label: "Uptime Garantizado" },
              { number: "500+", label: "Incidentes Resueltos" },
              { number: "15+", label: "Certificaciones" },
              { number: "3", label: "Paises" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-4 bg-[#1a2332] border border-[#2d3d52] text-center"
              >
                <div className="text-2xl font-bold text-[#F26522] mb-1">{stat.number}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
