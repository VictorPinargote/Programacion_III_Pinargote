// src/layouts/RootLayout.tsx

import { Outlet } from 'react-router-dom'
import TwNavbar from '../components/tw/TwNavbar'
import TwFooter from '../components/tw/TwFooter'

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <TwNavbar />
      <main className="flex-grow">
        <Outlet /> {/* aquí se renderiza la página activa */}
      </main>
      <TwFooter />
    </div>
  )
}
