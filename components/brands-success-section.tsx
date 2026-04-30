"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { brandsData, type Brand } from "@/data/brands"
import BrandCard from "@/components/brand-card"

export function BrandsSuccessSection() {
  const [activeBrand, setActiveBrand] = useState(brandsData[0])

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="mb-8 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground uppercase"
        >
          Marcas con las que trabajamos
        </motion.h2>
      </div>

      {/* Zona Superior: Grid de Logos */}
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

      {/* Zona Inferior: Casos de Éxito */}
      <div className="relative w-full bg-surface border border-border shadow-sm p-6 md:p-8 lg:p-12 min-h-[300px] md:min-h-[250px] flex flex-col overflow-hidden rounded-xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand/0 via-brand/20 to-brand/0"></div>

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
                <span className="font-sans text-brand text-xs md:text-sm font-semibold uppercase tracking-wider">
                  Socio objetivo:
                </span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-foreground">
                  {activeBrand.name}
                </h3>
              </div>
              
              <div className="relative pl-4 md:pl-6 border-l border-border mt-2">
                <div className="absolute left-[-1px] top-0 w-[2px] h-6 md:h-8 bg-brand"></div>
                <p className="font-sans text-muted-foreground text-sm md:text-lg leading-relaxed">
                  {activeBrand.successCase}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}