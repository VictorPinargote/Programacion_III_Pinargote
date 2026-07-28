// src/components/ProgressBar.tsx

interface ProgressBarProps {
  percent: number
  color?: string
}

export default function ProgressBar({ percent, color = '#6366f1' }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent))

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 13, color: '#555' }}>
        <span>Progreso</span>
        <span>{clamped}%</span>
      </div>
      <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: 8, height: 16, overflow: 'hidden' }}>
        <div
          style={{
            width: `${clamped}%`,
            height: '100%',
            backgroundColor: color,
            borderRadius: 8,
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  )
}
