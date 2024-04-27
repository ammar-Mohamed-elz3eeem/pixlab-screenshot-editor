/* eslint-disable no-undef */
import { lazy, Suspense } from 'react'
import AppContext from './context/appContext'
import FabricProvider from './context/fabricContext'
import useApp from './hooks/useContext'

const LazyHome = lazy(async () => await import('./Home'))

export default function App(): JSX.Element {
  const ctx = useApp()

  return (
    <AppContext value={{ ...ctx }}>
      <FabricProvider>
        <Suspense fallback={<div>Loading ...</div>}>
          <LazyHome />
        </Suspense>
      </FabricProvider>
    </AppContext>
  )
}
