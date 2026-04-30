"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

export function InicioSection() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1a2332]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(242, 101, 34, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(242, 101, 34, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332] via-transparent to-[#1a2332]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
              Transformamos tus servicios TI en una plataforma{" "}
              <span className="text-brand-primary">segura, estable y lista para crecer</span>
            </h1>
            
            {/* Informacion de Contacto */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Correo</p>
                  <p className="text-white font-medium">contacto@advisor2grow.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Sede Central</p>
                  <p className="text-white font-medium">Ciudad de Mexico, Mexico</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20">
                  <Phone className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Telefono</p>
                  <p className="text-white font-medium">+52 55 1234 5678</p>
                </div>
              </div>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => handleScrollTo("#contacto")}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(242,101,34,0.5)]"
              >
                Contactar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => handleScrollTo("#servicios")}
                className="border-gray-600 text-gray-300 hover:border-brand-primary hover:text-brand-primary px-8 py-6 text-lg transition-all duration-300"
              >
                Servicios
              </Button>
            </div>
          </motion.div>

          {/* Columna Derecha - Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="w-full aspect-square max-w-lg border border-slate-700/50 bg-slate-800/50 rounded-lg flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 border-2 border-dashed border-slate-600 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-slate-500 rounded" />
                </div>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                  [ESPACIO PARA IMAGEN PRINCIPAL O ANIMACION 3D]
                </p>
                <p className="text-slate-500 text-sm mt-2">
                  Dimensiones recomendadas: 600x600px
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-brand-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
