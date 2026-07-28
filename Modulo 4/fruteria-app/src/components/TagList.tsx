// src/components/TagList.tsx

interface TagListProps {
  tags: string[]
  color?: string
}

export default function TagList({ tags, color = '#6366f1' }: TagListProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {tags.map((tag) => (
        <span
          key={tag}
          style={{
            backgroundColor: color,
            color: '#fff',
            padding: '4px 12px',
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
