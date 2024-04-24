/* eslint-disable no-undef */
import { type SyntheticEvent, useRef } from 'react'
import useApp from '../../hooks/useContext'

function ThumbnailChooserMD(): JSX.Element {
  const inpWidthRef = useRef<HTMLInputElement | null>(null)
  const inpHeightRef = useRef<HTMLInputElement | null>(null)
  const { setSelectedThumbType, selectedThumbType } = useApp()

  const scaleUpdater = (): number => {
    const contentWidth = document.querySelector('.my-node')?.clientWidth
    const contentHeight = document.querySelector('.my-node')?.clientHeight

    const scale = Math.min(
      contentWidth! / window.screen.availWidth / 3,
      contentHeight! / window.screen.availHeight / 3,
    )

    return scale
  }

  const handleDimensionChange = (e: SyntheticEvent): void => {
    setSelectedThumbType({
      width: Number(inpWidthRef.current?.value),
      height: Number(inpHeightRef.current?.value),
      scale: scaleUpdater(),
    })
  }

  return (
    <div className='flex items-center  justify-center space-x-4 border border-gray-800 dark:border-gray-200 rounded-lg md:hidden'>
      <div className='flex  items-center  justify-start  py-[6px]  rounded-xl z-40 '>
        <div className='max-w-44 flex items-center justify-center rounded-md px-3'>
          <input
            className='bg-transparent text-[10px] w-12 border-none text-white rounded-md p-1 mr-1 focus:outline-none focus:border-primary'
            type='number'
            onChange={handleDimensionChange}
            value={selectedThumbType?.width}
            ref={inpWidthRef}
          />
          <span className='text-[10px] text-white'>x</span>
          <input
            className='bg-transparent text-[10px] w-12 border-none text-white rounded-md p-1 ml-1 focus:outline-none focus:border-primary'
            type='number'
            ref={inpHeightRef}
            value={selectedThumbType?.height}
            onChange={handleDimensionChange}
          />
          <span className='text-[10px] text-white'>px</span>
        </div>
      </div>
      <div className='relative  rounded-xl border-gray-800 dark:border-gray-200 w-full z-50'>
        <button className='flex items-center justify-start py-2 px-4 w-full z-40 backdrop-blur-md bg-transparent bg-opacity-80 text-white thumbnail-chooser'>
          <img
            src='https://www.moiful.com/socials/youtube.png'
            alt='Video Thumbnail Icon'
            className='w-3 h-3 ml-2'
          />
          <h1 className='text-xs ml-2 hidden md:block'>Video Thumbnail (1280 x 720)</h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-chevron-down w-3 h-3 ml-2'
          >
            <path d='m6 9 6 6 6-6'></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ThumbnailChooserMD
