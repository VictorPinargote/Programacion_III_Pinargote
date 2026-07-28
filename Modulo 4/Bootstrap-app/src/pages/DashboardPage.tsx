// src/pages/DashboardPage.tsx

import { Alert, Container } from 'react-bootstrap'

export default function DashboardPage() {
  return (
    <Container className="py-5">
      <h1 className="h3 fw-bold mb-3">Dashboard</h1>
      <Alert variant="success">
        Inicio de sesión simulado correctamente. Esta es la página a la que
        redirige <code>LoginPage</code> con <code>navigate('/dashboard', {'{'} replace: true {'}'})</code>.
      </Alert>
    </Container>
  )
}
