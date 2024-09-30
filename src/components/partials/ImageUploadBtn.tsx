/* eslint-disable no-undef */
import React, { useCallback } from 'react'
import useApp from '../../hooks/useContext'
import useFabricImage from '../../hooks/useFabricImage'
import { useDropzone } from 'react-dropzone'

function ImageUploadBtn(): JSX.Element {
  const { image } = useApp()
  const fabricImageInit = useFabricImage()
  const { setOverLay } = useApp()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      fabricImageInit(file)
      setOverLay('none')
    })
  }, [])

  const { getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/*': ['.jpeg', '.png', '.jpg'],
    },
  })

  return (
    <div className=' flex gap-4 mt-2'>
      <label
        htmlFor='fileInput'
        className='cursor-pointer  p-2 border border-slate-800 shadow-xl text-[12px] px-14 rounded-md flex items-center justify-center text-white '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-folder mr-2'
        >
          <path d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'></path>
        </svg>
        Upload Image
      </label>
      <div className='flex items-center justify-center'>
        <div className='flex items-center'>
          {image !== null && (
            <img
              src={image}
              className='inline-block h-9 w-9 ml-2  rounded-sm ring-2 ring-white'
              alt='Preview Uploaded Image'
            />
          )}
        </div>
      </div>
      <input type='file' className='hidden' id='fileInput' {...getInputProps()} />
    </div>
  )
}

export default ImageUploadBtn
