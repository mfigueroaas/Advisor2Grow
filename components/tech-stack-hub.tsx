"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Server, Cloud, Database, Shield, FileCheck } from "lucide-react"

import { technologies as technologiesData } from "@/data/technologies"

const technologies = technologiesData

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
              className={`relative flex flex-col items-center justify-center p-4 border transition-all duration-300 rounded-xl shadow-sm
                ${isActive 
                  ? 'bg-surface border-brand shadow-md z-10' 
                  : 'bg-surface border-border opacity-90 hover:opacity-100 hover:border-brand'
                }
              `}
            >
              <Icon 
                strokeWidth={isActive ? 2 : 1.5}
                className={`w-8 h-8 mb-3 transition-colors duration-300 ${
                  isActive ? 'text-brand' : 'text-faint-foreground'
                }`} 
              />
              <span className={`font-sans text-[10px] text-center uppercase tracking-wider ${
                isActive ? 'text-brand' : 'text-muted-foreground'
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
        <div className="absolute inset-0 m-auto w-[380px] h-[380px] rounded-full border border-border pointer-events-none"></div>
        <div className="absolute inset-0 m-auto w-[260px] h-[260px] rounded-full border border-border border-dashed pointer-events-none animate-[spin_60s_linear_infinite]"></div>
        
        {/* Centro de la rueda */}
        <div className="absolute inset-0 m-auto w-24 h-24 bg-surface border border-border flex items-center justify-center z-10 shadow-sm">
          <div className="w-16 h-16 border border-brand/30 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
            <div className="w-8 h-8 bg-brand/10 border border-brand"></div>
          </div>
          <span className="absolute font-sans text-[10px] text-brand text-center leading-tight font-semibold">
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
              className="absolute left-1/2 h-[2px] bg-brand origin-left pointer-events-none z-0 brand-glow"
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
                className={`relative w-20 h-20 flex items-center justify-center bg-white border transition-all duration-300 group cursor-pointer
                  ${isActive 
                    ? 'border-brand shadow-md scale-110 z-30' 
                    : 'border-border opacity-80 hover:opacity-100 hover:border-brand hover:scale-105'
                  }
                  rounded-none
                `}
                aria-label={`Seleccionar ${tech.brand}`}
              >
                <Icon 
                  strokeWidth={isActive ? 2 : 1.5}
                  className={`w-10 h-10 transition-colors duration-300 ${
                    isActive ? 'text-brand' : 'text-faint-foreground group-hover:text-brand'
                  }`} 
                />
              </button>

              {/* Etiqueta flotante */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap font-sans text-[11px] uppercase transition-all duration-300 pointer-events-none px-2 py-1 bg-surface border border-border rounded-md shadow-sm
                ${isActive ? 'text-brand border-brand/50 opacity-100 translate-y-0' : 'text-faint-foreground opacity-0 -translate-y-2'}
              `}>
                {tech.brand}
              </div>
            </div>
          )
        })}
      </div>

      {/* Lado Derecho: Panel de Diagnóstico (HUD) */}
      <div className="w-full lg:w-1/2 relative">
        {/* Fondo del Panel */}
        <div className="absolute inset-0 bg-surface border border-border pointer-events-none shadow-sm"></div>
        
        {/* Decoraciones de esquina */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand"></div>

        <div className="relative p-6 md:p-8 lg:p-12 min-h-[350px] md:min-h-[400px] flex flex-col">
          {/* Header del Panel */}
          <div className="flex items-center gap-3 mb-6 md:mb-8 border-b border-border pb-4">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-brand animate-pulse"></div>
            <div className="font-sans text-[10px] md:text-xs text-brand tracking-widest uppercase font-semibold">
              Detalles técnicos
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
                <div className="font-sans text-faint-foreground text-xs md:text-sm mb-2 md:mb-4 uppercase">
                  &gt; SECTOR_IDENTIFICADO
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground mb-2 leading-tight">
                  {activeTech.brand}
                </h3>
                <h4 className="text-base md:text-xl font-sans text-brand mb-4 md:mb-8 uppercase tracking-wide font-semibold">
                  // {activeTech.subtitle}
                </h4>
                
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-strong"></div>
                  <div className="absolute left-0 top-0 w-1 h-1/3 bg-brand"></div>
                  <p className="font-inter text-muted-foreground text-sm md:text-lg leading-relaxed pl-4 md:pl-6">
                    {activeTech.description}
                  </p>
                </div>
                
                {/* HUD Footer status */}
                <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-border flex justify-between items-center font-sans text-[10px] md:text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline">Estado del módulo:</span>
                    <span className="sm:hidden">Estado:</span>
                    <span className="text-brand">Operativo</span>
                  </div>
                  <div>Sincronización estable</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

    </div>
  )
}