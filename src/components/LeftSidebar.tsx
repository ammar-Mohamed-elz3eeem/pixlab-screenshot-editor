/* eslint-disable no-undef */
import { useRef, useState } from 'react'
import Tabs from './tabs/index'

import { tabs } from '../utils/data'

export default function LeftSidebar(): JSX.Element {
  const refSidebarContent = useRef<HTMLDivElement>(null)
  const refShowSidebar = useRef<boolean>(false)
  const [currentTab, setCurrentTab] = useState<string | undefined>('gradient')

  const handleTabClicked = (mode: string | undefined): void => {
    setCurrentTab((prev: string | undefined) => {
      if (prev === mode) {
        // console.log('mode == prev', mode, prev)
        refSidebarContent.current?.classList.toggle('show')
        refShowSidebar.current = !refShowSidebar.current
      } else {
        // console.log('mode != prev', mode, prev)
        refSidebarContent.current?.classList.add('show')
        refShowSidebar.current = true
      }
      return mode
    })
  }

  const toggleSidebar = (): void => {
    refShowSidebar.current = !refShowSidebar.current
    refSidebarContent.current?.classList.toggle('show')
  }

  return (
    <div
      id='right-sidebar'
      className='md:flex flex-row items-start justify-center md:items-start md:justify-start md:flex-grow-0 md:flex-basis-1/3 md:mt-[65px] md:fixed md:top-0 md:left-0 md:h-screen'
    >
      <div className='md:min-w-[72px] relative h-full border-r border-slate-800 dark:border-slate-200 bg-[#191922] dark:bg-[#e1e1d5] z-10'>
        <div className='flex flex-row'>
          <div className='grid grid-cols-1 rounded-lg text-white dark:text-black w-full min-w-full'>
            <Tabs onTabClick={handleTabClicked} />
          </div>
        </div>
      </div>
      <div
        ref={refSidebarContent}
        className={`right-sidebarContent md:h-screen overflow-y-auto no-scrollbar text-left h-full border-r border-slate-800 dark:border-slate-200 bg-[#2b2c2f] dark:bg-[#D3D2CF] text-white w-0 z-0 opacity-0 ${
          refShowSidebar.current ? 'show' : ''
        }`}
      >
        <div className='p-5'>
          {typeof currentTab !== 'undefined' ? tabs[currentTab] : tabs.gradient}
        </div>
      </div>
      <div
        className='absolute show-sidebar top-1/2 text-center -translate-y-1/2 table -end-6 bg-[#2b2c2f] dark:bg-[#D3D2CF] w-6 h-20 rounded-e-2xl z-10'
        onClick={toggleSidebar}
      >
        <span className='icon icon-cheveron-right text-white dark:text-black table-cell align-middle'></span>
      </div>
    </div>
  )
}
