import { useEffect, useState } from 'react'
import useFabric from '../../hooks/useFabric'
import Slider from '../partials/Slider'
import { fabric as fabricClass } from 'fabric'
import { FabBrushes } from '../FabCanvas'
import ColorChoser from '../partials/ColorChoser'

interface PatterenBrushWithSource extends fabricClass.PatternBrush {
  source: HTMLCanvasElement
}

/* eslint-disable no-undef */
function FreeDraw(): JSX.Element {
  const {
    canvas: { fabContext },
  } = useFabric()

  const [brush, setBrush] = useState<string>()
  const [brushWidth, setBrushWidth] = useState<number>(0)
  const [bruchColor, setBrushColor] = useState<string>('#000000')

  useEffect(() => {
    if (brush) {
      const patt = FabBrushes(fabContext!)[brush]
      fabContext!.freeDrawingBrush = patt
      if (fabContext!.freeDrawingBrush instanceof fabricClass.PatternBrush) {
        const brushDraw = fabContext!.freeDrawingBrush
        brushDraw.width = brushWidth
        brushDraw.color = bruchColor
        if (brushDraw.getPatternSrc) {
          ;(brushDraw as PatterenBrushWithSource).source = brushDraw.getPatternSrc()
        }
      }
    }
  }, [brush, bruchColor, brushWidth])

  return (
    <div
      className='show-smoothly free-draw-ui'
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
        Shapes
      </h1>
      <div
        className=''
        style={{
          opacity: 1,
          transform: 'none',
        }}
      >
        <div
          className='flex flex-col'
          style={{
            opacity: 1,
            transform: 'none',
          }}
        >
          <div className='flex flex-row flex-nowrap'>
            <label htmlFor='brushType mb-2'>Bruch Type</label>
            <select
              id='brushType'
              value={brush}
              onChange={(e) => {
                setBrush(e.target.value)
              }}
              className='dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-sm rounded-lg dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
            >
              <option value='pencil'>Pencil</option>
              <option value='diamond'>Diamond Pattern</option>
              <option value='hline'>Horizontal Line Pattern</option>
              <option value='vline'>Vertical Line Pattern</option>
              <option value='square'>Sqaure Pattern</option>
            </select>
          </div>
          <div className='flex flex-row flex-nowrap items-start py-3'>
            <div className='flex-1'>
              <Slider
                min={0}
                max={100}
                label='Line width'
                onChange={(e) => {
                  setBrushWidth(e)
                }}
              />
            </div>
          </div>
          <div className='py-3 flex justify-between'>
            <label>Brush Color</label>
            <ColorChoser
              currentColor={bruchColor}
              onChange={(newColor) => {
                setBrushColor(newColor)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreeDraw
