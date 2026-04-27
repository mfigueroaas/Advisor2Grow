"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Server, Cloud, Shield, Rocket, Network, Database } from "lucide-react"

const services = [
  {
    icon: Server,
    title: "Infraestructura TI",
    description: "Diseño, implementación y gestión de infraestructura física y virtual. Servidores, redes y centros de datos optimizados.",
    code: "INF.001",
  },
  {
    icon: Cloud,
    title: "Soluciones Cloud",
    description: "Migración y arquitectura MultiCloud con AWS, Azure y Google Cloud. Optimización de costos y alta disponibilidad.",
    code: "CLD.002",
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Protección integral de activos digitales. Auditorías, pentesting, respuesta a incidentes y cumplimiento normativo.",
    code: "SEC.003",
  },
  {
    icon: Rocket,
    title: "DevOps & Automatización",
    description: "Pipelines CI/CD, infraestructura como código y contenedorización. Acelera tus despliegues con prácticas modernas.",
    code: "DEV.004",
  },
  {
    icon: Network,
    title: "Redes Empresariales",
    description: "Diseño de topologías, SD-WAN, VPNs corporativas y conectividad de alta capacidad para operaciones críticas.",
    code: "NET.005",
  },
  {
    icon: Database,
    title: "Gestión de Datos",
    description: "Bases de datos, almacenamiento empresarial, backup y recuperación ante desastres. Tus datos siempre disponibles.",
    code: "DAT.006",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: typeof services[0]
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

      <div
        className="relative h-full bg-black/40 backdrop-blur-md border border-border p-6 transition-all duration-200 group-hover:border-primary group-hover:bg-black/60 group-hover:shadow-[0_10px_40px_-15px_rgba(249,115,22,0.3)]"
      >
        {/* Code identifier */}
        <div className="absolute top-3 right-3 font-mono text-[10px] text-muted-foreground/50 group-hover:text-primary/70 transition-colors">
          [{service.code}]
        </div>

        {/* Icon */}
        <div className="mb-4 relative">
          <Icon
            className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-200"
            strokeWidth={1}
          />
          {/* Icon glow effect on hover */}
          <div className="absolute inset-0 w-10 h-10 bg-primary/0 group-hover:bg-primary/20 blur-xl transition-all duration-200" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed font-[var(--font-inter)]">
          {service.description}
        </p>

        {/* Bottom line indicator */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300" />

        {/* Hash detail */}
        <div className="absolute bottom-3 right-3 font-mono text-[8px] text-muted-foreground/30 group-hover:text-primary/40 transition-colors">
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
    <section className="relative py-24 px-6" id="servicios">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-widest text-primary mb-4 block">
            [SERVICIOS.CORE // PORTFOLIO]
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl font-[var(--font-inter)]">
            Soluciones integrales de tecnología diseñadas para impulsar 
            la transformación digital de tu empresa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.code} service={service} index={index} />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-24 right-0 font-mono text-[10px] text-muted-foreground/20 hidden lg:block">
          + + + + +
        </div>
        <div className="absolute bottom-24 left-0 font-mono text-[10px] text-muted-foreground/20 hidden lg:block">
          + + + + +
        </div>
      </div>
    </section>
  )
}
