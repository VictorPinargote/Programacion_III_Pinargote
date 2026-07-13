import { useState } from 'react'
import LabTwButtons from './lab/LabTwButtons'
import LabTwAlert from './lab/LabTwAlert'
import LabTwCard from './lab/LabTwCard'
import LabTwForm from './lab/LabTwForm'
import LabTwTable from './lab/LabTwTable'

const labs = {
  buttons: { label: 'Buttons', component: LabTwButtons },
  alert: { label: 'Alert', component: LabTwAlert },
  card: { label: 'Card', component: LabTwCard },
  form: { label: 'Form', component: LabTwForm },
  table: { label: 'Table', component: LabTwTable },
} as const

type LabKey = keyof typeof labs

function AppLab() {
  const [selected, setSelected] = useState<LabKey>('buttons')
  const LabComponent = labs[selected].component

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Fase 1: Selector de componentes</h1>
      <nav className="flex flex-wrap gap-2 mb-4">
        {(Object.keys(labs) as LabKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selected === key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {labs[key].label}
          </button>
        ))}
      </nav>

      <LabComponent />
    </div>
  )
}

export default AppLab
