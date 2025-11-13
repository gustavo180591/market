"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to your backend
    alert("¡Gracias por tu mensaje! Nos contactaremos pronto.")
    setFormData({ name: "", email: "", whatsapp: "", message: "" })
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Contacto y pedidos</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              ¿Querés hacer un pedido o tenés dudas? Estamos acá para ayudarte.
            </p>

            <a
              href="https://wa.me/5491234567890?text=Hola%20TodoMarket%2C%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent hover:bg-accent/90 text-white px-10 py-3 rounded-lg font-semibold transition mb-8"
            >
              Comprar por WhatsApp
            </a>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">+54 9 1234 56-7890</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">info@todomarket.com.ar</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Local</h3>
                  <p className="text-muted-foreground">
                    Av. Corrientes 1234, CABA
                    <br />
                    Lun-Sab: 10:00 - 19:00 hs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tu nombre"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="tu@email.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="whatsapp" className="block text-sm font-semibold text-foreground mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+54 9 1234 56-7890"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Contanos qué productos te interesan..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
