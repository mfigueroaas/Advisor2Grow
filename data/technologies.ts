import { Server, Cloud, Database, Shield, FileCheck } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

export type Technology = {
  id: string
  brand: string
  subtitle: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  angle: number
}

export const technologies: Technology[] = [
  {
    id: "vmware-proxmox",
    brand: "VMware & Proxmox",
    subtitle: "Virtualización y Consolidación",
    description: "Diseñamos clústeres de alta disponibilidad y migramos infraestructuras físicas a entornos virtuales eficientes, escalables y fáciles de administrar.",
    icon: Server,
    angle: 180,
  },
  {
    id: "aws-azure-gcp",
    brand: "AWS, Azure & GCP",
    subtitle: "Arquitecturas MultiCloud",
    description: "Despliegue y orquestación de cargas de trabajo en las nubes públicas líderes. Optimizamos costos y garantizamos resiliencia global.",
    icon: Cloud,
    angle: 234,
  },
  {
    id: "veeam-acronis",
    brand: "Veeam & Acronis",
    subtitle: "Respaldo y Disaster Recovery",
    description: "Protección integral de datos críticos. Implementamos políticas de backup inmutables y planes de recuperación rápida ante desastres o ransomware.",
    icon: Database,
    angle: 288,
  },
  {
    id: "marco-nist",
    brand: "Marco NIST",
    subtitle: "Ciberseguridad Estratégica",
    description: "Alineamos su infraestructura tecnológica con el estándar internacional NIST para identificar, proteger, detectar, responder y recuperar activos críticos.",
    icon: Shield,
    angle: 342,
  },
  {
    id: "iso-20000-27000",
    brand: "ISO 20.000 / 27.000",
    subtitle: "Cumplimiento Normativo",
    description: "Gestión de servicios TI y seguridad de la información bajo normativas globales, asegurando calidad, confidencialidad y mejora continua.",
    icon: FileCheck,
    angle: 36,
  },
]

export default technologies
