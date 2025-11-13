export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Todo lo que necesitás, en un solo lugar
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Tecnología, hogar, indumentaria y mucho más, con envíos a todo el país
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#destacados"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition text-center"
              >
                Ver productos destacados
              </a>
              <a
                href="https://wa.me/5491234567890?text=Hola%20TodoMarket%2C%20quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-accent text-accent hover:bg-accent/5 px-8 py-3 rounded-lg font-semibold transition text-center"
              >
                Comprar por WhatsApp
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">✓ Pagos seguros</span>
              <span className="flex items-center gap-2">✓ Envíos a todo el país</span>
              <span className="flex items-center gap-2">✓ Atención personalizada</span>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:flex justify-center">
            <img src="/shopping-bags-products-store.jpg" alt="Productos TodoMarket" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
