/* eslint-disable no-undef */
import { type ReactNode } from 'react'

export default function MacDarkFrame({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <div
      key={'mac-dark'}
      className='relative bg-gray-800 border border-gray-600 rounded-lg overflow-hidden shadow-md'
    >
      <div className='bg-gray-700 flex items-center justify-between px-2 py-1'>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded-full bg-gray-500'></div>
          <div className='w-3 h-3 rounded-full bg-gray-500'></div>
          <div className='w-3 h-3 rounded-full bg-gray-500'></div>
        </div>
        <div className='flex items-center gap-1'></div>
      </div>
      <div className='p-[14px] m-2 frame-content'>{children}</div>
    </div>
  )
}
