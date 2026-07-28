// src/components/BusinessCard.tsx

interface BusinessCardProps {
  name: string
  email: string
  phone?: string
  website?: string
}

export default function BusinessCard({ name, email, phone, website }: BusinessCardProps) {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 10,
        padding: 20,
        maxWidth: 320,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <h2 style={{ margin: 0, fontSize: 18 }}>{name}</h2>
      <p style={{ margin: 0, fontSize: 14, color: '#555' }}>✉️ {email}</p>
      {phone   && <p style={{ margin: 0, fontSize: 14, color: '#555' }}>📞 {phone}</p>}
      {website && <p style={{ margin: 0, fontSize: 14, color: '#6366f1' }}>🌐 {website}</p>}
    </div>
  )
}
