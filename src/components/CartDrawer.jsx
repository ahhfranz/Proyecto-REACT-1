function CartDrawer({ open, onClose, cart, onRemove, onVaciar, onFinalizar }) {
    const show = open ? 'translateX(0)' : 'translateX(100%)'
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: 360,
            maxWidth: '90vw',
            height: '100vh',
            background: '#fff',
            color: '#232323',
            boxShadow: '-2px 0 16px #ff7e9b22',
            zIndex: 200,
            transform: show,
            transition: 'transform 0.3s cubic-bezier(.4,0,.2,1)',
            padding: '2rem 1.5rem',
            borderTopLeftRadius: 18,
            borderBottomLeftRadius: 18,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: 18,
                    right: 18,
                    background: 'none',
                    border: 'none',
                    fontSize: 28,
                    color: '#ff7e9b',
                    cursor: 'pointer'
                }}
                aria-label="Cerrar carrito"
            >×</button>
            <h2 style={{ fontWeight: 700, marginBottom: 24, color: '#ff7e9b' }}>Carrito</h2>
            {cart.length > 0 ? (
                <>
                    {cart.map(item => (
                        <div key={item.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                            marginBottom: 18
                        }}>
                            <img src={item.image} alt={item.name} style={{ width: 48, borderRadius: 8, background: '#f7f7fa' }} />
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 600 }}>{item.name} x{item.quantity}</div>
                                <div style={{ color: '#888', fontSize: 15 }}>Talle: XL</div>
                            </div>
                            <div style={{ fontWeight: 600, fontSize: 17 }}>${(item.price * item.quantity).toLocaleString()}</div>
                            <button
                                style={{
                                    background: '#ff7e9b',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: 8,
                                    padding: '0.3em 0.7em',
                                    fontWeight: 700,
                                    fontSize: 14,
                                    marginLeft: 8,
                                    cursor: 'pointer'
                                }}
                                onClick={() => onRemove(item.id)}
                            >Eliminar</button>
                        </div>
                    ))}
                    <div style={{
                        textAlign: 'right',
                        fontWeight: 700,
                        fontSize: 22,
                        margin: '18px 0',
                        color: '#ff7e9b'
                    }}>
                        Total: ${total.toLocaleString()}
                    </div>
                    <button
                        style={{
                            background: '#888',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 8,
                            padding: '0.7em 1.2em',
                            fontWeight: 700,
                            fontSize: 16,
                            marginBottom: 10,
                            cursor: 'pointer',
                            width: '100%'
                        }}
                        onClick={onVaciar}
                    >Vaciar carrito</button>
                    <button
                        style={{
                            background: '#ff7e9b',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 8,
                            padding: '0.7em 1.2em',
                            fontWeight: 700,
                            fontSize: 16,
                            cursor: 'pointer',
                            width: '100%'
                        }}
                        onClick={onFinalizar}
                    >Finalizar compra</button>
                </>
            ) : (
                <div style={{ color: '#888', fontSize: 18, marginTop: 40, textAlign: 'center' }}>
                    El carrito está vacío.
                </div>
            )}
        </div>
    )
}

export default CartDrawer