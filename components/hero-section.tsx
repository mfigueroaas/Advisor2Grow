"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    let animationId: number
    const gridSize = 50
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const { x: mouseX, y: mouseY } = mouseRef.current
      time += 0.005

      // Draw grid lines
      ctx.strokeStyle = "rgba(249, 115, 22, 0.04)"
      ctx.lineWidth = 1

      // Horizontal lines with wave effect
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        for (let x = 0; x < canvas.width; x += 5) {
          const distX = Math.abs(x - mouseX)
          const distY = Math.abs(y - mouseY)
          const dist = Math.sqrt(distX * distX + distY * distY)
          const wave = Math.sin(time + x * 0.01) * 3
          const distortion = dist < 150 ? (1 - dist / 150) * 15 : 0
          
          const offsetY = y + wave + distortion * Math.sin(time * 2)
          
          if (x === 0) {
            ctx.moveTo(x, offsetY)
          } else {
            ctx.lineTo(x, offsetY)
          }
        }
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        for (let y = 0; y < canvas.height; y += 5) {
          const distX = Math.abs(x - mouseX)
          const distY = Math.abs(y - mouseY)
          const dist = Math.sqrt(distX * distX + distY * distY)
          const wave = Math.sin(time + y * 0.01) * 3
          const distortion = dist < 150 ? (1 - dist / 150) * 15 : 0
          
          const offsetX = x + wave + distortion * Math.cos(time * 2)
          
          if (y === 0) {
            ctx.moveTo(offsetX, y)
          } else {
            ctx.lineTo(offsetX, y)
          }
        }
        ctx.stroke()
      }

      // Draw some floating data points
      ctx.fillStyle = "rgba(249, 115, 22, 0.15)"
      for (let i = 0; i < 20; i++) {
        const x = (Math.sin(time * 0.5 + i * 1.5) * 0.5 + 0.5) * canvas.width
        const y = (Math.cos(time * 0.3 + i * 1.2) * 0.5 + 0.5) * canvas.height
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <GridBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* System Status Micro-typography */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="font-mono text-xs tracking-widest text-primary">
            [SYS.INIT // ADVISOR2GROW // STATUS: ONLINE]
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-balance"
        >
          Transformamos tus servicios TI en una{" "}
          <span className="text-primary">plataforma segura</span>, estable y lista para{" "}
          <span className="text-primary">crecer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12 font-[var(--font-inter)]"
        >
          Consultoría especializada en infraestructura, cloud computing y ciberseguridad 
          para empresas que demandan excelencia operativa.
        </motion.p>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-8 mb-12 font-mono text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-3xl md:text-4xl font-bold text-foreground">
              <AnimatedCounter end={20} suffix="+" />
            </span>
            <span className="text-muted-foreground uppercase tracking-wider text-xs">
              Anos de<br />Experiencia
            </span>
          </div>
          
          <div className="w-px h-12 bg-border" />
          
          <div className="flex items-center gap-2">
            <span className="text-3xl md:text-4xl font-bold text-foreground">
              24/7
            </span>
            <span className="text-muted-foreground uppercase tracking-wider text-xs">
              Soporte<br />Continuo
            </span>
          </div>
          
          <div className="w-px h-12 bg-border" />
          
          <div className="flex items-center gap-2">
            <span className="text-3xl md:text-4xl font-bold text-foreground">
              <AnimatedCounter end={100} suffix="+" />
            </span>
            <span className="text-muted-foreground uppercase tracking-wider text-xs">
              Proyectos<br />MultiCloud
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-base font-semibold tracking-wide orange-glow transition-all hover:orange-glow-intense"
          >
            Contactar a un Experto
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="rounded-none border-border bg-transparent text-foreground px-8 py-6 text-base font-semibold tracking-wide hover:border-primary hover:text-primary transition-colors"
          >
            Nuestros Servicios
          </Button>
        </motion.div>

        {/* Decorative corner brackets */}
        <div className="absolute top-20 left-6 text-primary/30 font-mono text-xs">
          [<span className="text-primary/50">00</span>]
        </div>
        <div className="absolute bottom-20 right-6 text-primary/30 font-mono text-xs">
          [<span className="text-primary/50">01</span>]
        </div>
      </div>
    </section>
  )
}
