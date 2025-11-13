import { ShoppingBag, Users, Shield, Truck } from "lucide-react"

const reasons = [
  {
    icon: ShoppingBag,
    title: "Gran variedad de productos",
    description: "Encuentro todo lo que necesito en un solo lugar",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    description: "Equipo disponible para ayudarte en cada compra",
  },
  {
    icon: Shield,
    title: "Pagos seguros",
    description: "Protegemos tus datos y transacciones",
  },
  {
    icon: Truck,
    title: "Envíos rápidos a todo el país",
    description: "Envíos ágiles y confiables a cualquier lugar",
  },
]

export default function WhyBuyWithUs() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Por qué comprar en TodoMarket</h2>
          <p className="text-muted-foreground text-lg">Te ofrecemos lo mejor en experiencia de compra</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-full inline-flex mb-4 shadow-sm">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
