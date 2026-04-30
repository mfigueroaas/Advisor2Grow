import { Server, Cloud, Shield, Rocket, Network, Database } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

export type ServiceCore = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
  code: string
}

export const servicesCore: ServiceCore[] = [
  {
    icon: Server,
    title: "Infraestructura TI",
    description:
      "Diseño, implementación y gestión de infraestructura física y virtual. Servidores, redes y centros de datos optimizados.",
    code: "INF.001",
  },
  {
    icon: Cloud,
    title: "Soluciones Cloud",
    description:
      "Migración y arquitectura MultiCloud con AWS, Azure y Google Cloud. Optimización de costos y alta disponibilidad.",
    code: "CLD.002",
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description:
      "Protección integral de activos digitales. Auditorías, pentesting, respuesta a incidentes y cumplimiento normativo.",
    code: "SEC.003",
  },
  {
    icon: Rocket,
    title: "DevOps & Automatización",
    description:
      "Pipelines CI/CD, infraestructura como código y contenedorización. Acelera tus despliegues con prácticas modernas.",
    code: "DEV.004",
  },
  {
    icon: Network,
    title: "Redes Empresariales",
    description:
      "Diseño de topologías, SD-WAN, VPNs corporativas y conectividad de alta capacidad para operaciones críticas.",
    code: "NET.005",
  },
  {
    icon: Database,
    title: "Gestión de Datos",
    description:
      "Bases de datos, almacenamiento empresarial, backup y recuperación ante desastres. Tus datos siempre disponibles.",
    code: "DAT.006",
  },
]

export default servicesCore
