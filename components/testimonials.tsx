import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María G.",
    rating: 5,
    text: "Excelente atención. Encontré todo lo que buscaba en un solo lugar. Envío rápido y seguro.",
  },
  {
    name: "Juan M.",
    rating: 4.8,
    text: "Buena calidad de productos y precios competitivos. Definitivamente vuelvo a comprar.",
  },
  {
    name: "Laura R.",
    rating: 5,
    text: "La mejor experiencia de compra online que tuve. Muy profesionales y confiables.",
  },
  {
    name: "Carlos P.",
    rating: 4.9,
    text: "Rápido, seguro y con mucha variedad. Recomiendo TodoMarket a todos mis amigos.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Opiniones de nuestros clientes</h2>
          <p className="text-muted-foreground text-lg">Mira lo que dicen quienes ya compran con nosotros</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground font-semibold mb-2">{testimonial.rating.toFixed(1)}/5</p>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{testimonial.text}</p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
