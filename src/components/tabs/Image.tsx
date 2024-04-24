/* eslint-disable no-undef */
import useApp from '../../hooks/useContext'
import { images } from '../../utils/data'

export default function Image(): JSX.Element {
  const { setSelectedPallet } = useApp()

  const onImageSelection = (index: number): void => {
    setSelectedPallet([{ background: images[index].background }])
  }

  return (
    <div
      className='show-smoothly image-ui'
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
      <div
        className=''
        style={{
          opacity: 1,
          transform: 'none',
        }}
      >
        <div
          className='grid grid-cols-3 lg:grid-cols-4  gap-1'
          style={{
            opacity: 1,
            transform: 'none',
          }}
        >
          {images.map((image, index) => (
            <div
              className='image'
              style={{
                opacity: 1,
                transform: 'none',
              }}
              key={index}
              onClick={() => {
                onImageSelection(index)
              }}
            >
              <div
                className='w-full h-20 rounded-lg overflow-hidden  cursor-pointer'
                style={{
                  backgroundImage: `url(${image.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
