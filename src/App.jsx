import { useState } from 'react'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import CartDrawer from './components/CartDrawer'

function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const found = prevCart.find(item => item.id === product.id)
      if (found) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const handleRemove = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const handleVaciar = () => setCart([])

  const handleFinalizar = () => {
    setCart([])
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 2000)
    setCartOpen(false)
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F0F0F0',
      color: '#fff',
      fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif'
    }}>
      <NavBar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <main style={{
        width: '100vw',
        minHeight: 'calc(100vh - 80px)',
        margin: 0,
        padding: '3rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        boxSizing: 'border-box'
      }}>
        <ProductList
          greeting="by Haven Shop"
          onAdd={handleAddToCart}
        />
      </main>
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onRemove={handleRemove}
        onVaciar={handleVaciar}
        onFinalizar={handleFinalizar}
      />
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.25)',
            zIndex: 100
          }}
        />
      )}
      {showMessage && (
        <div style={{
          position: 'fixed',
          top: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#4caf50',
          color: '#fff',
          padding: '1em 2em',
          borderRadius: 8,
          fontWeight: 700,
          zIndex: 999
        }}>
          ¡Compra finalizada!
        </div>
      )}
    </div>
  )
}

export default App