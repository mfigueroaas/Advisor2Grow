import { Navbar } from "@/components/navbar"
import { CustomCursor } from "@/components/custom-cursor"
import { InicioSection } from "@/components/sections/inicio-section"
import { NosotrosSection } from "@/components/sections/nosotros-section"
import { ServiciosSection } from "@/components/sections/servicios-section"
import { ContactoSection } from "@/components/sections/contacto-section"
import { FooterSimple } from "@/components/footer-simple"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a2332] text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <InicioSection />
      <NosotrosSection />
      <ServiciosSection />
      <ContactoSection />
      <FooterSimple />
    </main>
  )
}
