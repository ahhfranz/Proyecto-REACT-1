import { useState } from 'react'

function CartWidget({ count, onClick }) {
    return (
        <div style={{ position: 'relative', marginLeft: 16 }}>
            <button
                style={{
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 26,
                    cursor: 'pointer',
                    boxShadow: '0 1px 8px rgba(0,0,0,0.10)',
                    transition: 'box-shadow 0.2s, background 0.2s'
                }}
                title="Ver carrito"
                onClick={onClick}
            >
                🛒
                {count > 0 && (
                    <span style={{
                        background: '#fff',
                        color: '#ff7e9b',
                        borderRadius: '50%',
                        fontSize: 13,
                        width: 22,
                        height: 22,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        right: -8,
                        top: -8,
                        fontWeight: 'bold',
                        border: '2px solid #ff7e9b',
                        boxShadow: '0 0 6px #ff7e9b88',
                        animation: 'pop 0.3s'
                    }}>{count}</span>
                )}
            </button>
            <style>
                {`
          @keyframes pop {
            0% { transform: scale(0.7);}
            70% { transform: scale(1.2);}
            100% { transform: scale(1);}
          }
        `}
            </style>
        </div>
    )
}

export default CartWidget