import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { NavbarExecutive } from "@/components/navbar-executive"
import { FooterExecutive } from "@/components/footer-executive"

// Párrafos
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        className={`${inter.variable} font-sans bg-slate-50 text-slate-600 antialiased min-h-screen flex flex-col`}
      >
        <CustomCursor />
        <NavbarExecutive />
        <div className="flex-1 flex flex-col">{children}</div>
        <FooterExecutive />
      </body>
    </html>
  )
}
