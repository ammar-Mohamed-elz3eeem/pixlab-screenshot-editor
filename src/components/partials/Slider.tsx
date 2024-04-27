/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable no-undef */

import { useRef, useState, type MouseEvent as ReactMouseEvent } from 'react'

interface SliderProps {
  min?: number
  max?: number
  label?: string
  current: number
  onChange: (newValue: number) => void
}

export default function Slider({ max, min, label, current, onChange }: SliderProps): JSX.Element {
  const [value, setValue] = useState<number>(current)
  const sliderBoxRef = useRef<HTMLDivElement>(null)
  const sliderBtnRef = useRef<HTMLDivElement>(null)
  const sliderColorRef = useRef<HTMLDivElement>(null)
  const sliderTooltipRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: MouseEvent | ReactMouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    const targetRect = sliderBoxRef.current?.getBoundingClientRect()
    let x = e.pageX - (targetRect?.left ?? 0)
    if (x > targetRect?.width!) {
      x = targetRect?.width!
    }
    if (x < 0) {
      x = 0
    }
    if (sliderBtnRef.current) {
      sliderBtnRef.current.style.left = `${x - 2}px`
    }
    setValue((prevVal) => {
      const newValue = parseInt(((x / targetRect?.width!) * (max! - min!) + min!).toFixed(0))
      console.log(newValue)
      onChange(newValue)
      return newValue
    })
    // get the position of the button inside the container (%)
    const percentPosition = (x / targetRect?.width!) * 100

    // color width = position of button (%)
    if (sliderColorRef.current) {
      sliderColorRef.current.style.width = percentPosition + '%'
    }

    if (sliderTooltipRef.current) {
      // move the tooltip when button moves, and show the tooltip
      sliderTooltipRef.current.style.left = x - 10 - 20 + 'px'
      sliderTooltipRef.current.style.opacity = '1'
      // show the percentage in the tooltip
      sliderTooltipRef.current.textContent = Math.round(percentPosition) + ' px'
    }
  }

  const onMouseUp = (e: MouseEvent): void => {
    window.removeEventListener('mousemove', onMouseMove)
  }

  const onMouseDown = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>): void => {
    onMouseMove(e)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  return (
    <div className='flex flex-row justify-between items-center gap-4 px-4'>
      <div>
        <div className='text-sm font-semibold text-black dark:text-white flex items-center whitespace-nowrap'>
          {label}
          <div className='px-[5px] text-[0.7rem] dark:bg-gray-50 rounded-md bg-gray-900 text-gray-400/70 dark:text-gray-600/80 font-normal border dark:border-gray-300 border-gray-800 font-code leading-normal flex items-center justify-center duration-100 cursor-default ml-2'>
            <span className='font-mono'>{value}</span>
          </div>
        </div>
      </div>
      <div className='w-full max-w-[50%]'>
        <div
          className='w-full flex items-center justify-center relative py-3'
          dir='ltr'
          data-orientation='horizontal'
          aria-disabled='false'
        >
          <span
            ref={sliderBoxRef}
            data-orientation='horizontal'
            className='h-[12px] w-full dark:bg-gray-100 bg-gray-900 rounded-sm relative border dark:border-gray-300 border-gray-600 shadow-[0_0_2px_rgba(0,0,0,0.1)] flex items-center'
          >
            <span
              ref={sliderColorRef}
              data-orientation='horizontal'
              className='bg-gradient-to-br dark:bg-white bg-gray-700/80 absolute h-full rounded-sm'
              style={{ left: '0%', right: '37.5%' }}
            ></span>
          </span>
          <span
            ref={sliderBtnRef}
            onMouseDown={onMouseDown}
            style={{ position: 'absolute', left: 'calc(62.5% - 2px)' }}
          >
            <span
              role='slider'
              aria-valuemin={30}
              aria-valuemax={150}
              className='bg-gradient-to-br from-[#737373] to-[#262626] dark:from-[#e5e5e5] dark:to-[#a3a3a3] cursor-pointer duration-100 focus:border-black hover:border-black focus:scale-[1.05] dark:border-gray-500 dark:hover:border-gray-200 dark:focus:border-gray-200 hover:scale-[1.05] h-[20px] w-[16px] border-[1px] border-gray-500 rounded-[5px] flex focus:outline-none ease-linear shadow-[0_0_12px_rgba(0,0,0,0.15)] relative group'
              aria-valuenow={105}
            >
              <span className='flex w-full absolute inset-0 h-full items-center justify-around px-[3px]'>
                <span className='w-[1.2px] rounded h-[55%] bg-gray-400 dark:bg-gray-500 group-focus:bg-gray-100 group-hover:bg-gray-100 dark:group-hover:bg-gray-900 dark:group-focus:bg-gray-900'></span>
                <span className='w-[1.2px] rounded h-[55%] bg-gray-400 dark:bg-gray-500 group-focus:bg-gray-100 group-hover:bg-gray-100 dark:group-hover:bg-gray-900 dark:group-focus:bg-gray-900'></span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

Slider.defaultProps = {
  max: 100,
  min: 0,
  current: 0,
  label: '',
}
