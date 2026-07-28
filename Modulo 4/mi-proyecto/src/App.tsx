import ProductCard from './components/ProductCard'
import ProductCatalogList from './components/ProductCatalogList'
import UserProfileCard from './components/UserProfileCard'
import PetCatalogList from './components/Animaleslist'

const pets = [
  { id: 1, nombre: 'Max',     tipo: 'Perro',    edad: 2, precio: 150.00 },
  { id: 2, nombre: 'Luna',    tipo: 'Gato',     edad: 1, precio: 80.00  },
  { id: 3, nombre: 'Piolín',  tipo: 'Pájaro',   edad: 3, precio: 45.00  },
  { id: 4, nombre: 'Nemo',    tipo: 'Pez',      edad: 1, precio: 20.00  },
  { id: 5, nombre: 'Toby',    tipo: 'Conejo',   edad: 2, precio: 60.00  },
]

const catalog = [
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
        highlighted={false}
        price={1000}
      />

      <ProductCard
        title="Oferta del día"
        description="Webcam HD con 20% de descuento"
        price={47.99}
      />

      <ProductCatalogList products={catalog} title="Productos disponibles" />

      <UserProfileCard
        fullName="Romeo Robles"
        email="isrraelrobles742@gmail.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'NestJS', 'PostgreSQL','Mongo db','odoo']}
        bio="Desarrollador full stack en formación."
      />




      <PetCatalogList animals={pets} title="Tienda de Mascotas " />

    </main>
  )
}