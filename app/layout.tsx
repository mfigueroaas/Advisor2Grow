import type { Metadata } from 'next'
import { Space_Grotesk, Inter, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const robotoMono = Roboto_Mono({ 
  subsets: ["latin"],
  variable: '--font-roboto-mono'
})

export const metadata: Metadata = {
  title: 'Advisor2Grow | Transformamos tus servicios TI',
  description: 'Consultora TI especializada en infraestructura segura, estable y escalable. 20+ años de experiencia en soluciones MultiCloud.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable} ${robotoMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
