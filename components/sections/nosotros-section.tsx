"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Nombre Apellido",
    role: "Arquitecto Cloud",
    description: "Mas de 15 anos de experiencia en arquitecturas cloud empresariales. Especialista en AWS, Azure y soluciones hibridas.",
    linkedin: "#"
  },
  {
    name: "Nombre Apellido",
    role: "Director de Operaciones",
    description: "Experto en gestion de infraestructura critica y operaciones TI. Certificado en ITIL y PMP.",
    linkedin: "#"
  },
  {
    name: "Nombre Apellido",
    role: "Especialista en Seguridad",
    description: "Lider en ciberseguridad con certificaciones CISSP y CEH. Protegiendo empresas por mas de 10 anos.",
    linkedin: "#"
  },
  {
    name: "Nombre Apellido",
    role: "Consultor Senior DevOps",
    description: "Automatizacion y CI/CD son su pasion. Implementando pipelines eficientes en multiples industrias.",
    linkedin: "#"
  }
]

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-slate-800/40 border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-[#F26522]"
    >
      {/* Card Content */}
      <div className="p-6">
        {/* Photo Placeholder */}
        <div className="relative mb-6 overflow-hidden">
          <div className="aspect-square bg-slate-700 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-gray-400 text-sm text-center px-4">
              [ESPACIO PARA FOTO DE PERFIL]
            </span>
          </div>
        </div>

        {/* Name and Role */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-1">
            {member.name}
          </h3>
          <p className="text-[#F26522] text-sm font-medium">
            {member.role}
          </p>
        </div>
      </div>

      {/* Overlay Panel - Slides up on hover */}
      <div className="absolute inset-0 bg-[#1a2332]/95 flex flex-col items-center justify-center p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <p className="text-gray-300 text-sm text-center leading-relaxed mb-6">
          {member.description}
        </p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#F26522] hover:text-white transition-colors cursor-hover"
        >
          <Linkedin className="h-5 w-5" />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
      </div>
    </motion.div>
  )
}

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
            Conoce a Nuestro <span className="text-[#F26522]">Equipo</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Profesionales certificados con amplia experiencia en las principales tecnologias del mercado.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
