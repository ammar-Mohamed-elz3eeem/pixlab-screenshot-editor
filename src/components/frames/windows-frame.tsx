/* eslint-disable no-undef */

import { type IFrameBorder } from "../../types";

export default function WindowsFrame({ style }: { style: IFrameBorder | null }): JSX.Element {
  return (
    <div
      key={'windows'}
      style={style ?? {}}
      className={
        'border-frame bg-white border border-gray-400 rounded-lg overflow-hidden shadow-md' +
        (style ? ' absolute' : ' relative')
      }
    >
      <div className='flex items-center justify-between bg-gray-300 border-b border-gray-400 px-3 py-1'>
        <div className='text-gray-300 text-sm font-medium'></div>
        <div className='flex gap-1'>
          <button className='bg-[#F0F0F0] hover:bg-[#DADADA] rounded-md p-1 focus:outline-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-minus w-2 h-2 text-gray-700'
            >
              <path d='M5 12h14'></path>
            </svg>
          </button>
          <button className='bg-[#F0F0F0] hover:bg-[#DADADA] rounded-md p-1 focus:outline-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-square w-2 h-2 text-gray-700'
            >
              <rect width='18' height='18' x='3' y='3' rx='2'></rect>
            </svg>
          </button>
          <button className='bg-[#F0F0F0] hover:bg-[#DADADA] rounded-md p-1 focus:outline-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-x w-2 h-2 text-gray-700'
            >
              <path d='M18 6 6 18'></path>
              <path d='m6 6 12 12'></path>
            </svg>
          </button>
        </div>
      </div>
      <div className='p-4 frame-content'></div>
    </div>
  )
}
