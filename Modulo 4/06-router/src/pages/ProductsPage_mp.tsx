// src/pages/ProductsPage_mp.tsx

import { useState, useMemo }  from 'react'
import { Link, useSearchParams } from 'react-router-dom'

interface Empleado {
  id:       number
  name:     string
  category: string
  price:    number
}

const EMPLEADOS: Empleado[] = [
  { id: 1, name: 'Diana Rocha',   category: 'contabilidad', price: 850  },
  { id: 2, name: 'Carlos Mena',   category: 'rrhh',          price: 620  },
  { id: 3, name: 'Sofía Pérez',   category: 'gerencia',      price: 1200 },
  { id: 4, name: 'Hernán Vega',   category: 'ventas',        price: 700  },
  { id: 5, name: 'Ana Torres',    category: 'rrhh',          price: 590  },
]

export default function ProductsPage_mp() {
  // useSearchParams sincroniza filtros con la URL
  // ?q=diana&category=rrhh queda en la barra del navegador
  const [searchParams, setSearchParams] = useSearchParams()

  const query    = searchParams.get('q')        ?? ''
  const category = searchParams.get('category') ?? ''

  function handleQueryChange(value: string) {
    setSearchParams(
      (prev) => { prev.set('q', value); return prev },
      { replace: true }
    )
  }

  function handleCategoryChange(value: string) {
    setSearchParams(
      (prev) => {
        if (value) prev.set('category', value)
        else       prev.delete('category')
        return prev
      },
      { replace: true }
    )
  }

  const filtered = useMemo(() =>
    EMPLEADOS
      .filter((e) => e.name.toLowerCase().includes(query.toLowerCase()))
      .filter((e) => !category || e.category === category),
    [query, category]
  )

  const categories = [...new Set(EMPLEADOS.map((e) => e.category))]

  return (
    <div>
      <h1 style={{ fontSize: 22, marginBottom: 16 }}>Empleados</h1>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Buscar empleado..."
          style={{ flex: 1, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        />
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
        >
          <option value="">Todos los departamentos</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.map((empleado) => (
          <Link
            key={empleado.id}
            to={`/empleados/${empleado.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 8,
            }}>
              <div>
                <p style={{ margin: 0, fontWeight: 500 }}>{empleado.name}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>{empleado.category}</p>
              </div>
              <span style={{ fontWeight: 600 }}>${empleado.price}</span>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p style={{ color: '#9ca3af' }}>Sin resultados.</p>
        )}
      </div>
    </div>
  )
}
