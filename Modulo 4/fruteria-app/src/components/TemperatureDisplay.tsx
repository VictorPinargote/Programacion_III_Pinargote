// src/components/TemperatureDisplay.tsx

interface TemperatureDisplayProps {
  celsius: number
}

export default function TemperatureDisplay({ celsius }: TemperatureDisplayProps) {
  const fahrenheit = (celsius * 9) / 5 + 32
  const kelvin = celsius + 273.15

  return (
    <div style={{ display: 'flex', gap: 24, fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>{celsius}°</p>
        <p style={{ margin: 0, fontSize: 13, color: '#888' }}>Celsius</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>{fahrenheit.toFixed(1)}°</p>
        <p style={{ margin: 0, fontSize: 13, color: '#888' }}>Fahrenheit</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>{kelvin.toFixed(2)}</p>
        <p style={{ margin: 0, fontSize: 13, color: '#888' }}>Kelvin</p>
      </div>
    </div>
  )
}
