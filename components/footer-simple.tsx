export function FooterSimple() {
  return (
    <footer className="py-8 bg-[#1a2332] border-t border-[#2d3d52]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Advisor2Grow. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="#inicio" 
              className="text-sm text-gray-400 hover:text-[#F26522] transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#inicio")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Inicio
            </a>
            <a 
              href="#nosotros" 
              className="text-sm text-gray-400 hover:text-[#F26522] transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#nosotros")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Nosotros
            </a>
            <a 
              href="#servicios" 
              className="text-sm text-gray-400 hover:text-[#F26522] transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Servicios
            </a>
            <a 
              href="#contacto" 
              className="text-sm text-gray-400 hover:text-[#F26522] transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
