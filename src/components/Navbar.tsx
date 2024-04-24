/* eslint-disable no-undef */
import Logo from './partials/Logo'
import DownloadImageBtn from './partials/DownloadImageBtn'
import Copy from './partials/CopyBtn'
import ThumbnailChooser from './partials/ThumbnailChooser'
import DarkMode from './partials/DarkMode'
import ThumbnailChooserMD from './partials/ThumbnailChooserMD'

function Navbar(): JSX.Element {
  return (
    <nav className='bg-[#191922] dark:bg-[#e1e1d5] border-b border-b-gray-800 dark:border-b-gray-200 sticky top-0 z-50 transition-colors'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <Logo />
          <div className='flex items-center gap-0 md:gap-3'>
            <DownloadImageBtn />
            <Copy />
            <label className=' cursor-pointer p-2 bg-white border border-gray-800 dark:border-gray-200 shadow-xl mr-3 text-[12px] px-2 rounded-md flex items-center justify-center md:hidden text-black '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-download'
              >
                <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
                <polyline points='7 10 12 15 17 10'></polyline>
                <line x1='12' x2='12' y1='15' y2='3'></line>
              </svg>
            </label>
            <ThumbnailChooser />
            <DarkMode />
          </div>
          <ThumbnailChooserMD />
          <div className='md:hidden flex items-center'>
            <button
              type='button'
              aria-haspopup='dialog'
              aria-expanded='false'
              aria-controls='radix-:r2:'
              data-state='closed'
              className='cursor-pointer'
            >
              <div className='hidden text-white p-2 border border-gray-800 dark:border-gray-200 rounded-lg focus:outline-none  items-center space-x-1'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 448 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
