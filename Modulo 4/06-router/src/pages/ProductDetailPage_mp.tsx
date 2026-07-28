// src/pages/ProductDetailPage_mp.tsx

import { useParams, Link } from 'react-router-dom'

// Define el tipo de los parámetros de la URL
interface EmpleadoParams {
  id: string   // los params siempre son string — convierte si necesitas número
}

export default function ProductDetailPage_mp() {
  const { id } = useParams<EmpleadoParams>()

  // Convierte a número cuando lo necesites
  const empleadoId = Number(id)

  if (!id || isNaN(empleadoId)) {
    return <p style={{ color: '#ef4444' }}>ID de empleado inválido.</p>
  }

  return (
    <div>
      <Link
        to="/empleados"
        style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}
      >
        ← Volver a empleados
      </Link>
      <h1 style={{ marginTop: 12 }}>Empleado #{empleadoId}</h1>
      <p style={{ color: '#6b7280' }}>
        Aquí iría el detalle del empleado con ID {empleadoId}.
      </p>
    </div>
  )
}
