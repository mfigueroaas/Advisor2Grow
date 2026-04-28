"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Server, Cloud, Database, Shield, FileCheck } from "lucide-react"

const technologies = [
  {
    id: "vmware-proxmox",
    brand: "VMware & Proxmox",
    subtitle: "Virtualización y Consolidación",
    description: "Diseñamos clústeres de alta disponibilidad y migramos infraestructuras físicas a entornos virtuales eficientes, escalables y fáciles de administrar.",
    icon: Server,
    angle: 180, // Left
  },
  {
    id: "aws-azure-gcp",
    brand: "AWS, Azure & GCP",
    subtitle: "Arquitecturas MultiCloud",
    description: "Despliegue y orquestación de cargas de trabajo en las nubes públicas líderes. Optimizamos costos y garantizamos resiliencia global.",
    icon: Cloud,
    angle: 234, // Top Left
  },
  {
    id: "veeam-acronis",
    brand: "Veeam & Acronis",
    subtitle: "Respaldo y Disaster Recovery",
    description: "Protección integral de datos críticos. Implementamos políticas de backup inmutables y planes de recuperación rápida ante desastres o ransomware.",
    icon: Database,
    angle: 288, // Top
  },
  {
    id: "marco-nist",
    brand: "Marco NIST",
    subtitle: "Ciberseguridad Estratégica",
    description: "Alineamos su infraestructura tecnológica con el estándar internacional NIST para identificar, proteger, detectar, responder y recuperar activos críticos.",
    icon: Shield,
    angle: 342, // Top Right
  },
  {
    id: "iso-20000-27000",
    brand: "ISO 20.000 / 27.000",
    subtitle: "Cumplimiento Normativo",
    description: "Gestión de servicios TI y seguridad de la información bajo normativas globales, asegurando calidad, confidencialidad y mejora continua.",
    icon: FileCheck,
    angle: 36, // Right
  }
]

export function TechStackHub() {
  const [activeTech, setActiveTech] = useState(technologies[0])

  return (
    <div className="relative w-full max-w-7xl mx-auto py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16 lg:gap-8 px-4 md:px-0">
      
      {/* --- VERSIÓN MÓVIL: Grid de 2 Columnas --- */}
      <div className="w-full grid grid-cols-2 gap-4 lg:hidden mb-8">
        {technologies.map((tech) => {
          const isActive = activeTech.id === tech.id
          const Icon = tech.icon

          return (
            <button
              key={`mobile-${tech.id}`}
              onClick={() => setActiveTech(tech)}
              className={`relative flex flex-col items-center justify-center p-4 border transition-all duration-300
                ${isActive 
                  ? 'bg-slate-900 border-orange-500 shadow-[0_0_15px_rgba(242,101,34,0.3)] z-10' 
                  : 'bg-slate-950/50 border-slate-800 opacity-70 hover:opacity-100 hover:border-slate-600'
                }
              `}
            >
              <Icon 
                strokeWidth={isActive ? 2 : 1.5}
                className={`w-8 h-8 mb-3 transition-colors duration-300 ${
                  isActive ? 'text-orange-500' : 'text-slate-400'
                }`} 
              />
              <span className={`font-mono text-[10px] text-center uppercase tracking-wider ${
                isActive ? 'text-orange-500' : 'text-slate-500'
              }`}>
                {tech.brand}
              </span>
            </button>
          )
        })}
      </div>

      {/* --- VERSIÓN DESKTOP: Rueda Radial --- */}
      <div className="hidden lg:flex relative w-full lg:w-1/2 h-[500px] items-center justify-center">
        {/* Anillos decorativos de fondo */}
        <div className="absolute inset-0 m-auto w-[380px] h-[380px] rounded-full border border-slate-800/40 pointer-events-none"></div>
        <div className="absolute inset-0 m-auto w-[260px] h-[260px] rounded-full border border-slate-700/20 border-dashed pointer-events-none animate-[spin_60s_linear_infinite]"></div>
        
        {/* Centro de la rueda */}
        <div className="absolute inset-0 m-auto w-24 h-24 bg-slate-900 border border-slate-700 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="w-16 h-16 border border-orange-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
            <div className="w-8 h-8 bg-orange-500/10 border border-orange-500"></div>
          </div>
          <span className="absolute font-mono text-[10px] text-orange-500 text-center leading-tight">
            NÚCLEO<br/>CENTRAL
          </span>
        </div>

        {/* Línea de conexión central al nodo activo */}
        {technologies.map((tech, index) => {
          const isActive = activeTech.id === tech.id
          if (!isActive) return null

          const angle = -90 + (360 / technologies.length) * index
          const radius = 190 // Radio exacto hasta el centro del nodo

          return (
            <motion.div
              key={`line-${tech.id}`}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              className="absolute left-1/2 h-[2px] bg-orange-500 origin-left pointer-events-none z-0 shadow-[0_0_15px_rgba(249,115,22,1)]"
              style={{
                top: 'calc(50% - 1px)',
                width: `${radius}px`,
                transform: `rotate(${angle}deg)`,
              }}
            />
          )
        })}

        {/* Nodos de Marcas */}
        {technologies.map((tech, index) => {
          const isActive = activeTech.id === tech.id
          
          // Calcular posición radial simétrica (360 grados)
          // Empezamos arriba (-90 grados)
          const angle = -90 + (360 / technologies.length) * index
          const rad = (angle * Math.PI) / 180
          const radius = 190 // Radio de la órbita
          const x = (Math.cos(rad) * radius).toFixed(2)
          const y = (Math.sin(rad) * radius).toFixed(2)

          const Icon = tech.icon

          return (
            <div 
              key={`desktop-${tech.id}`}
              className="absolute top-1/2 left-1/2 z-20"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              {/* Botón del Nodo */}
              <button
                onClick={() => setActiveTech(tech)}
                className={`relative w-20 h-20 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm border transition-all duration-300 group cursor-crosshair
                  ${isActive 
                    ? 'border-orange-500 shadow-[0_0_20px_rgba(242,101,34,0.4)] scale-110 z-30' 
                    : 'border-slate-700 opacity-60 hover:opacity-100 hover:border-slate-500 hover:scale-105'
                  }
                  rounded-none
                `}
                aria-label={`Seleccionar ${tech.brand}`}
              >
                <Icon 
                  strokeWidth={isActive ? 2 : 1.5}
                  className={`w-10 h-10 transition-colors duration-300 ${
                    isActive ? 'text-orange-500' : 'text-slate-400 group-hover:text-slate-200'
                  }`} 
                />
              </button>

              {/* Etiqueta flotante */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap font-mono text-[11px] uppercase transition-all duration-300 pointer-events-none px-2 py-1 bg-slate-950 border border-slate-800
                ${isActive ? 'text-orange-500 border-orange-500/50 opacity-100 translate-y-0' : 'text-slate-500 opacity-0 -translate-y-2'}
              `}>
                [{tech.brand}]
              </div>
            </div>
          )
        })}
      </div>

      {/* Lado Derecho: Panel de Diagnóstico (HUD) */}
      <div className="w-full lg:w-1/2 relative">
        {/* Fondo del Panel */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-slate-800 pointer-events-none"></div>
        
        {/* Decoraciones de esquina */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500"></div>

        <div className="relative p-6 md:p-8 lg:p-12 min-h-[350px] md:min-h-[400px] flex flex-col">
          {/* Header del Panel */}
          <div className="flex items-center gap-3 mb-6 md:mb-8 border-b border-slate-800 pb-4">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-orange-500 animate-pulse"></div>
            <div className="font-mono text-[10px] md:text-xs text-orange-500 tracking-widest uppercase">
              [SIST.DATOS // DETALLES_TEC]
            </div>
          </div>

          {/* Contenido Dinámico */}
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech.id}
                initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col h-full justify-center"
              >
                <div className="font-mono text-slate-500 text-xs md:text-sm mb-2 md:mb-4 uppercase">
                  &gt; SECTOR_IDENTIFICADO
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-space font-bold text-white mb-2 leading-tight">
                  {activeTech.brand}
                </h3>
                <h4 className="text-base md:text-xl font-space text-orange-500 mb-4 md:mb-8 uppercase tracking-wide">
                  // {activeTech.subtitle}
                </h4>
                
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-800"></div>
                  <div className="absolute left-0 top-0 w-1 h-1/3 bg-orange-500"></div>
                  <p className="font-inter text-slate-300 text-sm md:text-lg leading-relaxed pl-4 md:pl-6">
                    {activeTech.description}
                  </p>
                </div>
                
                {/* HUD Footer status */}
                <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-slate-800/50 flex justify-between items-center font-mono text-[10px] md:text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline">ESTADO_MÓDULO:</span>
                    <span className="sm:hidden">ESTADO:</span>
                    <span className="text-orange-500">EN_LÍNEA</span>
                  </div>
                  <div>TASA_SINC: 99.9%</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

    </div>
  )
}