interface FilaVehiculo {
  marca: string
  modelo: string
  anio: number
  precio: number | string
  esElectrico?: boolean
}

interface VehicleTableProps {
  title?: string
  rows: FilaVehiculo[]
}

export default function VehicleTable({ title, rows }: VehicleTableProps) {
  return (
    <div style={{ maxWidth: 500, fontFamily: 'sans-serif' }}>
      {title && <h3 style={{ marginBottom: 12, fontSize: 18, color: '#1f2937' }}>{title}</h3>}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #d1d5db', color: '#374151' }}>
            <th style={{ padding: '8px 12px' }}>Marca</th>
            <th style={{ padding: '8px 12px' }}>Modelo</th>
            <th style={{ padding: '8px 12px' }}>Año</th>
            <th style={{ padding: '8px 12px' }}>Precio</th>
            <th style={{ padding: '8px 12px', textAlign: 'center' }}>¿Eléctrico?</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((fila, indice) => (
            <tr
              key={indice}
              style={{
                backgroundColor: indice % 2 === 0 ? '#f9fafb' : 'transparent',
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              <td style={{ padding: '10px 12px', color: '#111827', fontWeight: 500 }}>{fila.marca}</td>
              <td style={{ padding: '10px 12px', color: '#4b5563' }}>{fila.modelo}</td>
              <td style={{ padding: '10px 12px', color: '#4b5563' }}>{fila.anio}</td>
              <td style={{ padding: '10px 12px', color: '#059669', fontWeight: 600 }}>{fila.precio}</td>
              <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                {fila.esElectrico ? '⚡' : '⛽'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}