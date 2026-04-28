"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "INICIO" },
  { href: "#nosotros", label: "NOSOTROS" },
  { href: "#servicios", label: "NUESTROS SERVICIOS" },
  { href: "#contacto", label: "CONTACTO" },
]

function NavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    onClick()
  }, [href, onClick])

  return (
    <button
      onClick={handleClick}
      className="relative text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-[#F26522] tracking-wide group cursor-pointer"
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#F26522] transition-all duration-300 group-hover:w-full" />
    </button>
  )
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    onClick()
  }, [href, onClick])

  return (
    <button
      onClick={handleClick}
      className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-[#F26522] py-2 text-left cursor-pointer"
    >
      {label}
    </button>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const scrollToTop = useCallback(() => {
    const element = document.querySelector("#inicio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#1a2332]/90 backdrop-blur-md border-b border-[#2d3d52]" 
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo Placeholder */}
          <button 
            onClick={scrollToTop}
            className="flex-shrink-0 cursor-pointer"
          >
            <Image
              src="/Imagenes/hero-principal.png"
              alt="Logo Advisor2Grow"
              width={66}
              height={40}
              className="w-auto h-10 brightness-110 drop-shadow-[0_2px_8px_rgba(242,101,34,0.2)]"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={closeMobileMenu}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-[#F26522] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#1a2332]/95 backdrop-blur-md border-b border-[#2d3d52]"
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <MobileNavLink
              key={link.href}
              href={link.href}
              label={link.label}
              onClick={closeMobileMenu}
            />
          ))}
        </div>
      </motion.div>
    </motion.header>
  )
}
