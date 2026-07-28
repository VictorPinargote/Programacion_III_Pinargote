interface AnimalCardProps {
  nombre: string
  tipo: string
  edad: number
  precio: number
  imageUrl?: string
}

export default function AnimalCard({
  nombre,
  tipo,
  edad,
  precio,
  imageUrl,
}: AnimalCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        maxWidth: 300,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={nombre}
          style={{ width: '100%', borderRadius: 8, marginBottom: 12 }}
        />
      )}
      <h3 style={{ margin: '0 0 8px' }}>{nombre}</h3>
      <p style={{ margin: '0 0 4px', color: '#666' }}>Tipo: {tipo}</p>
      <p style={{ margin: '0 0 4px', color: '#666' }}>Edad: {edad} años</p>
      <p style={{ margin: '8px 0 0', fontWeight: 'bold', color: '#2c3e50' }}>
        Precio: ${precio.toFixed(2)}
      </p>
    </div>
  )
}
