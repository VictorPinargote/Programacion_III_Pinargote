// Uso — renombra value al desestructurar para mayor claridad
import { useToggle_mp } from '../hooks/useToggle_mp'

export default function ModalDemo_mp() {
  const { value: isOpen, toggle, setFalse } = useToggle_mp()

  return (
    <>
      <button onClick={toggle}>Ver detalle del rol de pagos</button>
      {isOpen && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff', borderRadius: 10,
            padding: 24, minWidth: 300,
          }}>
            <h3 style={{ marginTop: 0 }}>Rol de Pagos</h3>
            <p>Sueldo base más bonificaciones, menos deducciones del mes.</p>
            <button onClick={setFalse}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  )
}
