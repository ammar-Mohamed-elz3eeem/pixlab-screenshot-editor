/* eslint-disable no-undef */
import useApp from '../../hooks/useContext'
import { frames } from '../../utils/data'
import { withFrame } from '../FrameHOC'

export default function Frame(): JSX.Element {
  const { setSelectedFrame } = useApp()

  const onFrameSelection = (index: number): void => {
    setSelectedFrame(frames[index])
  }

  return (
    <div
      className='frame-ui show-smoothly'
      style={{
        opacity: 1,
        transform: 'none',
      }}
    >
      <h1
        className='text-sm font-medium mb-2 text-white mt-5'
        style={{
          opacity: 1,
          transform: 'none',
        }}
      >
        Frames
      </h1>
      <div className='pb-7 px-1'>
        <input
          className='h-10 py-2 w-full px-2  rounded-lg bg-transparent border-[1px] text-xs border-gray-800 text-white'
          placeholder='Add Frame Title'
          type='text'
          value='No Frame'
        />
      </div>
      <div
        className='grid grid-cols-3 lg:grid-cols-2  gap-3 text-white'
        style={{
          opacity: 1,
          transform: 'none',
        }}
      >
        {frames.map((frame, index) => {
          const Frame = withFrame(frame)
          return (
            <div
              className='cursor-pointer frame-border'
              key={index}
              onClick={() => {
                onFrameSelection(index)
              }}
            >
              <Frame>
              </Frame>
              <h1 className='text-xs text-center mt-2'>{frame}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}
