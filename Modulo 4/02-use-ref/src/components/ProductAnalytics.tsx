// src/components/ProductAnalytics.tsx

import { useState, useMemo } from 'react'

interface Product {
  id:       number
  name:     string
  price:    number
  category: string
  stock:    number
}

const CATALOG: Product[] = [
  { id: 1, name: 'Laptop Pro',       price: 1299, category: 'Computadoras', stock: 5  },
  { id: 2, name: 'Teclado mecánico', price: 89,   category: 'Periféricos',  stock: 20 },
  { id: 3, name: 'Monitor 27"',      price: 349,  category: 'Pantallas',    stock: 8  },
  { id: 4, name: 'Mouse inalámbrico',price: 29,   category: 'Periféricos',  stock: 35 },
  { id: 5, name: 'Webcam HD',        price: 59,   category: 'Cámaras',      stock: 12 },
  { id: 6, name: 'Auriculares BT',   price: 149,  category: 'Audio',        stock: 0  },
]

export default function ProductAnalytics() {
  const [search,      setSearch]      = useState('')
  const [onlyInStock, setOnlyInStock] = useState(false)

  // Recalcula solo cuando CATALOG cambia (nunca, es constante)
  // En un caso real cambiaría cuando lleguen datos del servidor
  const stats = useMemo(() => {
    const total    = CATALOG.reduce((acc, p) => acc + p.price, 0)
    const average  = total / CATALOG.length
    const inStock  = CATALOG.filter((p) => p.stock > 0).length
    return { total, average, inStock, count: CATALOG.length }
  }, [])

  // Recalcula cuando search u onlyInStock cambian — no cuando cambia el estado del otro
  const filtered = useMemo(() => {
    return CATALOG
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .filter((p) => !onlyInStock || p.stock > 0)
  }, [search, onlyInStock])

  return (
    <div style={{ maxWidth: 440 }}>

      {/* Stats — calculadas una sola vez */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 8, marginBottom: 16,
      }}>
        {[
          { label: 'Productos', value: stats.count },
          { label: 'En stock',  value: stats.inStock },
          { label: 'Promedio',  value: `$${stats.average.toFixed(0)}` },
          { label: 'Total inv.',value: `$${stats.total.toFixed(0)}` },
        ].map((s) => (
          <div key={s.label} style={{
            padding: '10px 8px', background: '#f9fafb',
            borderRadius: 8, textAlign: 'center',
          }}>
            <p style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{s.value}</p>
            <p style={{ margin: 0, fontSize: 11, color: '#9ca3af' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Controles */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar producto..."
          style={{ flex: 1, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={onlyInStock}
            onChange={(e) => setOnlyInStock(e.target.checked)}
          />
          Solo en stock
        </label>
      </div>

      {/* Lista filtrada */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map((product) => (
          <li key={product.id} style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', padding: '8px 0',
            borderBottom: '1px solid #e5e7eb',
            opacity: product.stock === 0 ? 0.4 : 1,
          }}>
            <div>
              <span style={{ fontSize: 14, fontWeight: 500 }}>{product.name}</span>
              <span style={{ marginLeft: 8, fontSize: 12, color: '#9ca3af' }}>
                {product.category}
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontWeight: 600 }}>${product.price}</p>
              <p style={{ margin: 0, fontSize: 11, color: product.stock > 0 ? '#22c55e' : '#ef4444' }}>
                {product.stock > 0 ? `${product.stock} uds.` : 'Sin stock'}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p style={{ color: '#9ca3af', fontSize: 14 }}>Sin resultados.</p>
      )}
    </div>
  )
}