/* eslint-disable no-undef */
import { type ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className='flex flex-col-reverse md:flex-row items-start justify-center'>
      <div className='w-full bg-slate-950 dark:bg-slate-50 transition-colors'>{children}</div>
    </div>
  )
}
