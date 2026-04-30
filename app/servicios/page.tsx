// Converted to Server Component: animations handled in client subcomponents
import { serviciosPage } from "@/data/servicios-page"
import { FadeIn } from "@/components/motion/fade-in"
import { AnimatedHeading } from "@/components/motion/animated-heading"

export default function ServiciosPage() {

  return (
    <main className="flex-1 flex flex-col pt-16 md:pt-20 relative bg-page overflow-hidden">

      {/* Header */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 border-x border-border">
        <div className="max-w-4xl">
            <AnimatedHeading as="h1" className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-foreground mb-6 md:mb-8 leading-tight" delay={0.08} duration={0.55}>
            Nuestros Servicios: Diseñados para fortalecer, proteger y optimizar tu entorno TI.
          </AnimatedHeading>
        </div>
      </section>

      {/* Grid de Soluciones */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-32 border-x border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {serviciosPage.map((srv, i) => (
            <FadeIn key={srv.id} delay={0.06 * i} duration={0.45}>
              <div 
                className="group relative border border-border bg-surface shadow-sm p-6 md:p-8 flex flex-col hover:border-brand hover:shadow-md transition-all duration-300 cursor-pointer h-full rounded-xl"
              >
              {/* Imagen Técnica Placeholder */}
              <div className="w-full h-32 md:h-48 bg-page border border-border mb-6 md:mb-8 flex items-center justify-center relative overflow-hidden group-hover:border-brand transition-colors duration-300 rounded-lg">
                <div className="absolute inset-0 panel-grid"></div>
                <span className="font-sans text-faint-foreground text-xs md:text-sm z-10 bg-surface px-2 py-1 rounded-md border border-border">
                  Imagen del servicio
                </span>
              </div>

              {/* Contenido */}
              <div className="flex-1 flex flex-col">
                <h2 className="text-xl md:text-2xl font-sans font-bold text-foreground mb-4 md:mb-6 uppercase group-hover:text-brand transition-colors duration-300">
                  {srv.title}
                </h2>
                <p className="text-muted-foreground font-inter text-sm md:text-base leading-relaxed mb-8 md:mb-12 flex-1">
                  {srv.desc}
                </p>

                {/* Footer de Tarjeta */}
                <div className="pt-4 md:pt-6 border-t border-border flex items-center justify-between mt-auto">
                  <div className="font-sans text-[10px] md:text-xs text-faint-foreground group-hover:text-brand transition-colors duration-300">
                    Ver detalle
                  </div>
                </div>
              </div>

              {/* Borde Naranja Seco (Sin animación de escala) */}
                <div className="absolute inset-0 border border-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

    </main>
  )
}
