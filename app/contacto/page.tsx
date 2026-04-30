"use client"

import { motion } from "framer-motion"

export default function ContactoPage() {
  return (
    <main className="flex-1 flex flex-col pt-16 md:pt-20 relative bg-page overflow-hidden">

      {/* Header */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-16 border-x border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-sans text-brand mb-4 md:mb-6 tracking-widest text-xs md:text-sm uppercase"
        >
          Contacto
        </motion.div>
        
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-sans font-bold text-foreground mb-4 md:mb-6 uppercase"
          >
            Escríbenos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-inter text-base md:text-lg leading-relaxed"
          >
            Envíanos un mensaje con tus dudas o comentarios, estamos aquí para apoyarte.
          </motion.p>
        </div>
      </section>

      {/* Layout de 2 columnas */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-32 border-x border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          
          {/* Columna Izquierda (Formulario HUD) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 bg-surface border border-border shadow-sm p-6 md:p-12 relative rounded-xl"
          >
            <div className="font-sans text-faint-foreground text-[10px] md:text-xs mb-6 md:mb-8 uppercase flex items-center gap-2 tracking-widest">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand animate-pulse"></span>
              Formulario de contacto
            </div>

            <form className="flex flex-col gap-6 md:gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col group">
                  <label htmlFor="nombre" className="font-sans text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2 uppercase group-focus-within:text-brand transition-colors tracking-widest">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="nombre"
                    className="bg-surface border border-input text-foreground font-inter py-3 px-4 focus:outline-none focus:border-brand transition-colors placeholder:text-faint-foreground rounded-lg cursor-text text-sm md:text-base"
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>
                <div className="flex flex-col group">
                  <label htmlFor="email" className="font-sans text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2 uppercase group-focus-within:text-brand transition-colors tracking-widest">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    className="bg-surface border border-input text-foreground font-inter py-3 px-4 focus:outline-none focus:border-brand transition-colors placeholder:text-faint-foreground rounded-lg cursor-text text-sm md:text-base"
                    placeholder="correo@empresa.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col group">
                  <label htmlFor="telefono" className="font-sans text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2 uppercase group-focus-within:text-brand transition-colors tracking-widest">
                    Teléfono
                  </label>
                  <input 
                    type="tel" 
                    id="telefono"
                    className="bg-surface border border-input text-foreground font-inter py-3 px-4 focus:outline-none focus:border-brand transition-colors placeholder:text-faint-foreground rounded-lg cursor-text text-sm md:text-base"
                    placeholder="+56 9 XXXX XXXX"
                  />
                </div>
                <div className="flex flex-col group">
                  <label htmlFor="asunto" className="font-sans text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2 uppercase group-focus-within:text-brand transition-colors tracking-widest">
                    Asunto
                  </label>
                  <input 
                    type="text" 
                    id="asunto"
                    className="bg-surface border border-input text-foreground font-inter py-3 px-4 focus:outline-none focus:border-brand transition-colors placeholder:text-faint-foreground rounded-lg cursor-text text-sm md:text-base"
                    placeholder="Motivo de consulta"
                  />
                </div>
              </div>

              <div className="flex flex-col group">
                <label htmlFor="mensaje" className="font-sans text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2 uppercase group-focus-within:text-brand transition-colors tracking-widest">
                  Mensaje
                </label>
                <textarea 
                  id="mensaje"
                  rows={4}
                  className="bg-surface border border-input text-foreground font-inter py-3 px-4 focus:outline-none focus:border-brand transition-colors placeholder:text-faint-foreground rounded-lg resize-none cursor-text text-sm md:text-base"
                  placeholder="Escribe el detalle de tu solicitud..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="mt-2 md:mt-4 bg-brand text-brand-foreground font-sans text-sm md:text-base font-bold uppercase tracking-widest py-3 md:py-4 px-6 md:px-8 border border-brand hover:bg-brand-strong transition-colors rounded-lg w-full md:w-auto self-start"
              >
                Transmitir Datos
              </button>
            </form>
          </motion.div>

          {/* Columna Derecha (Datos Operativos) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-6 md:gap-8"
          >
            {/* Mapa Satelital Interactivo (Placeholder) */}
            <div className="w-full h-48 md:h-64 bg-surface border border-border shadow-sm relative overflow-hidden group rounded-xl">
              <div className="absolute inset-0 panel-grid opacity-70"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand/20"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-brand rounded-full animate-ping mx-auto mb-2"></div>
                  <span className="font-sans text-muted-foreground text-[10px] md:text-xs uppercase bg-surface px-2 py-1 border border-border rounded-md tracking-widest">
                    Ubicación
                  </span>
                </div>
              </div>
              
              {/* Target reticle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 border border-brand/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 border border-brand rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Datos de Contacto */}
            <div className="border border-border bg-surface shadow-sm p-6 md:p-8 rounded-xl">
              <div className="font-sans text-brand text-[10px] md:text-xs mb-4 md:mb-6 uppercase tracking-widest font-semibold">
                Información de contacto
              </div>
              
              <div className="flex flex-col gap-4 md:gap-6">
                {/* Teléfono */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 border border-border bg-page flex items-center justify-center shrink-0 rounded-lg">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans text-faint-foreground text-[10px] md:text-xs uppercase mb-1 tracking-widest">Central Telefónica</div>
                    <div className="font-sans text-foreground text-base md:text-lg">+56 9 9249 2509</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 border border-border bg-page flex items-center justify-center shrink-0 rounded-lg">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans text-faint-foreground text-[10px] md:text-xs uppercase mb-1 tracking-widest">Correo Electrónico</div>
                    <div className="font-sans text-foreground text-base md:text-lg">contacto@advisor2grow.com</div>
                  </div>
                </div>

                {/* Sede */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 border border-border bg-page flex items-center justify-center shrink-0 rounded-lg">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-sans text-faint-foreground text-[10px] md:text-xs uppercase mb-1 tracking-widest">Sede Central</div>
                    <div className="font-sans text-foreground text-base md:text-lg">Santiago, Chile</div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
