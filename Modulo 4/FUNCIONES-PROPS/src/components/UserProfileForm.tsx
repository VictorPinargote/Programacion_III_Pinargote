import { useState } from 'react'

interface UserProfile {
  name: string
  email: string
  age: number
}

export default function UserProfileForm() {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    age: 0,
  })

  function handleChange(field: keyof UserProfile, value: string | number) {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <form style={formStyle}>
      <h1 style={titleStyle}>Perfil de usuario</h1>

      <label style={labelStyle}>
        Nombre
        <input
          placeholder="Ej: Ana Garcia"
          value={profile.name}
          onChange={(event) => handleChange('name', event.target.value)}
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Email
        <input
          placeholder="ana@correo.com"
          type="email"
          value={profile.email}
          onChange={(event) => handleChange('email', event.target.value)}
          style={inputStyle}
        />
      </label>

      <label style={labelStyle}>
        Edad
        <input
          min={0}
          placeholder="18"
          type="number"
          value={profile.age}
          onChange={(event) => handleChange('age', Number(event.target.value))}
          style={inputStyle}
        />
      </label>

      <div style={previewStyle}>
        <strong>{profile.name || 'Sin nombre'}</strong>
        <span>{profile.email || 'Sin email'}</span>
        <span>{profile.age ? `${profile.age} anios` : 'Sin edad'}</span>
      </div>
    </form>
  )
}

const formStyle = {
  border: '1px solid #ddd',
  borderRadius: 8,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
} satisfies React.CSSProperties

const titleStyle = {
  margin: '0 0 4px',
  fontSize: 22,
} satisfies React.CSSProperties

const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  fontSize: 14,
  fontWeight: 600,
} satisfies React.CSSProperties

const inputStyle = {
  border: '1px solid #ccc',
  borderRadius: 6,
  padding: '9px 10px',
  fontSize: 14,
} satisfies React.CSSProperties

const previewStyle = {
  marginTop: 8,
  padding: 12,
  borderRadius: 6,
  background: '#f5f5f5',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  fontSize: 14,
} satisfies React.CSSProperties
