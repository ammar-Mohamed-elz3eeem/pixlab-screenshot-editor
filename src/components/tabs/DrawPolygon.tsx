import { type ReactElement } from 'react'
import ColorChoser from '../partials/ColorChoser'

function DrawPolygon(): ReactElement {
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
          <div className='py-3 flex justify-between'>
            <label>Brush Color</label>
            <ColorChoser
              currentColor={'#000000'}
              onChange={(newColor) => {
                // console.log(newColor)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DrawPolygon
