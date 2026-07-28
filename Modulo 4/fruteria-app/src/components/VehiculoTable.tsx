// src/components/VehiculoTable.tsx

interface TableRow {
  label: string
  value: string | number
  highlight?: boolean
}

interface VehiculoTableProps {
  title?: string
  rows: TableRow[]
}

export default function VehiculosTable({ title, rows }: VehiculoTableProps) {
  return (
    <div style={{ 
      maxWidth: 400, 
      backgroundColor: '#111827', 
      color: '#f9fafb', 
      borderRadius: 12, 
      padding: '20px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
      border: '1px solid #374151'
    }}>
      {title && (
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontSize: 18, 
          color: '#3b82f6', 
          textTransform: 'uppercase',
          letterSpacing: '1px',
          borderBottom: '2px solid #3b82f6',
          paddingBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          🏎️ {title}
        </h3>
      )}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              style={{
                backgroundColor: row.highlight ? '#1e3a8a' : 'transparent',
              }}
            >
              <td
                style={{
                  padding: '12px 0',
                  borderBottom: '1px solid #374151',
                  color: '#9ca3af',
                  fontSize: 14,
                }}
              >
                {row.label}
              </td>
              <td
                style={{
                  padding: '12px 0',
                  borderBottom: '1px solid #374151',
                  fontWeight: 700,
                  textAlign: 'right',
                  color: row.highlight ? '#60a5fa' : '#f9fafb',
                  fontSize: 16,
                }}
              >
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}