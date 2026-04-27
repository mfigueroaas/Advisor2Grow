"use client"

import { motion } from "framer-motion"
import { 
  Cloud, 
  Shield, 
  Server, 
  Database, 
  Code, 
  Headphones,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Migracion y gestion de infraestructura en AWS, Azure y Google Cloud. Optimizamos costos y rendimiento.",
    features: ["MultiCloud", "Hibrido", "Optimizacion"]
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Proteccion integral de tu infraestructura con las mejores practicas y herramientas del mercado.",
    features: ["Firewalls", "Monitoreo 24/7", "Compliance"]
  },
  {
    icon: Server,
    title: "Infraestructura TI",
    description: "Diseno, implementacion y mantenimiento de infraestructura on-premise y virtualizada.",
    features: ["VMware", "Hyper-V", "Contenedores"]
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description: "Administracion y optimizacion de bases de datos SQL y NoSQL para alto rendimiento.",
    features: ["SQL Server", "PostgreSQL", "MongoDB"]
  },
  {
    icon: Code,
    title: "DevOps",
    description: "Automatizacion de procesos CI/CD para acelerar el desarrollo y despliegue de aplicaciones.",
    features: ["Docker", "Kubernetes", "Jenkins"]
  },
  {
    icon: Headphones,
    title: "Soporte Tecnico",
    description: "Mesa de ayuda y soporte remoto con tiempos de respuesta garantizados.",
    features: ["24/7", "SLA", "Multicanal"]
  }
]

export function ServiciosSection() {
  return (
    <section
      id="servicios"
      className="relative py-24 bg-[#1a2332]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(242, 101, 34, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(242, 101, 34, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-[#F26522]">Servicios</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Soluciones integrales de tecnologia para impulsar el crecimiento de tu empresa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 bg-[#1e2a3d] border border-[#2d3d52] hover:border-[#F26522] transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 bg-[#243246] border border-[#2d3d52] group-hover:border-[#F26522]/50 transition-colors">
                  <service.icon className="h-8 w-8 text-[#F26522]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#F26522] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-xs px-2 py-1 bg-[#243246] text-gray-300 border border-[#2d3d52]"
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
                  className="inline-flex items-center text-sm text-[#F26522] hover:text-[#F26522]/80 transition-colors"
                >
                  Saber mas
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#F26522] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
