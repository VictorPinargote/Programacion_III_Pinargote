import { Button, Stack } from 'react-bootstrap'

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
] as const

function LabRbButtons() {
  return (
    <div>
      <h2>Lab: Buttons</h2>
      <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
      </Stack>

      <Stack direction="horizontal" gap={2} className="flex-wrap mb-3">
        {variants.map((variant) => (
          <Button key={variant} variant={`outline-${variant}`}>
            outline-{variant}
          </Button>
        ))}
      </Stack>

      <Stack direction="horizontal" gap={2} className="flex-wrap">
        <Button size="sm" variant="primary">
          small
        </Button>
        <Button variant="primary">normal</Button>
        <Button size="lg" variant="primary">
          large
        </Button>
        <Button variant="primary" disabled>
          disabled
        </Button>
      </Stack>
    </div>
  )
}

export default LabRbButtons
