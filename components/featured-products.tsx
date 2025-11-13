import { Star, ShoppingCart, MessageCircle } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Auriculares Inalámbricos",
    category: "Tecnología",
    price: "$8.500",
    badge: "Más vendido",
    image: "/wireless-headphones.png",
  },
  {
    id: 2,
    name: "Set de Sartenes Premium",
    category: "Hogar",
    price: "$4.200",
    badge: "Nuevo",
    image: "/cookware-set.png",
  },
  {
    id: 3,
    name: "Remera Básica Algodón",
    category: "Indumentaria",
    price: "$1.500",
    badge: null,
    image: "/cotton-tshirt.png",
  },
  {
    id: 4,
    name: "Lámpara LED Inteligente",
    category: "Deco",
    price: "$2.800",
    badge: "Oferta",
    image: "/smart-lamp.png",
  },
  {
    id: 5,
    name: "Board Game Familias",
    category: "Juguetes",
    price: "$1.800",
    badge: null,
    image: "/board-game-gathering.png",
  },
  {
    id: 6,
    name: "Smartwatch Deportivo",
    category: "Tecnología",
    price: "$6.900",
    badge: "Oferta",
    image: "/modern-smartwatch.png",
  },
  {
    id: 7,
    name: "Espejo Decorativo",
    category: "Deco",
    price: "$2.100",
    badge: "Nuevo",
    image: "/decorative-mirror.jpg",
  },
  {
    id: 8,
    name: "Mouse Inalámbrico",
    category: "Tecnología",
    price: "$1.200",
    badge: null,
    image: "/wireless-mouse.png",
  },
]

export default function FeaturedProducts() {
  return (
    <section id="destacados" className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Productos destacados</h2>
          <p className="text-muted-foreground text-lg">Descubre nuestros artículos más populares</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-muted h-48">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.badge && (
                  <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-2 font-medium">{product.category}</p>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-muted-foreground">(48)</span>
                </div>

                <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>

                <div className="space-y-2">
                  <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                    <ShoppingCart size={18} />
                    Ver más
                  </button>
                  <a
                    href="https://wa.me/5491234567890?text=Hola%20TodoMarket%2C%20me%20interesa%20este%20producto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border border-accent text-accent hover:bg-accent/5 py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
