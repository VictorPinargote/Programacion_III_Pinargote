import { useState } from 'react'

interface DigitalCounterProps {
  initialValue?: number
  step?: number
  label?: string
}

export default function DigitalCounter({
  initialValue = 0,
  step = 1,
  label = 'Contador',
}: DigitalCounterProps) {
  const [count, setCount] = useState(initialValue)

  function increment() {
    setCount((prev) => prev + step)
  }

  function decrement() {
    setCount((prev) => prev - step)
  }

  function reset() {
    setCount(initialValue)
  }

  return (
    <section style={cardStyle}>
      <h1 style={titleStyle}>{label}</h1>
      <div style={counterRowStyle}>
        <button onClick={decrement} style={buttonStyle} type="button">
          -
        </button>
        <strong style={valueStyle}>{count}</strong>
        <button onClick={increment} style={buttonStyle} type="button">
          +
        </button>
      </div>
      <button onClick={reset} style={resetStyle} type="button">
        Reset
      </button>
    </section>
  )
}

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: 8,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'center',
} satisfies React.CSSProperties

const titleStyle = {
  margin: 0,
  fontSize: 22,
} satisfies React.CSSProperties

const counterRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 14,
} satisfies React.CSSProperties

const buttonStyle = {
  width: 36,
  height: 36,
  borderRadius: 6,
  border: '1px solid #ccc',
  background: '#f5f5f5',
  cursor: 'pointer',
  fontSize: 18,
} satisfies React.CSSProperties

const valueStyle = {
  minWidth: 52,
  textAlign: 'center',
  fontSize: 28,
} satisfies React.CSSProperties

const resetStyle = {
  ...buttonStyle,
  width: 'auto',
  padding: '0 14px',
  fontSize: 14,
} satisfies React.CSSProperties
