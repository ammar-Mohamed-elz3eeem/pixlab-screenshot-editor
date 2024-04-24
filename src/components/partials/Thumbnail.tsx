/* eslint-disable no-undef */
import { type SyntheticEvent } from 'react'
import useApp from '../../hooks/useContext'
import { modes } from '../../utils/data'
import { type IThumb } from '../../types'
import { sanitizeInt } from '../../utils/helpers'

interface ThumbnailProps {
  mode: IThumb
  id: string | number
}

export default function Thumbnail({ mode, id }: ThumbnailProps): JSX.Element {
  const { setSelectedThumbType } = useApp()

  const onSelectThumbnails = (e: SyntheticEvent): void => {
    setSelectedThumbType({
      ...modes[sanitizeInt((e.currentTarget as HTMLDivElement).dataset.id) as number],
    })
  }

  return (
    <button
      className='thumb-type flex flex-col items-center justify-center py-2 px-2 text-[10px] text-gray-300 dark:text-gray-700 cursor-pointer hover:border-slate-800 focus:outline-none border border-slate-700 rounded-md backdrop-blur-md bg-slate-800 bg-opacity-20'
      data-id={id}
      onClick={onSelectThumbnails}
    >
      <div className='flex items-center justify-start'>
        <img
          src={`https://www.moiful.com/socials/${mode.icon}.png`}
          alt={`${mode.name} Icon`}
          className='w-3 h-3 mr-1'
        />
        <span>{mode.name}</span>
      </div>
      <span className=''>
        ({mode.width} x {mode.height})
      </span>
    </button>
  )
}
