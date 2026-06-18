// src/components/SimpleInfoTable.tsx

interface TableRow {
  label: string
  value: string | number
  highlight?: boolean
}

interface SimpleInfoTableProps {
  title?: string
  rows: TableRow[]
}

export default function SimpleInfoTable({ title, rows }: SimpleInfoTableProps) {
  return (
    <div style={{ maxWidth: 360, border: '2px solid #374151', borderRadius: 4, overflow: 'hidden' }}>
      {title && (
        <h3 style={{ 
          margin: 0, 
          padding: '10px 12px', 
          fontSize: 15, 
          backgroundColor: '#374151', 
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          🛠️ {title}
        </h3>
      )}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              style={{
                backgroundColor: row.highlight ? '#ffedd5' : '#fff',
              }}
            >
              <td
                style={{
                  padding: '10px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  color: '#4b5563',
                  fontWeight: 600,
                  width: '50%',
                }}
              >
                {row.label}
              </td>
              <td
                style={{
                  padding: '10px 12px',
                  borderBottom: '1px solid #e5e7eb',
                  color: row.highlight ? '#c2410c' : '#111827',
                  fontWeight: row.highlight ? 700 : 400,
                  textAlign: 'right'
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