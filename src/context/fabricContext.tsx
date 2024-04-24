/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable no-undef */
import {
  createContext,
  type ReactNode,
  useState,
  type Dispatch,
  type SetStateAction,
  useEffect,
} from 'react'
import useApp from '../hooks/useContext'
import { type fabric } from 'fabric'

export interface FabricContext {
  fabContext: fabric.Canvas | undefined
  setFabContext: Dispatch<SetStateAction<fabric.Canvas | undefined>>
  fabImage: fabric.Image | undefined
  setFabImage: Dispatch<SetStateAction<fabric.Image | undefined>>
  selectedObjects: fabric.Object[] | undefined
  setSelectedObjects: Dispatch<SetStateAction<fabric.Object[] | undefined>>
  canvasRadius: number
  setCanvasRadius: Dispatch<SetStateAction<number>>
}

const defaultValues: FabricContext = {
  fabContext: undefined,
  setFabContext: () => {},
  fabImage: undefined,
  setFabImage: () => {},
  selectedObjects: undefined,
  setSelectedObjects: () => {},
  canvasRadius: 0,
  setCanvasRadius: () => {},
}

export const fabricContext = createContext<FabricContext>(defaultValues)

export default function FabricProvider({ children }: { children: ReactNode }): JSX.Element {
  const [fabContext, setFabContext] = useState<fabric.Canvas>()
  const [fabImage, setFabImage] = useState<fabric.Image>()
  const [selectedObjects, setSelectedObjects] = useState<fabric.Object[]>()
  const [canvasRadius, setCanvasRadius] = useState<number>(0)

  const { selectedThumbType } = useApp()

  useEffect(() => {
    fabContext?.setWidth(selectedThumbType?.width!)
    fabContext?.setHeight(selectedThumbType?.height!)
  }, [selectedThumbType?.width, selectedThumbType?.height])

  return (
    <fabricContext.Provider
      value={{
        fabContext,
        setFabContext,
        fabImage,
        setFabImage,
        selectedObjects,
        setSelectedObjects,
        canvasRadius,
        setCanvasRadius,
      }}
    >
      {children}
    </fabricContext.Provider>
  )
}
