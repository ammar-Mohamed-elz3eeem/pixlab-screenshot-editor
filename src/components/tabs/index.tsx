/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import { type SyntheticEvent, useRef } from 'react'
import GradientIcon from '../partials/GradientIcon'
import useApp from '../../hooks/useContext'
import Gradient from './Gradient'
import Solid from './Solid'
import Image from './Image'
import Frame from './Frame'
import Text from './Text'
import { Tooltip } from 'react-tooltip'
import useFabric from '../../hooks/useFabric'
import usePolygon from '../../hooks/usePolygon'

export default function Tabs({
  onTabClick,
}: {
  onTabClick: (t: string | undefined) => void
}): JSX.Element {
  const { selectedTab, setSelectedTab, selectedMode, setTool } = useApp()
  const [_, setDrawMode] = usePolygon()

  const {
    canvas: { fabContext },
  } = useFabric()

  const activeTabRef = useRef<HTMLDivElement>(null)

  const setTab = function (e: SyntheticEvent): void {
    setSelectedTab((e.currentTarget as HTMLElement).dataset.mode)
    if (typeof activeTabRef.current !== 'undefined') {
      ;(activeTabRef.current as HTMLElement).style.transform = `translateY(${
        e.currentTarget.getBoundingClientRect().top - 65
      }px)`
    }
    onTabClick((e.currentTarget as HTMLElement).dataset.mode)
  }

  return (
    <>
      <div
        ref={activeTabRef}
        className='active-tab absolute w-full h-[50px] bg-[#2b2c2f] dark:bg-[#D3D2CF]'
      ></div>
      <div
        data-tooltip-id='gradient-tooltip'
        onClick={setTab}
        data-mode='gradient'
        className={`tab min-h-[50px] text-xs flex flex-col items-center justify-center cursor-pointer ${
          selectedTab === 'gradient' && 'active'
        }`}
      >
        <span className='icon icon-gradient'>
          <GradientIcon fillColor={selectedMode === 'dark' ? 'black' : 'white'} />
        </span>
        <p>Gradient</p>
      </div>
      <div
        data-tooltip-id='solid-tooltip'
        data-mode='solid'
        onClick={setTab}
        className={`tab min-h-[50px] text-xs flex flex-col items-center text-center justify-center cursor-pointer ${
          selectedTab === 'solid' && 'active'
        }`}
      >
        <span className='icon icon-format_color_fill text-[1rem] w-4 h-4'></span>
        <p>Solid</p>
      </div>
      <div
        data-tooltip-id='image-tooltip'
        data-mode='image'
        onClick={setTab}
        className={`tab min-h-[50px] text-xs flex flex-col items-center text-center justify-center cursor-pointer ${
          selectedTab === 'image' && 'active'
        }`}
      >
        <span className='icon icon-image text-[1rem] w-4 h-4'></span>
        <p>Image</p>
      </div>
      <div
        data-tooltip-id='frame-tooltip'
        data-mode='frame'
        onClick={setTab}
        className={`tab min-h-[50px] text-xs flex flex-col items-center text-center justify-center cursor-pointer ${
          selectedTab === 'frame' && 'active'
        }`}
      >
        <span className='icon icon-frame text-[1rem] w-4 hw-4'></span>
        <p>Frame</p>
      </div>
      <div
        data-tooltip-id='text-tooltip'
        data-mode='text'
        onClick={setTab}
        className={`tab min-h-[50px] text-xs flex flex-col items-center text-center justify-center cursor-pointer ${
          selectedTab === 'text' && 'active'
        }`}
      >
        <span className='icon icon-text text-[1rem] w-4 hw-4'></span>
        <p>Text</p>
      </div>
      <div
        data-tooltip-id='shape-tooltip'
        data-mode='shape'
        onClick={setTab}
        className={`tab min-h-[50px] text-xs flex flex-col items-center text-center justify-center cursor-pointer ${
          selectedTab === 'shape' && 'active'
        }`}
      >
        <span className='icon icon-radio-unchecked text-[1rem] w-4 hw-4'></span>
        <p>Shapes</p>
      </div>
      <div
        data-tooltip-id='free-draw-tooltip'
        data-mode='free-draw'
        onClick={setTab}
        className={`tab min-h-[50px] text-xs flex flex-col items-center text-center justify-center cursor-pointer ${
          selectedTab === 'free-draw' && 'active'
        }`}
      >
        <span className='icon icon-brush text-[1rem] w-4 hw-4'></span>
        <p>Draw</p>
      </div>
      <div
        data-tooltip-id='polygon-tooltip'
        data-mode='polygon'
        onClick={(e) => {
          setTab(e)
          setTool('POLYGON')
          if (fabContext) setDrawMode((isDraw) => !isDraw)
        }}
        className={`tab min-h-[50px] text-xs flex flex-col items-center text-center justify-center cursor-pointer ${
          selectedTab === 'polygon' && 'active'
        }`}
      >
        <span className='icon icon-brush text-[1rem] w-4 hw-4'></span>
        <p>Polygon</p>
      </div>
      <Tooltip id='gradient-tooltip' content='Set Box Gradient' />
      <Tooltip id='solid-tooltip' content='Set Box Color' />
      <Tooltip id='image-tooltip' content='Set Box Image' />
      <Tooltip id='frame-tooltip' content='Set Box Frame' />
      <Tooltip id='text-tooltip' content='Add Textbox to your thumbnail' />
      <Tooltip id='shape-tooltip' content='Add Shape to your thumbnail' />
      <Tooltip id='free-draw-tooltip' content='Free Draw with brushes, pattern & more' />
      <Tooltip id='polygon-tooltip' content='Free Draw with brushes, pattern & more' />
    </>
  )
}

export { Gradient, Solid, Image, Frame, Text }
