/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createContext, type Dispatch, type ReactNode, type SetStateAction } from 'react'
import { useState } from 'react'
import { frames, gradientItems, modes } from '../utils/data'
import { type IFrameBorder, type IBackground, type IColor, type IThumb } from '../types'
import { type fabric } from 'fabric'

export interface AppContextDefaults {
  overLay: string | undefined
  selectedTab: string | undefined
  selectedMode: string | undefined
  selectedThumbType: IThumb | null
  selectedFrame: string
  selectedSolid: string | null
  selectedPallet: IColor[] | IBackground[] | null
  showThumbnailTypeDropdown: boolean | null
  gradientDirection: string | null
  texts: fabric.IText[]
  shapes: fabric.Object[]
  image: string | null
  tool: 'POLYGON' | 'ERASER' | 'SELECT'
  frameBorder: IFrameBorder | null
  setOverLay: Dispatch<SetStateAction<string | undefined>>
  setSelectedTab: Dispatch<SetStateAction<string | undefined>>
  setSelectedMode: Dispatch<SetStateAction<string>>
  setSelectedThumbType: Dispatch<SetStateAction<IThumb | null>>
  setSelectedSolid: Dispatch<SetStateAction<string | null>>
  setSelectedPallet: Dispatch<SetStateAction<IColor[] | IBackground[] | null>>
  setSelectedFrame: Dispatch<SetStateAction<string>>
  setShowThumbnailTypeDropdown: Dispatch<SetStateAction<boolean>>
  setGradientDirection: Dispatch<SetStateAction<string>>
  setShapes: Dispatch<SetStateAction<fabric.Object[]>>
  setTexts: Dispatch<SetStateAction<fabric.IText[]>>
  setImage: Dispatch<SetStateAction<string | null>>
  setTool: Dispatch<SetStateAction<'POLYGON' | 'ERASER' | 'SELECT'>>
  setFrameBorder: Dispatch<SetStateAction<IFrameBorder | null>>
}

const defaultContextValue: AppContextDefaults = {
  overLay: undefined,
  selectedTab: undefined,
  selectedMode: undefined,
  selectedThumbType: null,
  selectedFrame: frames[0],
  selectedSolid: null,
  selectedPallet: gradientItems,
  showThumbnailTypeDropdown: false,
  gradientDirection: 'to left bottom',
  texts: [],
  shapes: [],
  image: null,
  tool: 'SELECT',
  frameBorder: null,
  setOverLay: () => {},
  setSelectedTab: () => {},
  setSelectedMode: () => {},
  setSelectedThumbType: () => {},
  setSelectedSolid: () => {},
  setSelectedPallet: () => {},
  setSelectedFrame: () => {},
  setShowThumbnailTypeDropdown: () => {},
  setGradientDirection: () => {},
  setTexts: () => {},
  setImage: () => {},
  setShapes: () => {},
  setTool: () => {},
  setFrameBorder: () => {},
}

export const appContext = createContext<AppContextDefaults>(defaultContextValue)

interface AppContextProps {
  children: ReactNode
  value: AppContextDefaults
}

export default function AppContext({ children, value }: AppContextProps) {
  const [selectedFrame, setSelectedFrame] = useState<string>(frames[0])
  const [selectedMode, setSelectedMode] = useState<string>('light')
  const [selectedPallet, setSelectedPallet] = useState<IColor[] | IBackground[] | null>(
    gradientItems,
  )
  const [selectedSolid, setSelectedSolid] = useState<string | null>(null)
  const [selectedTab, setSelectedTab] = useState<string | undefined>(undefined)
  const [selectedThumbType, setSelectedThumbType] = useState<IThumb | null>(modes[0])
  const [showThumbnailTypeDropdown, setShowThumbnailTypeDropdown] = useState<boolean>(false)
  const [texts, setTexts] = useState<fabric.IText[]>(Array<fabric.IText>)
  const [shapes, setShapes] = useState<fabric.Object[]>(Array<fabric.Object>)
  const [gradientDirection, setGradientDirection] = useState('to left bottom')
  const [image, setImage] = useState<string | null>(null)
  const [overLay, setOverLay] = useState<string | undefined>(undefined)
  const [tool, setTool] = useState<'POLYGON' | 'ERASER' | 'SELECT'>('SELECT')
  const [frameBorder, setFrameBorder] = useState<IFrameBorder | null>({left: 0, top: 0, width: 0, height: 0});

  return (
    <appContext.Provider
      value={{
        selectedFrame,
        setSelectedFrame,
        selectedMode,
        setSelectedMode,
        selectedPallet,
        setSelectedPallet,
        selectedSolid,
        setSelectedSolid,
        selectedTab,
        setSelectedTab,
        selectedThumbType,
        setSelectedThumbType,
        showThumbnailTypeDropdown,
        setShowThumbnailTypeDropdown,
        gradientDirection,
        setGradientDirection,
        texts,
        setTexts,
        image,
        setImage,
        shapes,
        setShapes,
        overLay,
        setOverLay,
        tool,
        setTool,
        frameBorder,
        setFrameBorder
      }}
    >
      {children}
    </appContext.Provider>
  )
}
