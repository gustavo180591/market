import { Smartphone, Home, Shirt, Sparkles, Gamepad2, Zap } from "lucide-react"

const categories = [
  { id: 1, name: "Tecnología", icon: Smartphone, color: "bg-blue-100" },
  { id: 2, name: "Hogar y cocina", icon: Home, color: "bg-green-100" },
  { id: 3, name: "Indumentaria", icon: Shirt, color: "bg-pink-100" },
  { id: 4, name: "Deco y bazar", icon: Sparkles, color: "bg-purple-100" },
  { id: 5, name: "Juguetes y juegos", icon: Gamepad2, color: "bg-yellow-100" },
  { id: 6, name: "Ofertas / Liquidación", icon: Zap, color: "bg-orange-100" },
]

export default function Categories() {
  return (
    <section id="categorias" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Categorías principales</h2>
          <p className="text-muted-foreground text-lg">Explora nuestros productos por categoría</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button key={category.id} className="group cursor-pointer">
                <div
                  className={`${category.color} p-6 md:p-8 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:scale-105`}
                >
                  <Icon size={32} className="mx-auto mb-3 text-foreground group-hover:text-primary transition" />
                  <h3 className="font-semibold text-foreground text-sm md:text-base">{category.name}</h3>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
