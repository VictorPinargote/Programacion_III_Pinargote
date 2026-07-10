import { useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import LabRbButtons from './lab/LabRbButtons'
import LabRbAlert from './lab/LabRbAlert'
import LabRbCard from './lab/LabRbCard'
import LabRbForm from './lab/LabRbForm'
import LabRbTable from './lab/LabRbTable'

const labs = {
  buttons: { label: 'Buttons', component: LabRbButtons },
  alert: { label: 'Alert', component: LabRbAlert },
  card: { label: 'Card', component: LabRbCard },
  form: { label: 'Form', component: LabRbForm },
  table: { label: 'Table', component: LabRbTable },
} as const

type LabKey = keyof typeof labs

function AppLab() {
  const [selected, setSelected] = useState<LabKey>('buttons')
  const LabComponent = labs[selected].component

  return (
    <Container className="py-4">
      <h1 className="mb-4">Fase 1: Selector de componentes</h1>
      <Nav
        variant="pills"
        activeKey={selected}
        onSelect={(key) => key && setSelected(key as LabKey)}
        className="mb-4"
      >
        {(Object.keys(labs) as LabKey[]).map((key) => (
          <Nav.Item key={key}>
            <Nav.Link eventKey={key}>{labs[key].label}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <LabComponent />
    </Container>
  )
}

export default AppLab
