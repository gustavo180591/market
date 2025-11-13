import { ShoppingCart, MessageCircle, Truck } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Elegís tus productos favoritos",
    description: "Explora nuestro catálogo y selecciona lo que te interesa",
    icon: ShoppingCart,
  },
  {
    number: 2,
    title: "Nos escribís o completás el formulario",
    description: "Comunícate por WhatsApp o a través de nuestro formulario de contacto",
    icon: MessageCircle,
  },
  {
    number: 3,
    title: "Coordinamos pago y envío",
    description: "Acordamos los detalles y realizas el pago de forma segura",
    icon: Truck,
  },
]

export default function HowToBuy() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cómo comprar</h2>
          <p className="text-muted-foreground text-lg">El proceso es simple y seguro</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                {step.number < 3 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-primary to-transparent" />
                )}
                <div className="bg-white border border-border rounded-lg p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="mb-3">
                    <Icon size={32} className="mx-auto text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
