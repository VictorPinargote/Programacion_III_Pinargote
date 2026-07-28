interface CatalogProductItemProps {
  id: number
  name: string
  price: number
  onAddToCart: (id: number, name: string, price: number) => void
}

export default function CatalogProductItem({
  id,
  name,
  price,
  onAddToCart,
}: CatalogProductItemProps) {
  return (
    <article style={itemStyle}>
      <div>
        <h2 style={nameStyle}>{name}</h2>
        <p style={priceStyle}>${price.toFixed(2)}</p>
      </div>
      <button onClick={() => onAddToCart(id, name, price)} style={buttonStyle} type="button">
        Agregar
      </button>
    </article>
  )
}

const itemStyle = {
  border: '1px solid #ddd',
  borderRadius: 8,
  padding: 14,
  marginBottom: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
} satisfies React.CSSProperties

const nameStyle = {
  margin: 0,
  fontSize: 16,
} satisfies React.CSSProperties

const priceStyle = {
  margin: '4px 0 0',
  color: '#555',
} satisfies React.CSSProperties

const buttonStyle = {
  border: '1px solid #ccc',
  borderRadius: 6,
  background: '#f5f5f5',
  cursor: 'pointer',
  padding: '8px 12px',
} satisfies React.CSSProperties
