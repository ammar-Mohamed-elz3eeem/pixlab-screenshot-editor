import useFabric from '../../hooks/useFabric'

/* eslint-disable no-undef */
function Shape(): JSX.Element {
  const {
    addRect,
    addCircle,
    addTriangle,
    addPolygon,
    addPath,
    canvas: { fabContext },
  } = useFabric()

  const handleAddRect = (): void => {
    const addedRect = addRect()
    fabContext?.add(addedRect)
  }

  const handleAddCircle = (): void => {
    const addedCircle = addCircle()
    fabContext?.add(addedCircle)
  }

  const handleAddTriangle = (): void => {
    const addedTriangle = addTriangle()
    fabContext?.add(addedTriangle)
  }

  const handleAddPolygon = (points: Array<{ x: number; y: number }>): void => {
    const addedPolygon = addPolygon(points)
    fabContext?.add(addedPolygon)
  }

  const handleAddingPath = (path: string): void => {
    const addedPath = addPath(path)
    fabContext?.add(addedPath)
  }

  return (
    <div
      className='show-smoothly shape-ui'
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
          className='grid grid-cols-2 lg:grid-cols-3  gap-4'
          style={{
            opacity: 1,
            transform: 'none',
          }}
        >
          <div onClick={handleAddCircle} className='p-5 border-2 border-gray-600 rounded-md'>
            <div className='rounded-full w-10 h-10 border-4 border-white dark:border-black mx-auto'></div>
          </div>
          <div onClick={handleAddRect} className='p-5 border-2 border-gray-600 rounded-md'>
            <div className='w-10 h-10 border-4 border-white dark:border-black mx-auto'></div>
          </div>
          <div onClick={handleAddTriangle} className='p-5 border-2 border-gray-600 rounded-md'>
            <div className='rounded-xl w-10 h-10 border-4 border-white dark:border-black mx-auto'></div>
          </div>
          <div
            onClick={() => {
              handleAddPolygon([
                { x: 50, y: 0 },
                { x: 85, y: 50 },
                { x: 50, y: 100 },
                { x: 15, y: 50 },
              ])
            }}
            className='p-5 border-2 border-gray-600 rounded-md'
          >
            <svg className='stroke-white dark:stroke-black' viewBox='-8 -8 120 120'>
              <polygon fill='none' stroke-width='8' points='50 0, 85 50, 50 100, 15 50'></polygon>
            </svg>
          </div>
          <div
            onClick={() => {
              handleAddPolygon([
                { x: 25, y: 0 },
                { x: 0, y: 100 },
                { x: 75, y: 100 },
                { x: 100, y: 0 },
              ])
            }}
            className='p-5 border-2 border-gray-600 rounded-md'
          >
            <svg className='stroke-white dark:stroke-black' viewBox='-10 -10 120 120'>
              <polygon points='25 0, 0 100, 75 100, 100 0' stroke-width='8' fill='none'></polygon>
            </svg>
          </div>
          <div
            onClick={() => {
              handleAddPolygon([
                { x: 0, y: 0 },
                { x: 100, y: 30 },
                { x: 10, y: 70 },
                { x: 10, y: 100 },
                { x: 100, y: 100 },
              ])
            }}
            className='p-5 border-2 border-gray-600 rounded-md'
          >
            <svg className='stroke-white dark:stroke-black' viewBox='-8 -8 120 120'>
              <polygon points='0,100 30,10 70,10 100,100' stroke-width='8' fill='none'></polygon>
            </svg>
          </div>
          <div
            onClick={() => {
              handleAddingPath('M 80,80 V 20 H 20 v 60 z m 20,20 V 0 H 0 v 100 z')
            }}
            className='p-5 border-2 border-gray-600 rounded-md'
          >
            <svg className='stroke-white dark:stroke-black' viewBox='-10 -10 120 120'>
              <path
                d='M 80,80 V 20 H 20 v 60 z m 20,20 V 0 H 0 v 100 z'
                stroke-width='8'
                fill-rule='evenodd'
                fill='none'
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              handleAddPolygon([
                { x: 26, y: 26 },
                { x: 86, y: 11.2 },
                { x: 40.4, y: 50 },
                { x: 12.2, y: 88.8 },
                { x: 40.4, y: 74 },
                { x: 86, y: 86 },
              ])
            }}
            className='p-5 border-2 border-gray-600 rounded-md'
          >
            <svg className='stroke-white dark:stroke-black' viewBox='0 0 100 100'>
              <polygon
                points='26,86 11.2,40.4 50,12.2 88.8,40.4 74,86 '
                stroke='#fff'
                stroke-width='8'
                fill='none'
              ></polygon>
            </svg>
          </div>
          <div
            onClick={() => {
              handleAddingPath('M 26,85 50,45 74,85 Z m -26,15 50,-85 50,85 z')
            }}
            className='p-5 border-2 border-gray-600 rounded-md'
          >
            <svg className='stroke-white dark:stroke-black' viewBox='-10 -10 120 120'>
              <path
                d='M 26,85 50,45 74,85 Z m -26,15 50,-85 50,85 z'
                stroke-width='8'
                stroke='#fff'
                fill='none'
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              handleAddingPath(
                'M 62.68234,131.5107 H 26.75771 V 96.075507 Z M 11.572401,146.76255 V 59.66782 l 87.983665,87.09473 z',
              )
            }}
            className='p-5 border-2 border-gray-600 rounded-md'
          >
            <svg className='stroke-white dark:stroke-black' viewBox='8 50 100 100'>
              <path
                d='M 62.68234,131.5107 H 26.75771 V 96.075507 Z M 11.572401,146.76255 V 59.66782 l 87.983665,87.09473 z'
                stroke-width='8'
                stroke='#fff'
                fill='none'
                fill-rule='evenodd'
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              handleAddingPath(
                'M9.113,65.022C11.683,45.575,28.302,30.978,48,30.978c19.696,0,36.316,14.598,38.887,34.045H9.113z',
              )
            }}
            className='p-5 border-2 border-gray-600 rounded-md'
          >
            <svg className='stroke-white dark:stroke-black' x='0px' y='0px' viewBox='0 0 96 120'>
              <path
                stroke='#fff'
                stroke-width='8'
                fill='none'
                d='M9.113,65.022C11.683,45.575,28.302,30.978,48,30.978c19.696,0,36.316,14.598,38.887,34.045H9.113z'
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              handleAddingPath(
                'm0 57.952755l0 0c0 -32.006424 25.946333 -57.952755 57.952755 -57.952755c32.006428 0 57.952755 25.946333 57.952755 57.952755l-28.97638 0c0 -16.003212 -12.97316 -28.976377 -28.976376 -28.976377c-16.003212 0 -28.976377 12.9731655 -28.976377 28.976377z',
              )
            }}
            className='p-5 border-2 border-gray-600 rounded-md'
          >
            <svg className='stroke-white dark:stroke-black' viewBox='-7 -35 133 105'>
              <path
                stroke='#ffffff'
                stroke-width='8'
                d='m0 57.952755l0 0c0 -32.006424 25.946333 -57.952755 57.952755 -57.952755c32.006428 0 57.952755 25.946333 57.952755 57.952755l-28.97638 0c0 -16.003212 -12.97316 -28.976377 -28.976376 -28.976377c-16.003212 0 -28.976377 12.9731655 -28.976377 28.976377z'
                fill='none'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shape
