import Image from "next/image"
import { FadeIn } from "@/components/motion/fade-in"
import { AnimatedHeading } from "@/components/motion/animated-heading"

export default function NosotrosPage() {
  return (
    <main className="flex-1 flex flex-col pt-16 md:pt-20 relative bg-slate-50 overflow-hidden">

      {/* Header / Intro */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 border-x border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24">
          <div className="lg:col-span-7">
            <AnimatedHeading as="h1" className="text-3xl md:text-6xl font-sans font-bold text-slate-900 mb-6 md:mb-8 leading-tight uppercase" delay={0.08} duration={0.55}>
              UN ASESOR QUE TE LLEVA A CRECER / ADVISOR2GROW
            </AnimatedHeading>
          </div>
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeIn className="w-12 h-1 bg-orange-500 mb-6 md:mb-8 hidden lg:block" y={8} duration={0.4}><div /></FadeIn>
            <FadeIn className="text-slate-600 font-inter text-base md:text-lg leading-relaxed text-left md:text-justify" delay={0.16} duration={0.5}>
              Somos una empresa moderna, cercana, que entiende las necesidades de sus clientes y las transforma en soluciones. Profesionales con más de 20 años en el rubro tecnológico, liderando la creación y consolidación de áreas de TI para grandes empresas y prestadores de servicios. La experiencia combina profundidad técnica, excelencia operativa y visión de negocio.
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="relative w-full border-y border-slate-200 bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Misión Card */}
          <FadeIn 
            className="p-6 md:p-12 border border-slate-200 bg-white shadow-sm hover:border-orange-500 transition-all duration-300 group relative overflow-hidden rounded-xl"
            delay={0.1}
            duration={0.5}
          >
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 mb-4 md:mb-6">Nuestra Misión</h2>
            <p className="text-slate-600 font-inter text-base md:text-lg leading-relaxed">
              Optimizar la infraestructura tecnológica de nuestros clientes mediante soluciones innovadoras y personalizadas que aseguren su continuity operativa y fortalezcan su crecimiento sostenible.
            </p>
          </FadeIn>

          {/* Visión Card */}
          <FadeIn 
            className="p-6 md:p-12 border border-slate-200 bg-white shadow-sm hover:border-orange-500 transition-all duration-300 group relative overflow-hidden rounded-xl"
            delay={0.18}
            duration={0.5}
          >
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 mb-4 md:mb-6">Nuestra Visión</h2>
            <p className="text-slate-600 font-inter text-base md:text-lg leading-relaxed">
              Ser reconocidos como una consultora tecnológica líder en soluciones TI integrales, comprometida con la eficiencia, la seguridad y la transformación digital de las organizaciones.
            </p>
          </FadeIn>

        </div>
      </section>

      {/* Grid del Equipo (Interactivo) */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 border-x border-slate-200">
        <div className="flex items-center gap-3 md:gap-4 mb-12 md:mb-16">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-500 flex items-center justify-center">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white animate-ping"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 uppercase">
            Nuestros Especialistas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: "Marcelo Collao", role: "Arquitecto Cloud", exp: "Especialista en migraciones AWS y Azure.", image: "/Imagenes/Personas/especialista-1.jpg" },
            { name: "Victor Gálvez", role: "Directora Ciberseguridad", exp: "Auditora normativa ISO 27001.", image: "/Imagenes/Personas/especialista-2.jpg" },
            { name: "Marcelo Figueroa", role: "Ingeniero DevOps", exp: "Automatización y despliegue continuo.", image: "/Imagenes/Personas/especialista-3.jpg" },
            { name: "Dante Mendoza", role: "Líder Infraestructura", exp: "Alta disponibilidad y VMware.", image: "/Imagenes/Personas/especialista-4.jpg" }
          ].map((member, i) => (
            <FadeIn key={i} delay={0.05 * i} duration={0.45}>
              <div className="relative border border-slate-200 bg-white shadow-sm aspect-[3/4] overflow-hidden group cursor-pointer w-full rounded-xl">
              {/* Foto Perfil */}
              <div className="absolute inset-0 bg-slate-50">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-top group-hover:scale-105 transition-all duration-500" 
                />
              </div>
              
              {/* Overlay Base */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Información Base */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform transition-transform duration-500 z-10">
                <div className="font-sans text-orange-500 text-[10px] md:text-xs mb-1 md:mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Perfil activo
                </div>
                <h3 className="font-sans text-xl md:text-2xl font-bold text-slate-900 mb-1 uppercase">
                  {member.name}
                </h3>
                <p className="font-inter text-slate-600 text-xs md:text-sm">
                  {member.role}
                </p>
              </div>

              {/* Panel Hover (Slide Up) */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white/95 border-t border-slate-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] p-4 md:p-6 flex flex-col justify-between z-20">
                <div>
                  <div className="font-sans text-slate-500 text-[10px] md:text-xs mb-2 md:mb-3 font-bold uppercase tracking-widest">
                    Experiencia técnica
                  </div>
                  <p className="font-inter text-slate-600 text-xs md:text-sm leading-relaxed">
                    {member.exp}
                  </p>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="w-4 md:w-6 h-[2px] bg-orange-500"></div>
                  <button className="text-slate-600 hover:text-orange-500 transition-colors">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.132 1.445-2.132 2.939v5.667H9.353V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Borde Naranja Hover */}
              <div className="absolute inset-0 border border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30 rounded-xl"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </main>
  )
}

