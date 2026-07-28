import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import AppLab from './AppLab'
import AppHome from './AppHome'

function App() {
  const [phase, setPhase] = useState<'lab' | 'home'>('lab')

  return (
    <>
      <Container className="d-flex justify-content-end gap-2 pt-3">
        <Button
          variant={phase === 'lab' ? 'primary' : 'outline-primary'}
          onClick={() => setPhase('lab')}
        >
          Fase 1: Lab
        </Button>
        <Button
          variant={phase === 'home' ? 'primary' : 'outline-primary'}
          onClick={() => setPhase('home')}
        >
          Fase 2: Landing
        </Button>
      </Container>

      {phase === 'lab' ? <AppLab /> : <AppHome />}
    </>
  )
}

export default App
