import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App_mp from './App_mp.tsx'
import { AuthProvider_mp } from './contexts/AuthContext_mp'
import { ThemeProvider_mp } from './contexts/ThemeContext_mp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider_mp>
      <ThemeProvider_mp>
        <App_mp />
      </ThemeProvider_mp>
    </AuthProvider_mp>
  </StrictMode>,
)