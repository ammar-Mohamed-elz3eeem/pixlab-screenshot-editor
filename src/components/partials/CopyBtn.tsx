/* eslint-disable no-undef */
function Copy(): JSX.Element {
  return (
    <button className=' cursor-pointer p-2  bg-transparent border mr-3 border-gray-800 shadow-xl text-[12px] px-2 rounded-md flex items-center justify-center text-white dark:text-black'>
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
        className='lucide lucide-copy ml-1'
      >
        <rect width='14' height='14' x='8' y='8' rx='2' ry='2'></rect>
        <path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2'></path>
      </svg>
    </button>
  )
}

export default Copy
