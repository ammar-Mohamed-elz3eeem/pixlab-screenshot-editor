/* eslint-disable no-undef */

import { type IFrameBorder } from "../../types";

export default function FancyFrame({ style }: { style: IFrameBorder | null }): JSX.Element {
  return (
    <div
      style={style ?? {}}
      className={`border-frame bg-gradient-to-br from-purple-500 to-pink-500 border border-purple-600 rounded-lg overflow-hidden shadow-md ${style ? 'absolute' : 'relative'}`}
    >
      <div className='flex items-center justify-between bg-purple-700 border-b border-purple-800 px-3 '>
        <div className='text-white text-sm font-medium'>------ </div>
        <div className='flex gap-1'></div>
      </div>
      <div className='p-4 frame-content'></div>
    </div>
  )
}
