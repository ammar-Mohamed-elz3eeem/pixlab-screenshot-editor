/* eslint-disable no-undef */
import React, { type Dispatch, type SetStateAction } from 'react'

interface EditSingleTextProps {
  setIsEditing: Dispatch<SetStateAction<boolean>>
  editText: Record<string, string | number>
  setEditText: Dispatch<SetStateAction<Record<string, string | number>>>
  onUpdate: () => void
  onDelete: () => void
}

function EditSingleText({
  setIsEditing,
  editText,
  setEditText,
  onDelete,
  onUpdate,
}: EditSingleTextProps): JSX.Element {
  return (
    <>
      <div className='flex p-3 flex-col gap-3 bg-[#434649]'>
        <div className='flex flex-col'>
          <div className='mb-4'>
            <h3>Content</h3>
            <textarea
              rows={4}
              className='block p-2.5 w-full text-sm dark:text-gray-900 dark:bg-gray-50 rounded-lg border dark:border-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
              value={editText?.text}
              onChange={(e) => {
                setEditText({ ...editText, text: e.currentTarget.value })
              }}
            >
              {editText?.text}
            </textarea>
          </div>
          <div className='mb-4 flex flex-row gap-2'>
            <div className=''>
              <label htmlFor='fontSize'>Font Size</label>
              <input
                onChange={(e) => {
                  setEditText({ ...editText, fontSize: e.currentTarget.value })
                }}
                type='number'
                className='dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-sm rounded-lg dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                id='fontSize'
                value={editText?.fontSize}
              />
            </div>
            <div className=''>
              <label htmlFor='fontFamily'>Font Family</label>
              <select
                value={editText?.fontFamily}
                id='fontFamily'
                className='dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-sm rounded-lg dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                onChange={(e) => {
                  setEditText({ ...editText, fontFamily: e.currentTarget.value })
                }}
              >
                <option value='sans-serif'>Sans Serif</option>
                <option value='roboto'>Roboto</option>
                <option value='times-news-roman'>Times News Roman</option>
                <option value='monospace'>Mono space</option>
                <option value='arial'>Arial</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col flex-nowrap gap-4 justify-between'>
            <button
              className='w-full rounded-md py-3 px-8 dark:text-gray-900 dark:bg-gray-50 text-white bg-gray-700'
              type='button'
              onClick={onUpdate}
            >
              Edit Text
            </button>
            <button
              className='w-full rounded-md py-3 px-8 text-red-500 dark:text-gray-900 dark:bg-gray-50 text-white bg-gray-700'
              type='button'
              onClick={() => {
                onDelete()
              }}
            >
              Delete Text
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditSingleText
