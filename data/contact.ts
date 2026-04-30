import { Mail, Phone, MapPin } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

export type ContactInfoItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  value: string
  href: string
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "contacto@advisor2grow.com",
    href: "mailto:contacto@advisor2grow.com",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Ciudad de Mexico, Mexico",
    href: "#",
  },
]

export default contactInfo
