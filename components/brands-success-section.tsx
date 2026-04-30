"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { brandsData, type Brand } from "@/data/brands"
import BrandCard from "@/components/brand-card"

export function BrandsSuccessSection() {
  const [activeBrand, setActiveBrand] = useState(brandsData[0])

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 border-x border-slate-800/30">
      
      {/* Header de la Sección */}
      <div className="mb-8 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-orange-500 mb-2 md:mb-4 tracking-widest text-xs md:text-sm uppercase"
        >
          [SOCIOS // CASOS_ÉXITO]
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-space font-bold text-white uppercase"
        >
          Marcas con las que trabajamos
        </motion.h2>
      </div>

      {/* Zona Superior: Grid de Logos Holográficos (SIN EFECTO BLANCO) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 lg:gap-8 mb-8 md:mb-12">
        {brandsData.map((brand) => (
          <BrandCard
            key={brand.id}
            brand={brand}
            isActive={activeBrand.id === brand.id}
            onActivate={(b) => setActiveBrand(b)}
          />
        ))}
      </div>

      {/* Zona Inferior: Terminal de Casos de Éxito */}
      <div className="relative w-full border border-slate-800 bg-black/40 backdrop-blur-md p-6 md:p-8 lg:p-12 min-h-[300px] md:min-h-[250px] flex flex-col overflow-hidden rounded-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0"></div>
        <div className="absolute top-0 left-0 w-3 h-3 md:w-4 md:h-4 border-t border-l border-slate-500"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 border-b border-r border-slate-500"></div>

        <div className="flex items-center gap-2 mb-4 md:mb-6 border-b border-slate-800/50 pb-3 md:pb-4">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-500 animate-pulse"></div>
          <span className="font-mono text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">
            [SIST.LOG // CASO_ESTUDIO_CARGADO]
          </span>
        </div>

        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBrand.id}
              initial={{ opacity: 0, y: 15, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(2px)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col h-full"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3 md:mb-4">
                <span className="font-mono text-orange-500 text-xs md:text-sm">
                  &gt; SOCIO_OBJETIVO:
                </span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-space font-bold text-white">
                  {activeBrand.name}
                </h3>
              </div>
              
              <div className="relative pl-4 md:pl-6 border-l border-slate-800 mt-2">
                <div className="absolute left-[-1px] top-0 w-[2px] h-6 md:h-8 bg-orange-500"></div>
                <p className="font-inter text-slate-300 text-sm md:text-lg leading-relaxed">
                  {activeBrand.successCase}
                </p>
              </div>

              <div className="mt-6 md:mt-8 font-mono text-[8px] md:text-[10px] text-slate-600 uppercase">
                <span className="text-orange-500/70">DATOS_VERIFICADOS</span> // FIN_DE_REGISTRO
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}