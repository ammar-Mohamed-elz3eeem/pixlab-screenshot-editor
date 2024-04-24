/* eslint-disable no-undef */
import { type ReactNode } from 'react'

export default function WindowsDarkFrame({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <div
      key={'windows-dark'}
      className='relative bg-gray-800 border border-gray-600 rounded-lg overflow-hidden shadow-md'
    >
      <div className='flex items-center justify-between bg-gray-700 border-b border-gray-600 px-3 py-1'>
        <div className='text-gray-300 text-sm font-medium'></div>
        <div className='flex gap-1'>
          <button className='bg-gray-600 hover:bg-gray-500 rounded-md p-1 focus:outline-none'>
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
              className='lucide lucide-minus w-4 h-2 text-gray-300'
            >
              <path d='M5 12h14'></path>
            </svg>
          </button>
          <button className='bg-gray-600 hover:bg-gray-500 rounded-md p-1 focus:outline-none'>
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
              className='lucide lucide-square w-2 h-2 text-gray-300'
            >
              <rect width='18' height='18' x='3' y='3' rx='2'></rect>
            </svg>
          </button>
          <button className='bg-gray-600 hover:bg-gray-500 rounded-md p-1 focus:outline-none'>
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
              className='lucide lucide-x w-2 h-2 text-gray-300'
            >
              <path d='M18 6 6 18'></path>
              <path d='m6 6 12 12'></path>
            </svg>
          </button>
        </div>
      </div>
      <div className='p-4 frame-content'>{children}</div>
    </div>
  )
}
