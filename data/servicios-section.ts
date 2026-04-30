import { Cloud, Shield, Server, Database, Code, Headphones } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

export type ServicioItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
  features: string[]
}

export const serviciosSectionData: ServicioItem[] = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Migracion y gestion de infraestructura en AWS, Azure y Google Cloud. Optimizamos costos y rendimiento.",
    features: ["MultiCloud", "Hibrido", "Optimizacion"],
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description: "Proteccion integral de tu infraestructura con las mejores practicas y herramientas del mercado.",
    features: ["Firewalls", "Monitoreo 24/7", "Compliance"],
  },
  {
    icon: Server,
    title: "Infraestructura TI",
    description: "Diseno, implementacion y mantenimiento de infraestructura on-premise y virtualizada.",
    features: ["VMware", "Hyper-V", "Contenedores"],
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description: "Administracion y optimizacion de bases de datos SQL y NoSQL para alto rendimiento.",
    features: ["SQL Server", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Code,
    title: "DevOps",
    description: "Automatizacion de procesos CI/CD para acelerar el desarrollo y despliegue de aplicaciones.",
    features: ["Docker", "Kubernetes", "Jenkins"],
  },
  {
    icon: Headphones,
    title: "Soporte Tecnico",
    description: "Mesa de ayuda y soporte remoto con tiempos de respuesta garantizados.",
    features: ["24/7", "SLA", "Multicanal"],
  },
]

export default serviciosSectionData
