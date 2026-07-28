// src/components/FilterableList.tsx

import { useState, useCallback } from 'react'

interface Item {
  id:       number
  name:     string
  category: string
}

interface ItemRowProps {
  item:     Item
  onDelete: (id: number) => void
}

// Componente hijo — recibe onDelete como prop
function ItemRow({ item, onDelete }: ItemRowProps) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '8px 0',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <span>
        <strong style={{ fontSize: 14 }}>{item.name}</strong>
        <span style={{ marginLeft: 8, fontSize: 12, color: '#9ca3af' }}>
          {item.category}
        </span>
      </span>
      <button
        onClick={() => onDelete(item.id)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', fontSize: 16 }}
      >
        ✕
      </button>
    </div>
  )
}

const INITIAL_ITEMS: Item[] = [
  { id: 1, name: 'Teclado mecánico',   category: 'Periféricos' },
  { id: 2, name: 'Monitor ultrawide',  category: 'Pantallas'   },
  { id: 3, name: 'Mouse ergonómico',   category: 'Periféricos' },
  { id: 4, name: 'Webcam 4K',          category: 'Cámaras'     },
]

export default function FilterableList() {
  const [items,  setItems]  = useState<Item[]>(INITIAL_ITEMS)
  const [filter, setFilter] = useState('')

  // useCallback — handleDelete mantiene la misma referencia
  // mientras items no cambie, evitando re-renders de ItemRow
  const handleDelete = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase()) ||
    item.category.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div style={{ maxWidth: 400 }}>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filtrar por nombre o categoría..."
        style={{
          width: '100%', padding: '8px 12px',
          border: '1px solid #d1d5db', borderRadius: 6,
          marginBottom: 12, boxSizing: 'border-box',
        }}
      />

      {filteredItems.length === 0
        ? <p style={{ color: '#9ca3af', fontSize: 14 }}>Sin resultados.</p>
        : filteredItems.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              onDelete={handleDelete}
            />
          ))
      }
    </div>
  )
}