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
        "relative h-32 md:h-48 flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-brand-primary hover:shadow-lg",
        isActive && "border-brand-primary shadow-lg"
      )}
    >
      <div className="relative w-20 h-20 md:w-28 md:h-28 mb-2 md:mb-3 flex items-center justify-center">
        <Image
          src={brand.image}
          alt={brand.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <span
        className={cn(
          "font-sans text-[8px] md:text-[10px] tracking-widest uppercase transition-colors duration-300",
          isActive
            ? "text-brand-primary font-bold"
            : "text-slate-500 group-hover:text-brand-primary"
        )}
      >
        {brand.name.split(" ")[0]}
      </span>
    </button>
  )
}
