import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5491234567890?text=Hola%20TodoMarket%2C%20quiero%20hacer%20un%20pedido"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
      aria-label="Chat por WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  )
}
