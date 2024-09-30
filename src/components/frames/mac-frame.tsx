import { type IFrameBorder } from '../../types/index';
/* eslint-disable no-undef */

export default function MacFrame({ style }: { style: IFrameBorder | null }): JSX.Element {
  return (
    <div
      key={'mac'}
      style={style ?? {}}
      className={
        'border-frame bg-gray-200 border border-gray-300 rounded-lg overflow-hidden shadow-md' +
        (style ? ' absolute' : ' relative')
      }
    >
      <div className='bg-gray-100 flex items-center justify-between px-2 py-1'>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded-full bg-gray-400'></div>
          <div className='w-3 h-3 rounded-full bg-gray-400'></div>
          <div className='w-3 h-3 rounded-full bg-gray-400'></div>
        </div>
        <div className='flex items-center gap-1'></div>
      </div>
      <div className='p-[14px] m-2 frame-content'></div>
    </div>
  )
}
