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
      className="relative min-h-screen flex items-center overflow-hidden bg-page"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Transformamos tus servicios TI en una plataforma{" "}
              <span className="text-brand">segura, estable y lista para crecer</span>
            </h1>
            
            {/* Informacion de Contacto */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 border border-brand/20">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="text-faint-foreground text-sm">Correo</p>
                  <p className="text-foreground font-medium">contacto@advisor2grow.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 border border-brand/20">
                  <MapPin className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="text-faint-foreground text-sm">Sede Central</p>
                  <p className="text-foreground font-medium">Ciudad de Mexico, Mexico</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 border border-brand/20">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="text-faint-foreground text-sm">Telefono</p>
                  <p className="text-foreground font-medium">+52 55 1234 5678</p>
                </div>
              </div>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => handleScrollTo("#contacto")}
                className="bg-brand hover:bg-brand-strong text-brand-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 brand-glow-strong"
              >
                Contactar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => handleScrollTo("#servicios")}
                className="border-border bg-surface text-foreground hover:border-brand hover:text-brand px-8 py-6 text-lg transition-all duration-300"
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
            <div className="w-full aspect-square max-w-lg border border-slate-200 bg-white shadow-sm rounded-lg flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-slate-400 rounded" />
                </div>
                <p className="text-slate-600 text-lg font-medium leading-relaxed">
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
          className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2"
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
