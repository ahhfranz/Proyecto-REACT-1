import CartWidget from './CartWidget'
import havenLogo from '../assets/havenlogo.png'

function NavBar({ cartCount, onCartClick }) {
    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#fff',
            color: '#232323',
            padding: '1rem 2.5vw',
            boxShadow: '0 2px 12px #ff7e9b22',
            borderBottom: '2px solid #ff7e9b10'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={havenLogo} alt="Logo" style={{ width: 150, height: 44, marginRight: 8 }} />
            </div>
            <ul style={{
                display: 'flex',
                listStyle: 'none',
                gap: '2.5rem',
                margin: 0,
                padding: 0
            }}>
                {['Inicio', 'Productos', 'Contacto'].map((item) => (
                    <li key={item}>
                        <a
                            href="#"
                            style={{
                                color: '#232323',
                                textDecoration: 'none',
                                fontWeight: 500,
                                fontSize: 18,
                                letterSpacing: 0.5,
                                transition: 'color 0.2s, border-bottom 0.2s',
                                borderBottom: '2px solid transparent',
                                paddingBottom: 2
                            }}
                            onMouseOver={e => e.target.style.borderBottom = '2px solid #ff7e9b'}
                            onMouseOut={e => e.target.style.borderBottom = '2px solid transparent'}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
            <CartWidget count={cartCount} onClick={onCartClick} />
        </nav>
    )
}

export default NavBar