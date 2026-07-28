import React from 'react'

interface ProductCardProps {
  title: string
  description?: string
  highlighted?: boolean
  price?: number
  onClick?: () => void
}

export default function ProductCard({
  title,
  description = '',
  highlighted = false,
  price,
  onClick,
}: ProductCardProps) {

  const cardStyle: React.CSSProperties = {
    border: highlighted ? '2px solid gold' : '1px solid #ccc',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    backgroundColor: highlighted ? '#fffbea' : '#fff',
    cursor: onClick ? 'pointer' : 'default',
  }

  return (
    <div style={cardStyle} onClick={onClick}>
      <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
      <p style={{ margin: 0, color: '#555' }}>{description || 'Sin descripción'}</p>
      {price !== undefined && (
        <p style={{ margin: '8px 0 0', fontWeight: 'bold' }}>${price?.toFixed(2)}</p>
      )}
    </div>
  )
}
