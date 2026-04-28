"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { TechStackHub } from "@/components/tech-stack-hub"
import { BrandsSuccessSection } from "@/components/brands-success-section"

export default function Home() {
  return (
    <main className="flex-1 flex flex-col pt-16 md:pt-20 relative bg-slate-950 overflow-hidden">
      {/* Background Effect: Grid tenue */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Luz tenue naranja en el fondo */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-orange-500 opacity-20 blur-[80px] md:blur-[120px] pointer-events-none"></div>

      {/* 1. Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 min-h-[90vh] flex flex-col justify-center border-x border-slate-800/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Columna Izquierda: Texto y CTA */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-slate-400 tracking-widest text-xs md:text-sm uppercase font-semibold"
            >
              Consultoría Líder en TI
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-space font-bold text-white leading-[1.05]"
            >
              Transformamos tus servicios TI en una plataforma segura, estable y lista para crecer.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 font-inter text-base md:text-xl leading-relaxed"
            >
              Somos una empresa joven y ágil, respaldada por más de 20 años de experiencia liderando servicios de infraestructura, nube y continuidad operativa para grandes corporaciones. Diseñamos, implementamos y operamos soluciones TI modernas con foco en resiliencia y ciberseguridad.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4"
            >
              <Link href="/contacto" className="px-6 py-3 md:px-8 md:py-4 bg-orange-500 text-white font-space font-bold tracking-widest hover:bg-orange-600 transition-colors text-center uppercase text-xs md:text-sm border border-orange-500">
                Contactar a un Experto
              </Link>
              <Link href="/servicios" className="px-6 py-3 md:px-8 md:py-4 border border-orange-500 text-orange-500 font-space font-bold tracking-widest hover:bg-orange-500/10 transition-colors text-center uppercase text-xs md:text-sm bg-black/20 backdrop-blur-sm">
                Explorar Servicios
              </Link>
            </motion.div>
          </div>

          {/* Columna Derecha: Imagen Principal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full flex items-center justify-center mt-12 lg:mt-0"
          >
            <div className="relative w-full flex justify-center lg:justify-end group">
              <Image
                src="/Imagenes/hero-principal.png"
                alt="Advisor2Grow Infraestructura TI"
                width={468}
                height={283}
                className="w-full h-auto object-contain rounded-sm shadow-[0_0_40px_rgba(249,115,22,0.15)]"
                priority
              />
            </div>
          </motion.div>

        </div>

        {/* Banner de Estadísticas de Ancho Completo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full mt-16 md:mt-20 border-t border-slate-800/50 pt-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center sm:items-start">
              <div className="font-mono text-xs md:text-sm text-slate-500 mb-2 uppercase tracking-widest">EXPERIENCIA</div>
              <div className="font-space text-3xl md:text-4xl lg:text-5xl font-bold text-[#F26522]">20+ años</div>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="font-mono text-xs md:text-sm text-slate-500 mb-2 uppercase tracking-widest">ENFOQUE</div>
              <div className="font-space text-3xl md:text-4xl lg:text-5xl font-bold text-[#F26522]">Continuidad 24/7</div>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="font-mono text-xs md:text-sm text-slate-500 mb-2 uppercase tracking-widest">ÁMBITOS</div>
              <div className="font-space text-3xl md:text-4xl lg:text-5xl font-bold text-[#F26522]">Infra & MultiCloud</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Sección Continuidad y Rueda Tecnológica */}
      <section className="relative w-full border-y border-slate-800 bg-slate-950/60 backdrop-blur-xl py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
          <div className="w-12 h-1 bg-orange-500 mb-6 md:mb-8"></div>
          <h2 className="text-3xl md:text-5xl font-space font-bold text-white mb-4 md:mb-6">
            Aseguramos tu continuidad operativa
          </h2>
          <p className="text-slate-400 font-inter text-base md:text-lg leading-relaxed text-left md:text-justify max-w-4xl">
            Identificamos brechas, fortalecemos tu infraestructura y aplicamos buenas prácticas internacionales para que la operación de tu negocio se mantenga estable, segura y preparada ante ciberataques, fallos y cambios regulatorios. Chile es uno de los países más atacados de la región. Te ayudamos a reducir riesgos, proteger tu información y garantizar la continuidad de tus servicios.
          </p>
        </div>

        <TechStackHub />
      </section>

      {/* Casos de Éxito / Marcas */}
      <BrandsSuccessSection />

      {/* 3. Grid de Características */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 border-x border-slate-800/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              title: "Asesoría experta",
              desc: "Soluciones adaptadas a cada cliente."
            },
            {
              title: "Innovación sostenible",
              desc: "Tecnología moderna con menor riesgo."
            },
            {
              title: "Gestión proactiva",
              desc: "Supervisión constante de sistemas."
            },
            {
              title: "Seguridad garantizada",
              desc: "Protección integral avanzada de datos."
            }
          ].map((feat, i) => (
            <div key={i} className="p-6 md:p-10 border border-slate-800 bg-slate-950/40 hover:bg-slate-950/80 hover:border-orange-500 transition-all duration-300 group cursor-crosshair">
              <div className="font-mono text-slate-600 group-hover:text-orange-500 mb-4 md:mb-6 text-xs md:text-sm transition-colors duration-300">
                [0{i+1}] // MÓDULO
              </div>
              <h3 className="font-space text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {feat.title}
              </h3>
              <p className="font-inter text-slate-400 text-base md:text-lg">
                {feat.desc}
              </p>
              
              {/* Decorative HUD element inside card */}
              <div className="mt-6 md:mt-8 flex justify-end">
                <div className="w-8 h-[1px] bg-slate-700 group-hover:bg-orange-500 group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}