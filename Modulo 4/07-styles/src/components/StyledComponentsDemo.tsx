// src/components/StyledComponentsDemo.tsx

import styled from 'styled-components'

// Props transient con prefijo $ — no pasan al DOM en v6
interface BtnProps {
  $variant?: 'primary' | 'outline' 
}

const Card = styled.div`
  border:        1px solid var(--border);
  background:    var(--card);
  border-radius: 10px;
  padding:       16px;
`

const Title = styled.h3`
  margin:      0 0 8px 0;
  color:       var(--accent);
  font-weight: 800;
`

const Btn = styled.button<BtnProps>`
  padding:       8px 16px;
  border-radius: 8px;
  cursor:        pointer;
  font-weight:   600;
  border:        1px solid var(--accent);
  background:    ${p => p.$variant === 'outline' ? 'transparent' : 'var(--accent)'};
  color:         ${p => p.$variant === 'outline' ? 'var(--accent)' : 'white'};
  transition:    filter 0.15s;

  &:hover {
    filter: brightness(1.1);
  }
`
const Parrafo = styled.p`
  border:        1px solid var(--border);
  background:    var(--par);
  border-radius: 10px;
  padding:       16px;
`

const BigTitle = styled.h1`
  border:        1px solid var(--border);
  background:    var(--card);
  border-radius: 10px;
  padding:       16px;
`
export default function StyledComponentsDemo() {
  return (
    <Card>
      <Title>Styled-components v6</Title>
      <p style={{ margin: '0 0 12px', color: 'var(--muted)' }}>
        CSS-in-JS con scope automático. Props transient con prefijo <code>$</code>
        en v6 para no contaminar el DOM.
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <Btn>Primary</Btn>
        <Btn $variant="outline">Outline</Btn>
      </div>
      <BigTitle>ReactJs</BigTitle>
      <Parrafo>este es un parrafo de ejemplo</Parrafo>
    </Card>
  )
}