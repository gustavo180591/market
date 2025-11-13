import { Facebook, Instagram, TrendingUp, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TodoMarket</h3>
            <p className="text-white/70 text-sm">
              Tu tienda online de confianza con todo lo que necesitás en un solo lugar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#inicio" className="hover:text-white transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-white transition">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#destacados" className="hover:text-white transition">
                  Destacados
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+54 9 1234 56-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@todomarket.com.ar</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition">
                <TrendingUp size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>&copy; {currentYear} TodoMarket. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-white transition">
                Devoluciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
