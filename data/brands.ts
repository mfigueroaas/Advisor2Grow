export type Brand = {
  id: string
  name: string
  successCase: string
  image: string
}

export const brandsData: Brand[] = [
  {
    id: "aws",
    name: "AWS (Amazon Web Services)",
    successCase:
      "Migración de infraestructura legacy corporativa hacia una arquitectura nativa en la nube, reduciendo los costos operativos en un 35% y logrando escalabilidad automática ante picos de demanda.",
    image: "/Imagenes/Logos/aws.png",
  },
  {
    id: "vmware",
    name: "VMware",
    successCase:
      "Consolidación de 50 servidores físicos en un clúster de alta disponibilidad (HA). Logramos Zero Downtime durante el horario operativo y redujimos el consumo energético del Data Center.",
    image: "/Imagenes/Logos/vmware.png",
  },
  {
    id: "veeam",
    name: "Veeam",
    successCase:
      "Implementación de políticas de respaldo inmutables. Recuperación exitosa y total de la infraestructura de un cliente crítico tras un intento de ataque de ransomware en menos de 4 horas.",
    image: "/Imagenes/Logos/veeam.png",
  },
  {
    id: "acronis",
    name: "Acronis",
    successCase:
      "Protección integral de datos y recuperación rápida ante desastres, garantizando la continuidad operativa y minimizando el impacto de ciberamenazas.",
    image: "/Imagenes/Logos/acronis.png",
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    successCase:
      "Integración de entornos híbridos seguros mediante Azure Active Directory y VPN Site-to-Site, permitiendo el teletrabajo seguro para más de 500 colaboradores.",
    image: "/Imagenes/Logos/azure.png",
  },
]

export default brandsData
