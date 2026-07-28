// src/components/PetCatalogList.tsx

interface Animal {
  id: number
  nombre: string
  tipo: string
  edad: number
  precio: number
}

interface PetCatalogListProps {
  animals: Animal[]
  title?: string
}

export default function PetCatalogList({
  animals,
  title = 'Lista de Animales',
}: PetCatalogListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {animals.length === 0 && (
        <p style={{ color: '#999' }}>No hay animales disponibles.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {animals.map((animal) => (
          <li
            key={animal.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>
              <strong>{animal.nombre}</strong>
              <em style={{ marginLeft: 8, fontSize: 13, color: '#888' }}>
                {animal.tipo} · {animal.edad} año{animal.edad !== 1 ? 's' : ''}
              </em>
            </span>
            <strong>${animal.precio.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}