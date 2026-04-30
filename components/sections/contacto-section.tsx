"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Mail, Phone, MapPin, Send } from "lucide-react"

import { contactInfo } from "@/data/contact"

export function ContactoSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
  }

  return (
    <section
      id="contacto"
      className="relative py-24 bg-slate-50"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              <span className="text-brand-primary">Contacto</span>
            </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
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
                    <FieldLabel className="text-slate-600">Nombre</FieldLabel>
                    <Input 
                      type="text"
                      placeholder="Tu nombre"
                      className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-brand-primary focus:ring-brand-primary"
                    />
                  </Field>
                  <Field>
                    <FieldLabel className="text-slate-600">Email</FieldLabel>
                    <Input 
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-brand-primary focus:ring-brand-primary"
                    />
                  </Field>
                </div>
                
                <Field>
                  <FieldLabel className="text-slate-600">Empresa</FieldLabel>
                  <Input 
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-brand-primary focus:ring-brand-primary"
                  />
                </Field>

                <Field>
                  <FieldLabel className="text-slate-600">Mensaje</FieldLabel>
                  <Textarea 
                    placeholder="Cuentanos sobre tu proyecto..."
                    rows={5}
                    className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-brand-primary focus:ring-brand-primary resize-none"
                  />
                </Field>
              </FieldGroup>

              <Button
                type="submit"
                  className="w-full bg-brand-primary hover:bg-orange-600 text-slate-50 font-semibold py-6 transition-all duration-300"
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Hablemos de tu proyecto
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Nuestro equipo de expertos esta listo para analizar tus necesidades y disenar una solucion a medida. No dudes en contactarnos.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                    className="flex items-center gap-4 p-4 bg-white border border-slate-200 hover:border-orange-500 hover:shadow-md transition-all duration-300 group rounded-xl shadow-sm"
                >
                  <div className="p-3 bg-slate-50 border border-slate-200 group-hover:border-orange-500 transition-colors rounded-lg">
                      <info.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">{info.label}</div>
                      <div className="text-slate-900 group-hover:text-orange-500 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">
                Horario de Atencion
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Lunes - Viernes</span>
                  <span className="text-slate-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Sabado</span>
                  <span className="text-slate-900">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Soporte 24/7</span>
                  <span className="text-brand-primary">Disponible</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
