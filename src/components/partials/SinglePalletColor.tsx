/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useRef, useState, type SyntheticEvent } from 'react'
import useApp from '../../hooks/useContext'
import { RgbStringColorPicker } from 'react-colorful'
import { type IColor, type IBackground } from '../../types/index'
import { useOutsideAlerter } from '../../hooks/useClickedOutside'

interface SinglePalletColorProps {
  color: string
  index: number
}

export default function SinglePalletColor({ color, index }: SinglePalletColorProps) {
  const { setSelectedPallet, selectedPallet } = useApp()
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false)
  const colorWrapperRef = useRef<HTMLDivElement>(null)
  useOutsideAlerter(colorWrapperRef, () => {
    setShowColorPicker((old) => !old)
  })

  const onDeleteColor = (index: number) => {
    setSelectedPallet((curr: any) => {
      if (curr !== null) {
        return curr.filter((val: IColor | IBackground, idx: number) => idx !== index)
      }
      return null
    })
  }

  function onUpdateColor<Eve extends SyntheticEvent<any>>(e: Eve, index: number): void {
    e.stopPropagation()
    e.preventDefault()
    setShowColorPicker((current) => {
      // console.log('Inside state changer')
      return !current
    })
  }

  function onColorChanging(newColor: string, index: number): void {
    setShowColorPicker(true)
    setSelectedPallet(
      (selectedPallet as IColor[])?.map(
        (color, i) => (i === index && { color: newColor }) || color,
      ) || selectedPallet,
    )
  }

  return (
    <div
      className='relative gradient-item'
      onClick={(e) => {
        onUpdateColor(e, index)
      }}
    >
      <div>
        <button
          className='relative w-10 h-10 rounded-full cursor-pointer border-2 border-white'
          type='button'
          aria-expanded='false'
          style={{ backgroundColor: color }}
        >
          <span className='absolute -top-1 p-0.5 -right-1 bg-blue-500 rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='12'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-x remove-color'
              onClick={() => {
                onDeleteColor(index)
              }}
            >
              <path d='M18 6 6 18'></path>
              <path d='m6 6 12 12'></path>
            </svg>
          </span>
        </button>
      </div>
      {showColorPicker && (
        <div
          ref={colorWrapperRef}
          className='absolute top-full start-0 opacity-1 transition-opacity duration-700'
        >
          <RgbStringColorPicker
            color={color}
            onClick={(e) => {
              e.stopPropagation()
            }}
            onChange={(newColor) => {
              onColorChanging(newColor, index)
            }}
          />
        </div>
      )}
    </div>
  )
}
