import Link from "next/link"

export function FooterExecutive() {
  return (
    <footer className="border-t border-border bg-surface pt-12 md:pt-16 pb-6 md:pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">
        {/* Descripción Corporativa */}
        <div className="col-span-1 lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
          <Link href="/" className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-page border border-border flex items-center justify-center">
              <span className="text-brand font-sans text-xs md:text-sm font-bold">A2G</span>
            </div>
            <span className="font-sans font-bold text-lg md:text-xl tracking-wider text-foreground">
              ADVISOR2GROW
            </span>
          </Link>
          <p className="text-muted-foreground font-sans text-sm leading-relaxed lg:pr-8 max-w-sm lg:max-w-none">
            Consultora tecnológica en infraestructura, nube y continuidad operativa. Creamos soluciones que optimizan procesos y aseguran estabilidad en entornos TI.
          </p>
        </div>
        
        {/* Links */}
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="font-sans font-bold text-foreground mb-4 md:mb-6 tracking-wider text-sm md:text-base">MAPA DE NAVEGACIÓN</h3>
          <div className="flex flex-col gap-2 md:gap-3">
            <Link href="/" className="font-sans text-[10px] md:text-xs text-muted-foreground hover:text-brand transition-colors uppercase">
              Inicio
            </Link>
            <Link href="/nosotros" className="font-sans text-[10px] md:text-xs text-muted-foreground hover:text-brand transition-colors uppercase">
              Nosotros
            </Link>
            <Link href="/servicios" className="font-sans text-[10px] md:text-xs text-muted-foreground hover:text-brand transition-colors uppercase">
              Servicios
            </Link>
            <Link href="/contacto" className="font-sans text-[10px] md:text-xs text-muted-foreground hover:text-brand transition-colors uppercase">
              Contáctanos
            </Link>
          </div>
        </div>

        {/* Contacto */}
        <div className="col-span-1 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="font-sans font-bold text-foreground mb-4 md:mb-6 tracking-wider text-sm md:text-base">TRANSMISIÓN DE DATOS</h3>
          <div className="flex flex-col gap-3 md:gap-4 font-sans text-xs md:text-sm text-muted-foreground">
            <div className="flex flex-col gap-1">
              <span className="text-brand text-[10px] md:text-xs">Teléfono</span>
              <span className="text-foreground">+56 9 9249 2509</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-brand text-[10px] md:text-xs">Correo</span>
              <span className="text-foreground">contacto@advisor2grow.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Copyright */}
        <div className="font-sans text-[10px] md:text-xs text-faint-foreground">
          © Todos los derechos reservados - Creado por autoadministrables.cl
        </div>
        
        {/* Status */}
        <div className="flex items-center justify-center gap-2 font-sans text-[10px] md:text-xs">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand animate-pulse rounded-none"></span>
          <span className="text-faint-foreground">Operativo</span>
        </div>
      </div>
    </footer>
  )
}
