/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable no-undef */
import useApp from '../hooks/useContext'
import useFabric from '../hooks/useFabric'
import ImageUploadBtn from './partials/ImageUploadBtn'
import Slider from './partials/Slider'
import { fabric } from 'fabric'

export default function RightSidebar(): JSX.Element {
  const { texts } = useApp()
  const { canvas } = useFabric()

  const onImageRadius = (value: number): void => {
    canvas.fabImage?.set(
      'clipPath',
      new fabric.Rect({
        width: canvas.fabImage.width,
        height: canvas.fabImage.height,
        rx: value,
        ry: value,
        originX: 'center',
        originY: 'center',
      }),
    )
    canvas.fabContext?.renderAll()
  }

  return (
    <div className='flex flex-col md:px-4 border border-t-0 border-b-0 border-slate-800 md:flex-row h-screen w-full md:w-[380px] bg-[#191922] no-scrollbar'>
      <div className='lg:flex-grow py-6 overflow-y-auto'>
        <div>
          <div className='overflow-y-auto ' style={{ opacity: 1, transform: 'none' }}>
            <div className='pb-24'>
              <ImageUploadBtn />
              <div className='flex flex-col mt-6'>
                <Slider
                  label='Size'
                  min={6}
                  max={120}
                  onChange={(value) => {
                    texts.forEach((text) => {
                      text.fontSize = value
                      canvas.fabContext?.renderAll()
                    })
                  }}
                />
                <Slider label='Image Radius' min={0} max={500} onChange={onImageRadius} />
                <Slider
                  label='Canvas Radius'
                  min={0}
                  max={300}
                  onChange={(value) => {
                    canvas.setCanvasRadius(value)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
