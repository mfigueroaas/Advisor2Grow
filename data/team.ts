export type TeamMember = {
  name: string
  role: string
  description: string
  linkedin: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Nombre Apellido",
    role: "Arquitecto Cloud",
    description: "Mas de 15 anos de experiencia en arquitecturas cloud empresariales. Especialista en AWS, Azure y soluciones hibridas.",
    linkedin: "#",
  },
  {
    name: "Nombre Apellido",
    role: "Director de Operaciones",
    description: "Experto en gestion de infraestructura critica y operaciones TI. Certificado en ITIL y PMP.",
    linkedin: "#",
  },
  {
    name: "Nombre Apellido",
    role: "Especialista en Seguridad",
    description: "Lider en ciberseguridad con certificaciones CISSP y CEH. Protegiendo empresas por mas de 10 anos.",
    linkedin: "#",
  },
  {
    name: "Nombre Apellido",
    role: "Consultor Senior DevOps",
    description: "Automatizacion y CI/CD son su pasion. Implementando pipelines eficientes en multiples industrias.",
    linkedin: "#",
  },
]

export default teamMembers
