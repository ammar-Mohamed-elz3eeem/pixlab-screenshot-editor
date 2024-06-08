import useFabric from '../../hooks/useFabric'
import Slider from '../partials/Slider'

/* eslint-disable no-undef */
function FreeDraw(): JSX.Element {
  const {
    canvas: { fabContext },
  } = useFabric()

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
              className='dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-sm rounded-lg dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
            >
              <option value='pencil'>Pencil</option>
              <option value='bruch'>Circle</option>
              <option value='pattern'>Pattern</option>
              <option value='spray'>Spray</option>
              <option value='hline'>Horizontal Line Pattern</option>
              <option value='vline'>Vertical Line Pattern</option>
            </select>
          </div>
          <div className='flex flex-row flex-nowrap'>
            <div className='flex-1'>
              <Slider
                min={0}
                max={100}
                label='Line width'
                onChange={(e) => (fabContext!.freeDrawingBrush.width = e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreeDraw
