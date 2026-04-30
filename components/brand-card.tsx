"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Brand } from "@/data/brands"

type BrandCardProps = {
  brand: Brand
  isActive: boolean
  onActivate: (b: Brand) => void
}

export default function BrandCard({ brand, isActive, onActivate }: BrandCardProps) {
  return (
    <button
      onClick={() => onActivate(brand)}
      onMouseEnter={() => onActivate(brand)}
      className={cn(
        "relative h-32 md:h-48 flex flex-col items-center justify-center transition-all duration-500 group cursor-crosshair rounded-none overflow-hidden backdrop-blur-md",
        isActive
          ? "bg-orange-500/10 border border-orange-500/50 shadow-[inset_0_0_30px_rgba(242,101,34,0.1),0_0_20px_rgba(242,101,34,0.15)]"
          : "bg-orange-500/[0.03] border border-orange-500/20 hover:bg-orange-500/[0.08] hover:border-orange-500/40 hover:shadow-[inset_0_0_20px_rgba(242,101,34,0.05)]"
      )}
    >
      <div className="relative w-20 h-20 md:w-28 md:h-28 mb-2 md:mb-3 flex items-center justify-center">
        <Image
          src={brand.image}
          alt={brand.name}
          fill
          className={cn(
            "object-contain transition-all duration-500",
            isActive
              ? "drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] scale-110"
              : "drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] opacity-90 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:scale-105"
          )}
        />
      </div>

      <span
        className={cn(
          "font-mono text-[8px] md:text-[10px] tracking-widest uppercase transition-colors duration-300",
          isActive
            ? "text-orange-400 font-bold drop-shadow-[0_0_5px_rgba(242,101,34,0.8)]"
            : "text-orange-500/50 group-hover:text-orange-400/80"
        )}
      >
        {brand.name.split(" ")[0]}
      </span>
    </button>
  )
}
