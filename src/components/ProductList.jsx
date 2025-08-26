import ItemListContainer from './ItemListContainer'
import remeraConstant from '../assets/remera-constant.png'
import remeraSilence from '../assets/remera-silence.png'
import remeraWabisabi from '../assets/remera-wabisabi.png'

const products = [
    {
        id: 1,
        name: 'Remera CONSTANT',
        price: 42900,
        priceTransfer: 34320,
        cuotas: 7150,
        image: remeraConstant,
    },
    {
        id: 2,
        name: 'Remera SILENCE',
        price: 42900,
        priceTransfer: 34320,
        cuotas: 7150,
        image: remeraSilence,
    },
    {
        id: 3,
        name: 'Remera WABI SABI',
        price: 42900,
        priceTransfer: 34320,
        cuotas: 7150,
        image: remeraWabisabi,
    },
]

function ProductList({ onAdd, greeting }) {
    return (
        <div
            style={{
                display: 'flex',
                gap: '2.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: '100%',
                margin: 0,
                boxSizing: 'border-box'
            }}
        >
            {products.map((product) => (
                <ItemListContainer
                    key={product.id}
                    greeting={greeting}
                    onAdd={() => onAdd(product)}
                    product={product}
                />
            ))}
        </div>
    )
}

export default ProductList