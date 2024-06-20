/* eslint-disable no-undef */

import { type SyntheticEvent, useRef, useState } from 'react'
import { RgbStringColorPicker } from 'react-colorful'
import { useOutsideAlerter } from '../../hooks/useClickedOutside'

interface ColorChooserProps {
  currentColor: string
  onChange: (newColor: string) => void
}

function ColorChoser({ currentColor, onChange }: ColorChooserProps): JSX.Element {
  const [isActive, setIsActive] = useState(false)
  const colorWrapperRef = useRef<HTMLDivElement>(null)
  useOutsideAlerter(colorWrapperRef, () => {
    setIsActive((old) => !old)
  })

  function onUpdateColor<Eve extends SyntheticEvent<any>>(e: Eve): void {
    e.stopPropagation()
    e.preventDefault()
    setIsActive((current) => {
      return !current
    })
  }

  return (
    <div onClick={onUpdateColor}>
      <button
        className='relative w-10 h-10 rounded-full cursor-pointer border-2 border-white'
        type='button'
        aria-expanded='false'
        style={{ backgroundColor: currentColor }}
      ></button>
      {isActive && (
        <div
          ref={colorWrapperRef}
          className='absolute top-full start-0 opacity-1 transition-opacity duration-700'
        >
          <RgbStringColorPicker
            color={currentColor}
            onClick={(e) => {
              e.stopPropagation()
            }}
            onChange={(newColor) => {
              onChange(newColor)
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ColorChoser
