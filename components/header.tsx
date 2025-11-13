"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white border-b border-border shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">TodoMarket</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition">
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("categorias")}
              className="text-foreground hover:text-primary transition"
            >
              Categorías
            </button>
            <button
              onClick={() => scrollToSection("destacados")}
              className="text-foreground hover:text-primary transition"
            >
              Destacados
            </button>
            <button
              onClick={() => scrollToSection("ofertas")}
              className="text-foreground hover:text-primary transition"
            >
              Ofertas
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5491234567890?text=Hola%20TodoMarket%2C%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("categorias")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded"
            >
              Categorías
            </button>
            <button
              onClick={() => scrollToSection("destacados")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded"
            >
              Destacados
            </button>
            <button
              onClick={() => scrollToSection("ofertas")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded"
            >
              Ofertas
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded"
            >
              Contacto
            </button>
            <a
              href="https://wa.me/5491234567890?text=Hola%20TodoMarket%2C%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded font-semibold mt-4"
            >
              WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
