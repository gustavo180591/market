import Header from "@/components/header"
import Hero from "@/components/hero"
import Categories from "@/components/categories"
import FeaturedProducts from "@/components/featured-products"
import Offers from "@/components/offers"
import WhyBuyWithUs from "@/components/why-buy-with-us"
import HowToBuy from "@/components/how-to-buy"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Offers />
      <WhyBuyWithUs />
      <HowToBuy />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
