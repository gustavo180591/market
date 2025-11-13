"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "¿Hacen envíos a todo el país?",
    answer:
      "Sí, realizamos envíos a todo el país. Los tiempos varían según la ubicación, generalmente entre 3 a 7 días hábiles.",
  },
  {
    id: 2,
    question: "¿Qué medios de pago aceptan?",
    answer:
      "Aceptamos transferencia bancaria, tarjetas de crédito y débito. También ofrecemos promociones y cuotas sin interés según el medio de pago.",
  },
  {
    id: 3,
    question: "¿Puedo cambiar o devolver un producto?",
    answer:
      "Sí, contamos con una política de cambios y devoluciones. Los productos pueden ser devueltos dentro de 30 días si no están utilizados.",
  },
  {
    id: 4,
    question: "¿Cuánto tarda en llegar mi pedido?",
    answer:
      "Los tiempos de entrega dependen de tu ubicación. En CABA y Gran Buenos Aires generalmente tardamos 2 a 3 días. En el interior del país de 5 a 7 días hábiles.",
  },
]

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(1)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Preguntas frecuentes</h2>
          <p className="text-muted-foreground text-lg">Resolvemos tus dudas sobre nuestro servicio</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-muted transition-colors"
              >
                <h3 className="font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-primary transition-transform ${activeId === faq.id ? "rotate-180" : ""}`}
                />
              </button>
              {activeId === faq.id && (
                <div className="px-6 py-4 bg-muted border-t border-border">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
