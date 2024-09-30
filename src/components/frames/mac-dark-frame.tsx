/* eslint-disable no-undef */

import { type IFrameBorder } from "../../types";

export default function MacDarkFrame({ style }: { style: IFrameBorder | null }): JSX.Element {
  return (
    <div
      key={'mac-dark'}
      style={style ?? {}}
      className={
        'border-frame bg-gray-800 border border-gray-600 rounded-lg overflow-hidden shadow-md' +
        (style ? ' absolute' : ' relative')
      }
    >
      <div className='bg-gray-700 flex items-center justify-between px-2 py-1'>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded-full bg-gray-500'></div>
          <div className='w-3 h-3 rounded-full bg-gray-500'></div>
          <div className='w-3 h-3 rounded-full bg-gray-500'></div>
        </div>
        <div className='flex items-center gap-1'></div>
      </div>
      <div className='p-[14px] m-2 frame-content'></div>
    </div>
  )
}
