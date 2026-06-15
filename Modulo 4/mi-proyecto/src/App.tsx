import ProductCard        from './components/ProductCard'

interface Product {
  id: number
  name: string
  price: number
  outOfStock?: boolean
}

const catalog: Product[] = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27"',       price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD',         price: 59.99 },
]

export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>
      
      <ProductCard
        title="Bienvenido a la tienda"
        description="Encuentra los mejores accesorios para tu escritorio"
        highlighted
        price={1000}
      />

      <ProductCard
        title="oferta del dia"
        description="WebCam HD con 20% de descuento"
        highlighted
        price={1000}
      />

    </main>
  )
}

