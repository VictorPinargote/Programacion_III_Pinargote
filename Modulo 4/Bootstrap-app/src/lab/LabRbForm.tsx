// src/lab/LabRbForm.tsx

import { useState } from 'react'
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap'

interface FormValues {
  name:  string
  email: string
  role:  string
}

export default function LabRbForm() {
  const [values,  setValues]  = useState<FormValues>({ name: '', email: '', role: 'viewer' })
  const [success, setSuccess] = useState(false)
  const [errors,  setErrors]  = useState<Partial<FormValues>>({})

  function validate(): boolean {
    const e: Partial<FormValues> = {}
    if (!values.name.trim())         e.name  = 'El nombre es requerido'
    if (!values.email.includes('@'))  e.email = 'Email inválido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    setSuccess(true)
    setValues({ name: '', email: '', role: 'viewer' }), {/* el setValues sirve para que una vez que ya se hizo un regitro o se completo el campo de texto se reinicie y se ponga en blanco de nuevo, en este caso se le esta pidiendo a  name, email, role. asi que estos son los campos que se van a reinicar al momento de  dale al boton de regitrar */}
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Form</h2>
      <p className="text-secondary mb-3">Con validación manual y feedback visual.</p>
      


      {success && <Alert variant="success">El registro se envio correctamente</Alert>}


      <Form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
        <Row className="g-3">
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                value={values.name}
                onChange={e => setValues(v => ({ ...v, name: e.target.value }))}
                isInvalid={!!errors.name}
                placeholder="Romeo Robles"
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                value={values.email}
                onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
                isInvalid={!!errors.email}
                placeholder="romeorobles@gmail.com"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group>
              <Form.Label>Rol</Form.Label>
              <Form.Select
                value={values.role}
                onChange={e => setValues(v => ({ ...v, role: e.target.value }))}
              >
                <option value="viewer">Viewer</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Button type="submit" variant="primary">Registrar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}