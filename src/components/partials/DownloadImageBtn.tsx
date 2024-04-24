/* eslint-disable no-undef */
function DownloadImageBtn(): JSX.Element {
  return (
    <button className='md:inline-flex h-10 animate-shimmer items-center md:mr-3 hidden justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,95%,#000103)] dark:bg-[linear-gradient(110deg,#fefcfe,45%,#e1d9ce,95%,#fefcfe)] bg-[length:200%_100%] px-6 font-medium text-xs text-white dark:text-black shadow-xl transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
      Download Image
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
        className='lucide lucide-download ml-1'
      >
        <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
        <polyline points='7 10 12 15 17 10'></polyline>
        <line x1='12' x2='12' y1='15' y2='3'></line>
      </svg>
    </button>
  )
}

export default DownloadImageBtn
