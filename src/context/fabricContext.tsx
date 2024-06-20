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
  pointArray: CustomFabricCircle[] | undefined
  setPointArray: Dispatch<SetStateAction<CustomFabricCircle[] | undefined>>
  lineArray: CustomFabricLine[] | undefined
  setLineArray: Dispatch<SetStateAction<CustomFabricLine[] | undefined>>
  activeLine: CustomFabricLine | null
  setActiveLine: Dispatch<SetStateAction<CustomFabricLine | null>>
  activeShape: fabric.Polygon | null
  setActiveShape: Dispatch<SetStateAction<fabric.Polygon | null>>
  drawMode: boolean
  setDrawMode: Dispatch<SetStateAction<boolean>>
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
  pointArray: [],
  setPointArray: () => {},
  lineArray: [],
  setLineArray: () => {},
  activeLine: null,
  setActiveLine: () => {},
  activeShape: null,
  setActiveShape: () => {},
  drawMode: false,
  setDrawMode: () => {},
}

export interface CustomFabricLine extends fabric.Line {
  class: string
}

export interface CustomFabricCircle extends fabric.Circle {
  id: string
}

export interface CustomFabricPolygon extends fabric.Polygon {
  id: string
}

export const fabricContext = createContext<FabricContext>(defaultValues)

export default function FabricProvider({ children }: { children: ReactNode }): JSX.Element {
  const [fabContext, setFabContext] = useState<fabric.Canvas>()
  const [fabImage, setFabImage] = useState<fabric.Image>()
  const [selectedObjects, setSelectedObjects] = useState<fabric.Object[]>()
  const [canvasRadius, setCanvasRadius] = useState<number>(0)
  const [pointArray, setPointArray] = useState<CustomFabricCircle[] | undefined>()
  const [lineArray, setLineArray] = useState<CustomFabricLine[] | undefined>()
  const [activeLine, setActiveLine] = useState<CustomFabricLine | null>(null)
  const [activeShape, setActiveShape] = useState<fabric.Polygon | null>(null)
  const [drawMode, setDrawMode] = useState<boolean>(false)

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
        pointArray,
        setPointArray,
        lineArray,
        setLineArray,
        activeLine,
        setActiveLine,
        activeShape,
        setActiveShape,
        drawMode,
        setDrawMode,
      }}
    >
      {children}
    </fabricContext.Provider>
  )
}
