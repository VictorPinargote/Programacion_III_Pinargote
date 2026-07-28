import { NavLink } from 'react-router-dom'

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded transition-colors ${
    isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
  }`

export default function TwNavbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <NavLink to="/" className="text-white font-bold text-lg">
          DevCursos
        </NavLink>
        <div className="flex gap-1">
          <NavLink to="/" end className={linkClasses}>
            Inicio
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            Acerca de
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contáctanos
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
