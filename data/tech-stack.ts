export type TechNode = {
  id: string
  name: string
  description: string
  position: { x: number; y: number }
}

export const techStackNodes: TechNode[] = [
  {
    id: "aws",
    name: "AWS",
    description: "Amazon Web Services: Infraestructura cloud líder mundial. EC2, S3, Lambda, RDS y más de 200 servicios para cualquier carga de trabajo.",
    position: { x: 0, y: -140 },
  },
  {
    id: "azure",
    name: "Azure",
    description: "Microsoft Azure: Integración nativa con ecosistema Microsoft. Virtual Machines, Azure AD, DevOps y servicios enterprise.",
    position: { x: 120, y: -70 },
  },
  {
    id: "gcp",
    name: "GCP",
    description: "Google Cloud Platform: BigQuery, Kubernetes Engine, AI/ML services. La potencia de la infraestructura de Google.",
    position: { x: 120, y: 70 },
  },
  {
    id: "vmware",
    name: "VMware",
    description: "Virtualización empresarial: vSphere, NSX, vSAN. Consolidación de servidores y gestión de centros de datos.",
    position: { x: 0, y: 140 },
  },
  {
    id: "proxmox",
    name: "Proxmox",
    description: "Administración de clusters, hipervisores y orquestación de contenedores en alta disponibilidad. Open source y enterprise-ready.",
    position: { x: -120, y: 70 },
  },
  {
    id: "lxc",
    name: "LXC",
    description: "Linux Containers: Virtualización a nivel de sistema operativo. Eficiencia máxima para microservicios y entornos de desarrollo.",
    position: { x: -120, y: -70 },
  },
]

export default techStackNodes
