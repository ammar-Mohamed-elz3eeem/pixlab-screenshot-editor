import React, { type ReactElement, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import useFabricImage from '../hooks/useFabricImage'
import useApp from '../hooks/useContext'
import useFabric from '../hooks/useFabric'

const WelcomePage = (): ReactElement => {
  const fabricImageInit = useFabricImage()
  const { setOverLay } = useApp()
  const {
    canvas: { fabImage },
  } = useFabric()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      fabricImageInit(file)
      setOverLay('none')
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  if (fabImage) {
    return <></>
  }

  return (
    <div
      id='welcomPage'
      style={{
        position: 'absolute',
        width: '65%',
        zIndex: 21,
        left: '6.5rem',
        height: '85%',
        boxShadow: ' 1px 2px 11px 0px',
      }}
      className='dark:bg-[#e5e5d4] dark:shadow-white shadow-black bg-[#191922] items-center gap-12 flex-col flex rounded-2xl top-8 overflow-y-scroll'
      //  className='editor-container flex items-center h-[200px] md:h-screen md:min-h-screen max-h-screen justify-center md:flex-grow-0 md:flex-basis-2/3 mx-5  flex-col md:justify-center'
    >
      <h1 style={{ color: 'white', fontSize: '40px', fontWeight: '600', marginTop: '1rem' }}>
        PixLab AI-Editor
      </h1>
      <div
        style={{
          padding: '1rem',
          backgroundColor: '#4596fdfc',
          borderRadius: '40px',
          width: '40%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        {...getRootProps()}
      >
        <label
          htmlFor='upload-input'
          id='upload-label'
          style={{
            color: 'white',
            backgroundColor: '#4596fdfc',
            fontSize: '30px',
            paddingBottom: '0.5rem',
          }}
        >
          Load Images
        </label>
        <input
          type='file'
          id='upload-input'
          style={{ display: 'none' }}
          accept='image/*'
          {...getInputProps()}
        />
      </div>
      <div>
        <img src='https://chatai.com/wp-content/uploads/2023/11/tr71123-ai-art.jpeg' />
      </div>
      <div>
        <img src='https://www.ibm.com/blog/wp-content/uploads/2023/03/What-is-Generative-AI-what-are-Foundation-Models-and-why-do-they-matter-scaled.jpg' />
      </div>
    </div>
  )
}

export default WelcomePage
