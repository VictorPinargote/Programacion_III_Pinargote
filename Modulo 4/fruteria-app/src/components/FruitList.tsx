interface Fruit {
  name: string
  emoji: string
  calories: number
  inSeason?: boolean
}

interface FruitListProps {
  fruits: Fruit[]
  title?: string
}

export default function FruitList({ fruits, title = 'Frutas' }: FruitListProps) {
  if (fruits.length === 0) {
    return <p style={{ color: '#999' }}>No hay frutas en la lista.</p>
  }

  const sorted = [...fruits].sort((a, b) => a.calories - b.calories)

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sorted.map((fruit, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px',
              borderBottom: 'none',
              backgroundColor: i % 2 === 0 ? '#f3f4f6' : 'transparent' 
            }}
          >
            <span>{fruit.inSeason && '🌟 '}{fruit.emoji} {fruit.name}</span>
            <span style={{ color: '#888', fontSize: 13 }}>{fruit.calories} kcal</span>
          </li>
        ))}
      </ul>
    </div>
  )
}