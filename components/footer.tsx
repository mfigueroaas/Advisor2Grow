"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer className="relative py-24 px-6 border-t border-border" id="contacto">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-6xl mx-auto">
        {/* Contact CTA Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 font-[var(--font-inter)]">
            Agenda una consulta con nuestros expertos y descubre como 
            podemos transformar tu infraestructura TI.
          </p>
          
          {/* Contact Form */}
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="tu@email.com"
              className="bg-black/40 border-border rounded-none focus:border-primary font-[var(--font-inter)]"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 font-semibold orange-glow whitespace-nowrap">
              Enviar
            </Button>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-foreground">Advisor</span>
              <span className="text-xl font-bold text-primary">2</span>
              <span className="text-xl font-bold text-foreground">Grow</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-sm font-[var(--font-inter)]">
              Consultora TI especializada en transformacion digital, 
              infraestructura cloud y ciberseguridad empresarial.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-[var(--font-inter)]">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Infraestructura TI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cloud Computing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ciberseguridad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  DevOps
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-[var(--font-inter)]">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <span>info@advisor2grow.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5" />
                <span>123 Tech District<br />Innovation City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground">
            © 2026 Advisor2Grow. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-xs text-muted-foreground font-[var(--font-inter)]">
            <a href="#" className="hover:text-primary transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terminos
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
