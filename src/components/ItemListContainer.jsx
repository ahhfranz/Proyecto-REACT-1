import { useState } from 'react'

function ItemListContainer({ greeting, onAdd, product }) {
    const [added, setAdded] = useState(false)

    const handleAdd = () => {
        setAdded(true)
        if (onAdd) onAdd()
        setTimeout(() => setAdded(false), 1200)
    }

    if (!product) return null

    return (
        <div style={{
            padding: '2.5rem 2.5rem',
            background: '#fff',
            borderRadius: '20px',
            width: 340,
            minWidth: 280,
            boxShadow: '0 8px 32px #ff7e9b22',
            textAlign: 'center',
            border: '1px solid #ff7e9b33',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxSizing: 'border-box'
        }}>
            <img
                src={product.image}
                alt={product.name}
                style={{
                    width: '180px',
                    height: 'auto',
                    margin: '0 auto 1.2rem',
                    display: 'block',
                    borderRadius: '10px',
                    background: '#f7f7fa'
                }}
            />
            <h2 style={{
                margin: '0 0 0.7rem 0',
                color: '#232323',
                fontWeight: 700,
                fontSize: 20,
                letterSpacing: 0.5
            }}>{product.name}</h2>
            <div style={{
                color: '#232323',
                fontWeight: 800,
                fontSize: 32,
                margin: '0.5rem 0'
            }}>${product.price.toLocaleString()}</div>
            <div style={{
                color: '#ff7e9b',
                fontWeight: 700,
                fontSize: 16,
                marginBottom: 4
            }}>${product.priceTransfer.toLocaleString()} <span style={{ fontWeight: 400, fontSize: 15, color: '#888' }}>con Transferencia o Efectivo</span></div>
            <div style={{
                color: '#232323',
                fontWeight: 700,
                fontSize: 15,
                marginBottom: 18
            }}>6 cuotas <span style={{ fontWeight: 400, color: '#888' }}>sin interés de</span> ${product.cuotas.toLocaleString()}</div>
            <button
                onClick={handleAdd}
                style={{
                    background: added ? '#4caf50' : '#ff7e9b',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '1em 1.2em',
                    fontSize: '1.1em',
                    fontWeight: 700,
                    cursor: added ? 'not-allowed' : 'pointer',
                    transition: 'background 0.2s',
                    marginTop: 8,
                    width: '100%'
                }}
                disabled={added}
            >
                {added ? '¡Agregado!' : 'Agregar al carrito'}
            </button>
            <div style={{ marginTop: 18, color: '#888', fontSize: 15, fontWeight: 500 }}>
                {greeting}
            </div>
        </div>
    )
}

export default ItemListContainer