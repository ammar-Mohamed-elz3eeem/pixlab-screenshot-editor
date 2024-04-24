/* eslint-disable no-undef */
import { type SyntheticEvent, useRef } from 'react'
import GradientIcon from '../partials/GradientIcon'
import useApp from '../../hooks/useContext'
import Gradient from './Gradient'
import Solid from './Solid'
import Image from './Image'
import Frame from './Frame'
import Text from './Text'

export default function Tabs({
  onTabClick,
}: {
  onTabClick: (t: string | undefined) => void
}): JSX.Element {
  const { selectedTab, setSelectedTab, selectedMode } = useApp()

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
        data-mode='shape'
        onClick={setTab}
        className={`tab min-h-[50px] text-xs flex flex-col items-center text-center justify-center cursor-pointer ${
          selectedTab === 'shape' && 'active'
        }`}
      >
        <span className='icon icon-radio-unchecked text-[1rem] w-4 hw-4'></span>
        <p>Shapes</p>
      </div>
    </>
  )
}

export { Gradient, Solid, Image, Frame, Text }
