/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable no-undef */

import useApp from '../hooks/useContext'
import MyDropzone from './partials/MyDropzone'
import useFabric from '../hooks/useFabric'
import { withFrame } from './FrameHOC'
import EditorNode from './EditorNode'
import FabCanvas from './FabCanvas'

export default function Editor(): JSX.Element {
  const { selectedThumbType, setSelectedThumbType, selectedFrame, image } = useApp()
  const {
    canvas: { fabContext },
  } = useFabric()

  const handleZooming = (value: number): void => {
    setSelectedThumbType({
      ...selectedThumbType,
      scale: selectedThumbType?.scale! + value,
    })
    fabContext?.setZoom(fabContext?.getZoom() + value)
  }

  const EditorWithFrame = withFrame(EditorNode, selectedFrame)

  return (
    <div className='editor-container flex items-center h-[200px] md:h-screen md:min-h-screen max-h-screen justify-center md:flex-grow-0 md:flex-basis-2/3 mx-5  flex-col md:justify-center'>
      <div
        className='origin-[50%_center] mt-3 my-editor'
        style={{
          transform: `scale(${selectedThumbType?.scale})`,
        }}
      >
        <div>
          <EditorWithFrame>
            <></>
          </EditorWithFrame>
        </div>
        <FabCanvas></FabCanvas>
        {!image && <MyDropzone />}
      </div>
      <div className='px-5 flex flex-row justify-center items-center fixed bottom-0 left-1/2 z-20 text-white dark:text-black -translate-x-1/2 border-t rounded-t-xl gap-4 border-slate-800 dark:border-slate-200 bg-[#191922] dark:bg-[#e1e1d5]'>
        <button
          type='button'
          onClick={() => {
            handleZooming(0.1)
          }}
        >
          + zoom in
        </button>
        <button
          type='button'
          onClick={() => {
            handleZooming(-0.1)
          }}
        >
          - zoom out
        </button>
      </div>
    </div>
  )
}
