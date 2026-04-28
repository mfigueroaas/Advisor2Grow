import type { Metadata } from "next"
import { Space_Grotesk, Inter, Roboto_Mono } from "next/font/google"
import "../styles/globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { NavbarExecutive } from "@/components/navbar-executive"
import { FooterExecutive } from "@/components/footer-executive"

// Títulos (pesada, geométrica)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
})

// Párrafos
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// Detalles, HUD
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Advisor2Grow | Consultoría TI Corporativa",
  description: "Transformamos tus servicios TI en una plataforma segura, estable y lista para crecer.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${robotoMono.variable} font-sans bg-slate-950 text-slate-200 antialiased min-h-screen flex flex-col`}
      >
        <CustomCursor />
        <NavbarExecutive />
        <div className="flex-1 flex flex-col">{children}</div>
        <FooterExecutive />
      </body>
    </html>
  )
}
