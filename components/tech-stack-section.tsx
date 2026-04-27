"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const technologies = [
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

function TypewriterText({ text, isActive }: { text: string; isActive: boolean }) {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (!isActive) {
      setDisplayText("")
      return
    }

    let index = 0
    setDisplayText("")
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 15)

    return () => clearInterval(interval)
  }, [text, isActive])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span>
      {displayText}
      {isActive && <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-primary`}>|</span>}
    </span>
  )
}

export function TechStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [selectedTech, setSelectedTech] = useState<typeof technologies[0] | null>(null)

  const handleHover = (techId: string | null) => {
    setHoveredTech(techId)
    if (techId) {
      const tech = technologies.find(t => t.id === techId)
      setSelectedTech(tech || null)
    } else {
      setSelectedTech(null)
    }
  }

  return (
    <section className="relative py-24 px-6 overflow-hidden" id="tecnologias">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-black/50 to-background" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs tracking-widest text-primary mb-4 block">
            [TECH.STACK // CORE_SYSTEMS]
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nucleo Tecnologico
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-[var(--font-inter)]">
            Dominamos las plataformas líderes del mercado para construir 
            arquitecturas robustas y escalables.
          </p>
        </motion.div>

        {/* Interactive Tech Wheel */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Wheel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]"
          >
            {/* Circuit board pattern background */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="-200 -200 400 400"
            >
              {/* Grid lines */}
              <g className="opacity-10">
                <line x1="-200" y1="0" x2="200" y2="0" stroke="currentColor" strokeWidth="0.5" />
                <line x1="0" y1="-200" x2="0" y2="200" stroke="currentColor" strokeWidth="0.5" />
                <line x1="-200" y1="-100" x2="200" y2="-100" stroke="currentColor" strokeWidth="0.5" />
                <line x1="-200" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5" />
                <line x1="-100" y1="-200" x2="-100" y2="200" stroke="currentColor" strokeWidth="0.5" />
                <line x1="100" y1="-200" x2="100" y2="200" stroke="currentColor" strokeWidth="0.5" />
              </g>

              {/* Connection lines - 45/90 degree angles like circuit board */}
              {technologies.map((tech) => {
                const isHovered = hoveredTech === tech.id
                const isDimmed = hoveredTech && hoveredTech !== tech.id
                
                // Create path with 90-degree turns
                const midX = tech.position.x / 2
                const midY = tech.position.y / 2
                
                return (
                  <g key={`line-${tech.id}`}>
                    <motion.path
                      d={`M 0 0 L ${tech.position.x === 0 ? 0 : midX} 0 L ${tech.position.x === 0 ? 0 : midX} ${tech.position.y} L ${tech.position.x} ${tech.position.y}`}
                      fill="none"
                      stroke={isHovered ? "#F97316" : "currentColor"}
                      strokeWidth={isHovered ? 2 : 1}
                      className="transition-all duration-300"
                      style={{
                        opacity: isDimmed ? 0.15 : isHovered ? 1 : 0.3,
                      }}
                    />
                    {/* Animated pulse on hover */}
                    {isHovered && (
                      <motion.circle
                        r="4"
                        fill="#F97316"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          offsetDistance: ["0%", "100%"],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{
                          offsetPath: `path("M 0 0 L ${tech.position.x === 0 ? 0 : midX} 0 L ${tech.position.x === 0 ? 0 : midX} ${tech.position.y} L ${tech.position.x} ${tech.position.y}")`,
                        }}
                      />
                    )}
                  </g>
                )
              })}
            </svg>

            {/* Central Core Node */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 bg-black border-2 border-border flex items-center justify-center z-10"
              animate={{
                borderColor: hoveredTech ? "#F97316" : "var(--border)",
                boxShadow: hoveredTech 
                  ? "0 0 30px rgba(249, 115, 22, 0.4)" 
                  : "0 0 0px rgba(249, 115, 22, 0)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <div className="font-mono text-[8px] text-muted-foreground mb-1">[CORE]</div>
                <div className="text-xs md:text-sm font-bold text-foreground">Core</div>
                <div className="text-xs md:text-sm font-bold text-primary">Tecnologico</div>
              </div>
            </motion.div>

            {/* Technology Nodes */}
            {technologies.map((tech, index) => {
              const isHovered = hoveredTech === tech.id
              const isDimmed = hoveredTech && hoveredTech !== tech.id

              return (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { 
                    opacity: isDimmed ? 0.3 : 1, 
                    scale: 1,
                    x: tech.position.x,
                    y: tech.position.y,
                  } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  onMouseEnter={() => handleHover(tech.id)}
                  onMouseLeave={() => handleHover(null)}
                >
                  <motion.div
                    className={`w-16 h-16 md:w-20 md:h-20 bg-black/80 backdrop-blur-sm border flex items-center justify-center transition-all duration-200 ${
                      isHovered 
                        ? 'border-primary shadow-[0_0_20px_rgba(249,115,22,0.5)]' 
                        : 'border-border'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className={`font-mono text-xs md:text-sm font-bold transition-colors duration-200 ${
                      isHovered ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Info Panel */}
          <div className="w-full lg:w-96 min-h-[200px]">
            <AnimatePresence mode="wait">
              {selectedTech ? (
                <motion.div
                  key={selectedTech.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-black/60 backdrop-blur-md border border-primary p-6 relative"
                >
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono text-xs text-primary">
                      SYSTEM.DIAGNOSTIC // {selectedTech.name.toUpperCase()}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {selectedTech.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                    <span className="text-primary/70">{"> "}</span>
                    <TypewriterText text={selectedTech.description} isActive={true} />
                  </p>

                  {/* Corner decorations */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-black/30 backdrop-blur-sm border border-border p-6 text-center"
                >
                  <div className="font-mono text-xs text-muted-foreground mb-2">
                    [AWAITING_INPUT]
                  </div>
                  <p className="text-sm text-muted-foreground font-[var(--font-inter)]">
                    Pasa el cursor sobre una tecnologia para ver los detalles del sistema.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground/30">
            <span>+ + +</span>
            <span className="text-primary/30">[STACK.CERTIFIED]</span>
            <span>+ + +</span>
          </div>
        </div>
      </div>
    </section>
  )
}
