import { Percent, TrendingUp, Zap } from "lucide-react"

const offers = [
  {
    id: 1,
    title: "Descuentos especiales de la semana",
    description: "Hasta 50% en productos seleccionados",
    icon: Percent,
    color: "from-blue-50 to-indigo-50",
  },
  {
    id: 2,
    title: "Envío gratis",
    description: "Desde $25.000 en compras",
    icon: TrendingUp,
    color: "from-green-50 to-emerald-50",
  },
  {
    id: 3,
    title: "Promociones por medio de pago",
    description: "Cuotas sin interés en tarjetas seleccionadas",
    icon: Zap,
    color: "from-orange-50 to-amber-50",
  },
]

export default function Offers() {
  return (
    <section id="ofertas" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ofertas y promos</h2>
          <p className="text-muted-foreground text-lg">No te pierdas nuestras promociones exclusivas</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer) => {
            const Icon = offer.icon
            return (
              <div
                key={offer.id}
                className={`bg-gradient-to-br ${offer.color} border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{offer.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{offer.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5491234567890?text=Hola%20TodoMarket%2C%20quiero%20ver%20los%20productos%20en%20oferta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-10 py-3 rounded-lg font-semibold transition"
          >
            Ver productos en oferta
          </a>
        </div>
      </div>
    </section>
  )
}
