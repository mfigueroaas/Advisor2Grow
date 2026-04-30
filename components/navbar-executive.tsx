"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"
import { useState } from "react"
import { navbarExecLinks } from "@/data/navbar-exec"

export function NavbarExecutive() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = navbarExecLinks

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Placeholder */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <Image
            src="/Imagenes/hero-principal.png"
            alt="Logo Advisor2Grow"
            width={66}
            height={40}
            className="w-auto h-10 brightness-110 drop-shadow-[0_2px_8px_rgba(242,101,34,0.2)]"
          />
          <span className="text-xl font-bold text-white tracking-wide">Advisor<span className="text-orange-500">2</span>Grow</span>
        </Link>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="text-slate-300 hover:text-white p-2">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950 border-l-slate-800 p-0 w-[300px]">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <div className="flex flex-col h-full pt-24 px-6 pb-6">
                <div className="flex flex-col gap-6 flex-1">
                  {links.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={`font-mono text-sm tracking-widest transition-colors uppercase ${
                            isActive
                              ? "text-orange-500"
                              : "text-slate-400 hover:text-orange-400"
                          }`}
                        >
                          [{link.label}]
                        </Link>
                      </SheetClose>
                    )
                  })}
                </div>
                
                <div className="flex flex-col gap-6 mt-auto">
                  <div className="h-px w-full bg-slate-800"></div>
                  <div className="font-mono text-sm text-slate-300">
                    <span className="text-orange-500">TEL:</span><br/>+56 9 9249 2509
                  </div>
                  <SheetClose asChild>
                    <Link 
                      href="/contacto"
                      className="px-6 py-3 bg-orange-500 text-white font-space text-sm font-bold tracking-widest hover:bg-orange-600 transition-colors text-center"
                    >
                      CONTÁCTANOS
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Links y Contacto Rápido Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-xs tracking-widest transition-colors uppercase ${
                    isActive
                      ? "text-orange-500"
                      : "text-slate-400 hover:text-orange-400"
                  }`}
                >
                  [{link.label}]
                </Link>
              )
            })}
          </div>
          
          <div className="h-6 w-px bg-slate-800"></div>
          
          <div className="flex items-center gap-6">
            <div className="font-mono text-sm text-slate-300">
              <span className="text-orange-500">TEL:</span> +56 9 9249 2509
            </div>
            <Link 
              href="/contacto"
              className="px-6 py-2 bg-orange-500 text-white font-space text-sm font-bold tracking-widest hover:bg-orange-600 transition-colors rounded-none"
            >
              CONTÁCTANOS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
