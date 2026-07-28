interface CartItem {
  id: number
  name: string
  price: number
}

interface ShoppingCartSummaryProps {
  items: CartItem[]
  onClearCart: () => void
}

export default function ShoppingCartSummary({
  items,
  onClearCart,
}: ShoppingCartSummaryProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <aside style={summaryStyle}>
      <h2 style={titleStyle}>Carrito</h2>

      {items.length === 0 ? (
        <p style={emptyStyle}>No hay productos agregados.</p>
      ) : (
        <>
          <ul style={listStyle}>
            {items.map((item) => (
              <li key={item.id} style={itemStyle}>
                <span>{item.name}</span>
                <strong>${item.price.toFixed(2)}</strong>
              </li>
            ))}
          </ul>
          <div style={totalStyle}>
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <button onClick={onClearCart} style={buttonStyle} type="button">
            Vaciar carrito
          </button>
        </>
      )}
    </aside>
  )
}

const summaryStyle = {
  border: '1px solid #ddd',
  borderRadius: 8,
  padding: 16,
  marginTop: 18,
} satisfies React.CSSProperties

const titleStyle = {
  margin: '0 0 12px',
  fontSize: 18,
} satisfies React.CSSProperties

const emptyStyle = {
  margin: 0,
  color: '#666',
} satisfies React.CSSProperties

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
} satisfies React.CSSProperties

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 12,
} satisfies React.CSSProperties

const totalStyle = {
  borderTop: '1px solid #eee',
  marginTop: 12,
  paddingTop: 12,
  display: 'flex',
  justifyContent: 'space-between',
} satisfies React.CSSProperties

const buttonStyle = {
  marginTop: 12,
  border: '1px solid #ccc',
  borderRadius: 6,
  background: '#f5f5f5',
  cursor: 'pointer',
  padding: '8px 12px',
  width: '100%',
} satisfies React.CSSProperties
