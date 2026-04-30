// Converted to Server Component: animations handled in client subcomponents
import { serviciosPage } from "@/data/servicios-page"
import { FadeIn } from "@/components/motion/fade-in"
import { AnimatedHeading } from "@/components/motion/animated-heading"

export default function ServiciosPage() {

  return (
    <main className="flex-1 flex flex-col pt-16 md:pt-20 relative bg-slate-950 overflow-hidden">
      {/* Background Effect: Grid tenue */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Header */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 border-x border-slate-800/30">
        <FadeIn className="font-mono text-orange-500 mb-4 md:mb-6 tracking-widest text-xs md:text-sm uppercase" y={12} duration={0.4}>
          [DIR // SERVICES]
        </FadeIn>
        
        <div className="max-w-4xl">
          <AnimatedHeading as="h1" className="text-3xl md:text-5xl lg:text-6xl font-space font-bold text-white mb-6 md:mb-8 leading-tight" delay={0.08} duration={0.55}>
            Nuestros Servicios: Diseñados para fortalecer, proteger y optimizar tu entorno TI.
          </AnimatedHeading>
        </div>
      </section>

      {/* Grid de Soluciones */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-32 border-x border-slate-800/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {serviciosPage.map((srv, i) => (
            <FadeIn key={srv.id} delay={0.06 * i} duration={0.45}>
              <div 
                className="group relative border border-slate-800 bg-slate-900/40 p-6 md:p-8 flex flex-col hover:bg-slate-900 transition-colors duration-0 cursor-crosshair h-full"
              >
              {/* Imagen Técnica Placeholder */}
              <div className="w-full h-32 md:h-48 bg-slate-950 border border-slate-800 mb-6 md:mb-8 flex items-center justify-center relative overflow-hidden group-hover:border-slate-700 transition-colors duration-0">
                {/* Patrón de líneas diagonales para la imagen */}
                <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#white_11px)]"></div>
                <span className="font-mono text-slate-600 text-xs md:text-sm z-10 bg-slate-950 px-2">
                  [ESPACIO IMAGEN TÉCNICA // {srv.id}]
                </span>
              </div>

              {/* Contenido */}
              <div className="flex-1 flex flex-col">
                <div className="font-mono text-slate-500 text-[10px] md:text-xs mb-3 md:mb-4 uppercase">
                  SVC_MODULE_{srv.id}
                </div>
                <h2 className="text-xl md:text-2xl font-space font-bold text-white mb-4 md:mb-6 uppercase group-hover:text-orange-500 transition-colors duration-0">
                  {srv.title}
                </h2>
                <p className="text-slate-400 font-inter text-sm md:text-base leading-relaxed mb-8 md:mb-12 flex-1">
                  {srv.desc}
                </p>

                {/* Footer de Tarjeta (Estado Seco) */}
                <div className="pt-4 md:pt-6 border-t border-slate-800 flex items-center justify-between mt-auto">
                  <div className="font-mono text-[10px] md:text-xs text-slate-600 group-hover:text-orange-500/70 transition-colors duration-0">
                    ESTADO: <span className="text-slate-400 group-hover:text-orange-500">EN_LÍNEA</span>
                  </div>
                  
                  {/* Flecha Naranja estilo Terminal que aparece en hover */}
                  <div className="font-mono text-orange-500 text-xs md:text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-0 flex items-center gap-1 md:gap-2">
                    EXPLORAR <span className="animate-pulse">_&gt;</span>
                  </div>
                </div>
              </div>

              {/* Borde Naranja Seco (Sin animación de escala) */}
                <div className="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-0 pointer-events-none"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </main>
  )
}
