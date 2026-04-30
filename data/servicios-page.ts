export type ServicioPageItem = {
  id: string
  title: string
  desc: string
}

export const serviciosPage: ServicioPageItem[] = [
  {
    id: "01",
    title: "Servicios de infraestructura TI",
    desc: "En Advisor2Grow diseñamos, implementamos y administramos infraestructuras tecnológicas robustas, seguras y preparadas para crecer, combinando experiencia técnica avanzada con una visión clara de continuidad operativa. Nuestra propuesta abarca desde la modernización de centros de datos, arquitecturas convergentes o hiperconvergentes, hasta el aprovisionamiento de hardware, redes, almacenamiento y el software requerido. Evaluamos su estado actual, definimos rutas de renovación y aseguramos que cada componente esté optimizado.",
  },
  {
    id: "02",
    title: "Servicios MultiCloud",
    desc: "Para empresas que buscan aprovechar al máximo las ventajas de la nube sin poner todos sus recursos en un solo proveedor, ofrecemos Servicios MultiCloud. Le ayudamos a seleccionar, desplegar y operar cargas de trabajo en AWS, Azure, GCP, VMware, Proxmox u otras. Una estrategia que contempla gobernanza, control de costos, migración segura, integración de datos y alta disponibilidad, impulsando la innovación y maximizando el retorno.",
  },
  {
    id: "03",
    title: "Servicios de continuidad operativa",
    desc: "En un contexto donde Chile es uno de los países más atacados de la región, asegurar tu continuidad es una obligación estratégica. Implementamos una estrategia de resiliencia que incluye análisis de impacto, planes de contingencia, respaldo, arquitecturas redundantes y alta disponibilidad, integrando normativas como NIST, ISO 20.000 e ISO 27.000. Tu empresa seguirá operando con mínima afectación ante cualquier evento.",
  },
  {
    id: "04",
    title: "Servicios gestionados",
    desc: "Liberamos a su equipo de TI del peso de la operación diaria. Actuamos como su socio tecnológico integral: gestionamos sistemas, redes, backups y seguridad de forma proactiva. Ofrecemos costos previsibles, mejoras constantes y un único punto de contacto para incidencias, haciendo que su TI pase de ser una carga a un servicio confiable.",
  },
]

export default serviciosPage
