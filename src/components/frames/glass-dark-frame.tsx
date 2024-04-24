/* eslint-disable no-undef */
import { type ReactNode } from 'react'

export default function GlassDarkFrame({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <div
      key={'glass-dark'}
      className='border-4  p-[30px] shadow-md border-gray-600 rounded-lg frame-content bg-gray-800 pointer-events-none'
    >
      {children}
    </div>
  )
}
