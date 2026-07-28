import { useState } from 'react'

export default function SafeCounter() {
  const [count, setCount] = useState(0)

  function incrementThreeTimes() {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }

  return (
    <section style={cardStyle}>
      <h1 style={titleStyle}>SafeCounter</h1>
      <strong style={valueStyle}>{count}</strong>
      <div style={rowStyle}>
        <button onClick={() => setCount((prev) => prev + 1)} style={buttonStyle} type="button">
          +1
        </button>
        <button onClick={incrementThreeTimes} style={buttonStyle} type="button">
          +3
        </button>
        <button onClick={() => setCount(0)} style={buttonStyle} type="button">
          Reset
        </button>
      </div>
    </section>
  )
}

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: 8,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  alignItems: 'center',
} satisfies React.CSSProperties

const titleStyle = {
  margin: 0,
  fontSize: 22,
} satisfies React.CSSProperties

const valueStyle = {
  fontSize: 30,
} satisfies React.CSSProperties

const rowStyle = {
  display: 'flex',
  gap: 10,
} satisfies React.CSSProperties

const buttonStyle = {
  border: '1px solid #ccc',
  borderRadius: 6,
  background: '#f5f5f5',
  cursor: 'pointer',
  padding: '8px 12px',
} satisfies React.CSSProperties
