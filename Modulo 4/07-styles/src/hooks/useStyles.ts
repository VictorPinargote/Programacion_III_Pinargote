// src/hooks/useStyles.ts

import { useState, useCallback } from 'react'
import type { CSSProperties } from 'react'

interface UseStylesReturn {
  style:    CSSProperties
  setBackgroundColor: (backgroundColor: string) => void
  setColor: (color: string) => void
  setSize:  (size: number) => void
  setBold:  (bold: boolean) => void
  reset:    () => void
}

const DEFAULT: CSSProperties = {
  color:           '#111827',
  backgroundColor: '#b81c1c',
  fontSize:        16,
  fontWeight:      400,
}

export function useStyles(
  initial: CSSProperties = DEFAULT
): UseStylesReturn {
  const [style, setStyle] = useState<CSSProperties>(initial)

  const setColor = useCallback((color: string) => {
    setStyle(prev => ({ ...prev, color }))
  }, [])

  const setBackgroundColor = useCallback((backgroundColor: string) => {
    setStyle(prev => ({ ...prev, backgroundColor }))
  }, [])

  const setSize = useCallback((size: number) => {
    setStyle(prev => ({ ...prev, fontSize: size }))
  }, [])

  const setBold = useCallback((bold: boolean) => {
    setStyle(prev => ({ ...prev, fontWeight: bold ? 700 : 400 }))
  }, [])

  const reset = useCallback(() => setStyle(initial), [initial])

  return { style, setBackgroundColor, setColor, setSize, setBold, reset }
}
