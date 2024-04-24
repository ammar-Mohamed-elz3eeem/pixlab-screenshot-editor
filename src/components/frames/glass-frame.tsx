/* eslint-disable no-undef */
import { type ReactNode } from 'react'

export default function GlassFrame({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <div
      key={'glass'}
      className=' border-[5px]  p-[30px] shadow-md border-[#ffffffc7] rounded-lg frame-content pointer-events-none'
    >
      {children}
    </div>
  )
}
