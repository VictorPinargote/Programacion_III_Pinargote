// src/layouts/RootLayout.tsx

import { Outlet } from 'react-router-dom'
import RBNavbar from '../components/rb/RBNavbar'
import RBFooter from '../components/rb/RBFooter'

export default function RootLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <RBNavbar />
      <main className="flex-grow-1">
        <Outlet /> {/* aquí se renderiza la página activa */}
      </main>
      <RBFooter />
    </div>
  )
}
