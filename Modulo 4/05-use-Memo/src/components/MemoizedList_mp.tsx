// src/components/MemoizedList_mp.tsx

import { useState, useCallback, memo } from 'react'

interface Tarea {
  id:        number
  text:      string
  completed: boolean
}

const TAREAS_INICIALES: Tarea[] = [
  { id: 1, text: 'Registrar horas extra del mes',     completed: false },
  { id: 2, text: 'Calcular aporte al IESS',           completed: true  },
  { id: 3, text: 'Generar roles de pago',             completed: false },
  { id: 4, text: 'Revisar descuentos por préstamos',  completed: false },
  { id: 5, text: 'Enviar nómina a contabilidad',      completed: false },
]

// ─── Fila memoizada ──────────────────────────────────────────────────────
let rowRenderCount = 0

const TareaRow = memo(function TareaRow({
  tarea,
  onToggle,
  onDelete,
}: {
  tarea:     Tarea
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}) {
  rowRenderCount++
  const count = rowRenderCount

  return (
    <div style={{
      display:        'flex',
      alignItems:     'center',
      gap:            10,
      padding:        '10px 14px',
      background:     tarea.completed ? '#f0fdf4' : '#fafafa',
      borderRadius:   8,
      border:         '1px solid',
      borderColor:    tarea.completed ? '#86efac' : '#e5e5e5',
    }}>
      <input
        type="checkbox"
        checked={tarea.completed}
        onChange={() => onToggle(tarea.id)}
        style={{ cursor: 'pointer', width: 16, height: 16 }}
      />
      <span style={{
        flex:           1,
        fontSize:       14,
        textDecoration: tarea.completed ? 'line-through' : 'none',
        color:          tarea.completed ? '#666' : '#111',
      }}>
        {tarea.text}
      </span>
      <span style={{ fontSize: 11, color: '#aaa' }}>render #{count}</span>
      <button
        onClick={() => onDelete(tarea.id)}
        style={{
          padding:      '2px 8px',
          borderRadius: 4,
          border:       '1px solid #fca5a5',
          background:   '#fef2f2',
          color:        '#dc2626',
          cursor:       'pointer',
          fontSize:     12,
        }}
      >
        ✕
      </button>
    </div>
  )
})

// ─── Padre ───────────────────────────────────────────────────────────────
export default function MemoizedList_mp() {
  const [tareas,  setTareas]  = useState<Tarea[]>(TAREAS_INICIALES)
  const [counter, setCounter] = useState(0)

  // useCallback: onToggle y onDelete tienen referencia estable
  // TareaRow no re-renderiza cuando solo cambia `counter`
  const handleToggle = useCallback((id: number) => {
    setTareas(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }, []) // sin dependencias externas — setTareas es estable

  const handleDelete = useCallback((id: number) => {
    setTareas(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 520, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Tareas de Nómina</h2>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
        <code>React.memo</code> + <code>useCallback</code> — las filas no re-renderizan por un counter ajeno.
      </p>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
        <button
          onClick={() => setCounter(c => c + 1)}
          style={{ padding: '6px 16px', borderRadius: 6, border: '1px solid #ccc', cursor: 'pointer' }}
        >
          Incrementar counter ({counter})
        </button>
        <span style={{ fontSize: 13, color: '#888' }}>
          ← no debe re-renderizar las tareas
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {tareas.map(tarea => (
          <TareaRow
            key={tarea.id}
            tarea={tarea}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <p style={{ marginTop: 16, fontSize: 12, color: '#aaa' }}>
        Render total de tareas: {rowRenderCount}
        {' '}(debería crecer solo al hacer toggle o delete, no al pulsar el counter)
      </p>
    </div>
  )
}
