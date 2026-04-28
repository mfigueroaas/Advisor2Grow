"use client"

import { motion } from "framer-motion"

export default function ServiciosPage() {
  const servicios = [
    {
      id: "01",
      title: "Servicios de infraestructura TI",
      desc: "En Advisor2Grow diseñamos, implementamos y administramos infraestructuras tecnológicas robustas, seguras y preparadas para crecer, combinando experiencia técnica avanzada con una visión clara de continuidad operativa. Nuestra propuesta abarca desde la modernización de centros de datos, arquitecturas convergentes o hiperconvergentes, hasta el aprovisionamiento de hardware, redes, almacenamiento y el software requerido. Evaluamos su estado actual, definimos rutas de renovación y aseguramos que cada componente esté optimizado."
    },
    {
      id: "02",
      title: "Servicios MultiCloud",
      desc: "Para empresas que buscan aprovechar al máximo las ventajas de la nube sin poner todos sus recursos en un solo proveedor, ofrecemos Servicios MultiCloud. Le ayudamos a seleccionar, desplegar y operar cargas de trabajo en AWS, Azure, GCP, VMware, Proxmox u otras. Una estrategia que contempla gobernanza, control de costos, migración segura, integración de datos y alta disponibilidad, impulsando la innovación y maximizando el retorno."
    },
    {
      id: "03",
      title: "Servicios de continuidad operativa",
      desc: "En un contexto donde Chile es uno de los países más atacados de la región, asegurar tu continuidad es una obligación estratégica. Implementamos una estrategia de resiliencia que incluye análisis de impacto, planes de contingencia, respaldo, arquitecturas redundantes y alta disponibilidad, integrando normativas como NIST, ISO 20.000 e ISO 27.000. Tu empresa seguirá operando con mínima afectación ante cualquier evento."
    },
    {
      id: "04",
      title: "Servicios gestionados",
      desc: "Liberamos a su equipo de TI del peso de la operación diaria. Actuamos como su socio tecnológico integral: gestionamos sistemas, redes, backups y seguridad de forma proactiva. Ofrecemos costos previsibles, mejoras constantes y un único punto de contacto para incidencias, haciendo que su TI pase de ser una carga a un servicio confiable."
    }
  ]

  return (
    <main className="flex-1 flex flex-col pt-16 md:pt-20 relative bg-slate-950 overflow-hidden">
      {/* Background Effect: Grid tenue */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Header */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 border-x border-slate-800/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-orange-500 mb-4 md:mb-6 tracking-widest text-xs md:text-sm uppercase"
        >
          [DIR // SERVICES]
        </motion.div>
        
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-space font-bold text-white mb-6 md:mb-8 leading-tight"
          >
            Nuestros Servicios: Diseñados para fortalecer, proteger y optimizar tu entorno TI.
          </motion.h1>
        </div>
      </section>

      {/* Grid de Soluciones */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-32 border-x border-slate-800/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {servicios.map((srv, i) => (
            <motion.div 
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative border border-slate-800 bg-slate-900/40 p-6 md:p-8 flex flex-col hover:bg-slate-900 transition-colors duration-0 cursor-crosshair h-full"
            >
              {/* Imagen Técnica Placeholder */}
              <div className="w-full h-32 md:h-48 bg-slate-950 border border-slate-800 mb-6 md:mb-8 flex items-center justify-center relative overflow-hidden group-hover:border-slate-700 transition-colors duration-0">
                {/* Patrón de líneas diagonales para la imagen */}
                <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#white_11px)]"></div>
                <span className="font-mono text-slate-600 text-xs md:text-sm z-10 bg-slate-950 px-2">
                  [ESPACIO IMAGEN TÉCNICA // {srv.id}]
                </span>
              </div>

              {/* Contenido */}
              <div className="flex-1 flex flex-col">
                <div className="font-mono text-slate-500 text-[10px] md:text-xs mb-3 md:mb-4 uppercase">
                  SVC_MODULE_{srv.id}
                </div>
                <h2 className="text-xl md:text-2xl font-space font-bold text-white mb-4 md:mb-6 uppercase group-hover:text-orange-500 transition-colors duration-0">
                  {srv.title}
                </h2>
                <p className="text-slate-400 font-inter text-sm md:text-base leading-relaxed mb-8 md:mb-12 flex-1">
                  {srv.desc}
                </p>

                {/* Footer de Tarjeta (Estado Seco) */}
                <div className="pt-4 md:pt-6 border-t border-slate-800 flex items-center justify-between mt-auto">
                  <div className="font-mono text-[10px] md:text-xs text-slate-600 group-hover:text-orange-500/70 transition-colors duration-0">
                    ESTADO: <span className="text-slate-400 group-hover:text-orange-500">EN_LÍNEA</span>
                  </div>
                  
                  {/* Flecha Naranja estilo Terminal que aparece en hover */}
                  <div className="font-mono text-orange-500 text-xs md:text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-0 flex items-center gap-1 md:gap-2">
                    EXPLORAR <span className="animate-pulse">_&gt;</span>
                  </div>
                </div>
              </div>

              {/* Borde Naranja Seco (Sin animación de escala) */}
              <div className="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-0 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  )
}
