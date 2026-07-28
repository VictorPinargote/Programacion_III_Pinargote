// src/App_mp.tsx

/*import PrimeSieve_mp        from './components/PrimeSieve_mp'
import FilteredCatalog_mp   from './components/FilteredCatalog_mp'
import OrderMetrics      from './components/OrderMetrics'
import MultiTagFilter    from './components/MultiTagFilter'
import MemoizedList_mp from './components/MemoizedList_mp'
import ModalDemo_mp from './components/ModalDemo_mp'*/
import PostList_mp from './components/Post_mp'
import ThemeSelector_mp from './components/ThemeSelector_mp'
/*import PaginatedFetch_mp from './components/PaginatedFetch_mp'
*/
// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  Sistema de Control de Nóminas                                       │
// │  1  PrimeSieve_mp       — useMemo para cálculo costoso (criba primos)  │
// │  2  FilteredCatalog_mp  — dos useMemo encadenados: filtrar → ordenar   │
// │  3  OrderMetrics     — múltiples useMemo derivados de un filtro     │
// │  4  MultiTagFilter   — filtro AND por tags con conteos memoizados   │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 13

export default function App_mp() {
  const content =
    /*PASO === 1 ? <PrimeSieve_mp /> :
    PASO === 2 ? <FilteredCatalog_mp /> :
    PASO === 3 ? <OrderMetrics /> :
    PASO === 4 ? <MultiTagFilter /> :
    PASO === 5 ? <MemoizedList_mp /> :
    PASO === 6 ? <SearchWithFetch /> :
    PASO === 7 ? <FilterTable /> :
    PASO === 8 ? <PaginatedFetch_mp /> :
    PASO === 9 ? <ModalDemo_mp /> :
    PASO === 10 ? <QuantitySelector /> :
    PASO === 11 ? <ThemeSelector_mp /> :
    PASO === 12 ? <LiveSearch /> :*/
    PASO === 13 ? <PostList_mp /> :
    /*PASO === 14 ? <ResponsiveLayout /> :
    PASO === 15 ? <CodeBlock code={EXAMPLE_CODE} language="tsx" /> :*/
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 620, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
