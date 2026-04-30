// Converted to Server Component: animations handled in client subcomponents
import { serviciosPage } from "@/data/servicios-page"
import { FadeIn } from "@/components/motion/fade-in"
import { AnimatedHeading } from "@/components/motion/animated-heading"

export default function ServiciosPage() {

  return (
    <main className="flex-1 flex flex-col pt-16 md:pt-20 relative bg-slate-50 overflow-hidden">

      {/* Header */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 border-x border-slate-200">
        <div className="max-w-4xl">
            <AnimatedHeading as="h1" className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-slate-900 mb-6 md:mb-8 leading-tight" delay={0.08} duration={0.55}>
            Nuestros Servicios: Diseñados para fortalecer, proteger y optimizar tu entorno TI.
          </AnimatedHeading>
        </div>
      </section>

      {/* Grid de Soluciones */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-32 border-x border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {serviciosPage.map((srv, i) => (
            <FadeIn key={srv.id} delay={0.06 * i} duration={0.45}>
              <div 
                className="group relative border border-slate-200 bg-white shadow-sm p-6 md:p-8 flex flex-col hover:border-orange-500 hover:shadow-md transition-all duration-300 cursor-pointer h-full rounded-xl"
              >
              {/* Imagen Técnica Placeholder */}
              <div className="w-full h-32 md:h-48 bg-slate-50 border border-slate-200 mb-6 md:mb-8 flex items-center justify-center relative overflow-hidden group-hover:border-orange-500 transition-colors duration-300 rounded-lg">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(148,163,184,0.08)_25%,transparent_25%,transparent_50%,rgba(148,163,184,0.08)_50%,rgba(148,163,184,0.08)_75%,transparent_75%,transparent)] bg-[length:24px_24px]"></div>
                <span className="font-sans text-slate-500 text-xs md:text-sm z-10 bg-white px-2 py-1 rounded-md border border-slate-200">
                  Imagen del servicio
                </span>
              </div>

              {/* Contenido */}
              <div className="flex-1 flex flex-col">
                <h2 className="text-xl md:text-2xl font-sans font-bold text-slate-900 mb-4 md:mb-6 uppercase group-hover:text-orange-500 transition-colors duration-300">
                  {srv.title}
                </h2>
                <p className="text-slate-600 font-inter text-sm md:text-base leading-relaxed mb-8 md:mb-12 flex-1">
                  {srv.desc}
                </p>

                {/* Footer de Tarjeta */}
                <div className="pt-4 md:pt-6 border-t border-slate-200 flex items-center justify-between mt-auto">
                  <div className="font-sans text-[10px] md:text-xs text-slate-500 group-hover:text-orange-500 transition-colors duration-300">
                    Ver detalle
                  </div>
                </div>
              </div>

              {/* Borde Naranja Seco (Sin animación de escala) */}
                <div className="absolute inset-0 border border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </main>
  )
}
