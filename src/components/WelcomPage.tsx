import React, { type ReactElement, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import useFabricImage from '../hooks/useFabricImage'
import useApp from '../hooks/useContext'
import useFabric from '../hooks/useFabric'
import modern from '../assets/img/modern artificial intelligence medical scene_4614988.png'
import Logo from './partials/Logo'
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
      style={{
        position: 'absolute',
        width: '65%',
        zIndex: 21,
        left: '6.5rem',
        height: '80%',
        boxShadow: ' 1px 2px 11px 0px',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
      }}
      className='dark:bg-[#e5e5d4] dark:shadow-white shadow-black bg-[#191922] items-center
        flex-row top-8 flex rounded-2xl 
        overflow-y-scroll'
    >
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          justifyContent: 'start',
          alignItems: 'start',
          paddingLeft: '3rem',
        }}
      >
        <Logo />
        <h4 style={{ fontSize: '20px' }}>
          Welcome to our revolutionary AI Image Editor, where creativity meets technology to
          transform your images like never before. Say goodbye to tedious manual editing and hello
          to effortless, professional-quality results at your fingertips.
        </h4>
        <div
          style={{
            width: '50%',
            padding: '1rem',
            backgroundColor: '#4596fdfc',
            borderRadius: '40px',
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
      </div>
      <div style={{ width: '40%', height: '90%' }}>
        <img src={modern} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}

export default WelcomePage
