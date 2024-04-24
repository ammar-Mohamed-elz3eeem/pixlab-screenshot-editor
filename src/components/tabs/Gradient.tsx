/* eslint-disable no-undef */
import CurrentPallet from '../partials/GradientCurrentPallet'
import GradientDirections from '../partials/GradientDirection'
import GradientPallets from '../partials/GradientPallets'

export default function Gradient(): JSX.Element {
  return (
    <div
      className='tab-content gradient-ui relative pb-[500px] show-smoothly'
      style={{
        maxHeight: 'calc(-200px + 100vh)',
        opacity: 1,
      }}
    >
      <div>
        <h1
          className='text-xs font-medium text-white'
          style={{
            transform: 'none',
            opacity: 1,
          }}
        >
          Gradient Colors
        </h1>
        <CurrentPallet />
        <div
          className='mt-4'
          style={{
            transform: 'none',
            opacity: 1,
          }}
        >
          <h2
            className='text-xs font-medium text-white mb-2'
            style={{
              transform: 'none',
              opacity: 1,
            }}
          >
            Gradient Direction
          </h2>
          <div
            className='flex space-x-2'
            style={{
              transform: 'none',
              opacity: 1,
            }}
            id='gradient-dirs'
          >
            <GradientDirections />
          </div>
        </div>
        <h2
          className='text-xs font-medium text-white my-4'
          style={{
            transform: 'none',
            opacity: 1,
          }}
        >
          Color Palettes
        </h2>
        <div
          id='pallets'
          className='grid grid-cols-3 lg:grid-cols-4 gap-1'
          style={{
            transform: 'none',
            opacity: 1,
          }}
        >
          <GradientPallets />
        </div>
      </div>
    </div>
  )
}
