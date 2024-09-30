/* eslint-disable no-undef */
import { type SyntheticEvent, useRef, useState } from 'react'
import useApp from '../../hooks/useContext'
import { colors } from '../../utils/data'
import { useOutsideAlerter } from '../../hooks/useClickedOutside'
import { RgbStringColorPicker } from 'react-colorful'

export default function Solid(): JSX.Element {
  const { setSelectedPallet, setSelectedSolid, selectedSolid } = useApp()
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false)
  const colorWrapperRef = useRef<HTMLDivElement>(null)
  useOutsideAlerter(colorWrapperRef, () => {
    setShowColorPicker((old) => !old)
  })

  const onSelectColor = (index: number): void => {
    setSelectedSolid(colors[index].color)
    setSelectedPallet([{ color: colors[index].color }])
  }

  function onUpdateColor<Eve extends SyntheticEvent<any>>(e: Eve): void {
    e.stopPropagation()
    e.preventDefault()
    setShowColorPicker((current) => {
      return !current
    })
  }

  function onColorChanging(newColor: string): void {
    setShowColorPicker(true)
    setSelectedSolid(newColor)
    setSelectedPallet([{ color: newColor }])
  }

  return (
    <div
      className='show-smoothly color-ui'
      style={{
        maxHeight: 'calc(-200px + 100vh)',
        opacity: 1,
      }}
    >
      <h1
        className='text-sm font-medium mb-6 text-white mt-5'
        style={{
          opacity: 1,
          transform: 'none',
        }}
      >
        Images
      </h1>
      <div className='current-image mt-3'>
        <div
          className='relative gradient-item'
          style={{
            transform: 'none',
          }}
        >
          <button
            onClick={onUpdateColor}
            className='chosen-color relative w-10 h-10 rounded-full cursor-pointer border-2 border-blue-500'
            type='button'
            style={{ backgroundColor: selectedSolid ?? 'rgb(51, 161, 255)' }}
          ></button>
          {showColorPicker && (
            <div
              ref={colorWrapperRef}
              className='absolute top-full start-0 opacity-1 transition-opacity duration-700'
            >
              <RgbStringColorPicker
                color={selectedSolid ?? 'rgb(51, 161, 255)'}
                onClick={(e) => {
                  e.stopPropagation()
                }}
                onChange={(newColor) => {
                  onColorChanging(newColor)
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className='colors-ui'>
        <h2
          className='text-lg font-medium text-white mb-4'
          style={{
            opacity: 1,
            transform: 'none',
          }}
        >
          Color Palettes
        </h2>
        <div className='grid grid-cols-3 lg:grid-cols-4  gap-1'>
          {colors.map(({ color }, index) => (
            <div
              key={index}
              className='color-box'
              style={{
                opacity: 1,
                transform: 'none',
              }}
              onClick={() => {
                onSelectColor(index)
              }}
            >
              <div
                className='w-full h-20 rounded-lg overflow-hidden  cursor-pointer'
                style={{ background: color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
