/* eslint-disable no-undef */
import { modes } from '../utils/data'
import useApp from '../hooks/useContext'
import Thumbnail from './partials/Thumbnail'

export default function Thumbnails(): JSX.Element {
  const thumbnailsUI = modes.map((thumb, idx) => <Thumbnail id={idx} key={idx} mode={thumb} />)

  const { showThumbnailTypeDropdown } = useApp()

  return (
    <div
      className={`thumbnail-selector ${showThumbnailTypeDropdown !== null && showThumbnailTypeDropdown ? 'show' : ''}`}
    >
      <div className='z-50 p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-deep-slate-900 w-[400px] md:w-[500px] bg-opacity-80 backdrop-blur-lg border border-gray-800 rounded-md'>
        <div className='overflow-hidden ring-1 ring-black ring-opacity-5'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-2 p-2'>{thumbnailsUI}</div>
        </div>
      </div>
    </div>
  )
}
