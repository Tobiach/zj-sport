import { useState, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import HowItWorks from './components/HowItWorks'
import OrderForm from './components/OrderForm'
import Trust from './components/Trust'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('')
  const formRef = useRef(null)

  const scrollToForm = () => {
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const handleSelectProduct = (productName) => {
    setSelectedProduct(productName)
    scrollToForm()
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <Hero onArmarPedido={scrollToForm} />
        <Catalog onSelectProduct={handleSelectProduct} />
        <HowItWorks />
        <Trust />
        <Testimonials />
        <OrderForm selectedProduct={selectedProduct} formRef={formRef} />
        <Contact />
      </main>
      <div className="pb-20 md:pb-0">
        <Footer />
      </div>
      <FloatingCTA />
    </div>
  )
}
