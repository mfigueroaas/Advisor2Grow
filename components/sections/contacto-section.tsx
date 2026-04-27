"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contacto@advisor2grow.com",
    href: "mailto:contacto@advisor2grow.com"
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Ciudad de Mexico, Mexico",
    href: "#"
  }
]

export function ContactoSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
  }

  return (
    <section
      id="contacto"
      className="relative py-24 bg-[#1e2a3d]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#F26522]">Contacto</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Estamos listos para ayudarte. Contactanos y transformemos juntos tu infraestructura TI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <FieldGroup>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel className="text-gray-300">Nombre</FieldLabel>
                    <Input 
                      type="text"
                      placeholder="Tu nombre"
                      className="bg-[#243246] border-[#2d3d52] text-white placeholder:text-gray-500 focus:border-[#F26522] focus:ring-[#F26522]"
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="text-gray-300">Email</FieldLabel>
                    <Input 
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-[#243246] border-[#2d3d52] text-white placeholder:text-gray-500 focus:border-[#F26522] focus:ring-[#F26522]"
                    />
                  </Field>
                </div>
                
                <Field>
                  <FieldLabel className="text-gray-300">Empresa</FieldLabel>
                  <Input 
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="bg-[#243246] border-[#2d3d52] text-white placeholder:text-gray-500 focus:border-[#F26522] focus:ring-[#F26522]"
                  />
                </Field>

                <Field>
                  <FieldLabel className="text-gray-300">Mensaje</FieldLabel>
                  <Textarea 
                    placeholder="Cuentanos sobre tu proyecto..."
                    rows={5}
                    className="bg-[#243246] border-[#2d3d52] text-white placeholder:text-gray-500 focus:border-[#F26522] focus:ring-[#F26522] resize-none"
                  />
                </Field>
              </FieldGroup>

              <Button
                type="submit"
                className="w-full bg-[#F26522] hover:bg-[#F26522]/90 text-white font-semibold py-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(242,101,34,0.5)]"
              >
                Enviar Mensaje
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Hablemos de tu proyecto
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Nuestro equipo de expertos esta listo para analizar tus necesidades y disenar una solucion a medida. No dudes en contactarnos.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-[#243246] border border-[#2d3d52] hover:border-[#F26522]/50 transition-colors group"
                >
                  <div className="p-3 bg-[#1a2332] border border-[#2d3d52] group-hover:border-[#F26522]/50 transition-colors">
                    <info.icon className="h-5 w-5 text-[#F26522]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="text-white group-hover:text-[#F26522] transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-[#243246] border border-[#2d3d52]">
              <h4 className="text-lg font-semibold text-white mb-3">
                Horario de Atencion
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Lunes - Viernes</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sabado</span>
                  <span className="text-white">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Soporte 24/7</span>
                  <span className="text-[#F26522]">Disponible</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
