/* eslint-disable no-undef */
import { type ReactNode } from 'react'

export default function FancyFrame({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <div className='relative bg-gradient-to-br from-purple-500 to-pink-500 border border-purple-600 rounded-lg overflow-hidden shadow-md'>
      <div className='flex items-center justify-between bg-purple-700 border-b border-purple-800 px-3 '>
        <div className='text-white text-sm font-medium'>------ </div>
        <div className='flex gap-1'></div>
      </div>
      <div className='p-4 frame-content'>{children}</div>
    </div>
  )
}
