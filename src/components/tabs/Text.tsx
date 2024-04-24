/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable no-undef */
import { useState } from 'react'
import useApp from '../../hooks/useContext'
import { fabric } from 'fabric'
import EditSingleText from '../partials/EditSingleText'

export default function Text(): JSX.Element {
  const { setTexts, texts } = useApp()
  const [editText, setEditText] = useState<Record<string, string | number>>({})
  const [isEditing, setIsEditing] = useState(false)
  const [editTextAt, setEditTextAt] = useState(0)

  const onAddText = (): void => {
    setTexts([
      ...texts,
      new fabric.IText('Add Text Here', {
        top: 50,
        left: 50,
        width: 200,
        height: 200,
      }),
    ])
  }

  const onEditText = (index: number): void => {
    setIsEditing((isEdit) => !isEdit)
    setEditTextAt(index)
    setEditText({
      text: texts[index].text!,
      fontSize: texts[index].fontSize!,
      fontFamily: texts[index].fontFamily!,
      fontWeight: texts[index].fontWeight!,
      textAlign: texts[index].textAlign!,
    })
  }

  const onDeleteText = (): void => {
    if (texts !== null) {
      setIsEditing(false)
    }
  }

  const onUpdateText = (): void => {
    const nextTexts = texts.map((text, idx) => {
      if (idx === editTextAt) {
        Object.keys(editText).forEach((key) => text.set(key as keyof fabric.IText, editText[key]))
      }
      return text
    })
    console.log('nextTexts', nextTexts)
    setTexts(nextTexts)
    setIsEditing(false)
  }

  const textList = texts?.map(({ text }, index) => (
    <div className='mb-4' key={index}>
      <button
        onClick={() => {
          onEditText(index)
        }}
        className='w-full text-left flex justify-between items-center gap-4 rounded-t-md py-3 px-2 dark:bg-gray-200 bg-[#434649] text-white dark:text-black'
      >
        {text}
        <div>
          <span className='icon icon-arrow-down2'></span>
        </div>
      </button>
      {isEditing && (
        <EditSingleText
          onDelete={onDeleteText}
          onUpdate={onUpdateText}
          setIsEditing={setIsEditing}
          setEditText={setEditText}
          editText={editText}
        />
      )}
    </div>
  ))

  return (
    <div
      className='show-smoothly color-ui'
      style={{
        maxHeight: 'calc(-200px + 100vh)',
        opacity: 1,
      }}
    >
      <div className='flex flex-row justify-between gap-5'>
        <h1
          className='text-sm font-medium mb-6 text-white mt-5'
          style={{
            opacity: 1,
            transform: 'none',
          }}
        >
          Texts
        </h1>
      </div>
      <div className='flex flex-col'>
        {textList}
        <div className=''>
          <button
            onClick={onAddText}
            className='w-full rounded-md py-3 px-8 dark:bg-gray-200 bg-[#434649] text-white dark:text-black'
          >
            Add Text
          </button>
        </div>
      </div>
    </div>
  )
}
