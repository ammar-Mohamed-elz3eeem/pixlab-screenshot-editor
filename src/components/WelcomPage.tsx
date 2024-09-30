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

  const { getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/*': ['.jpeg', '.png', '.jpg'],
    },
  })

  if (fabImage) {
    return <></>
  }

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
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'start',
          paddingLeft: '3rem',
        }}
      >
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Logo />
          <div
            style={{
              height: '5px',
              marginBottom: '0.5rem',
              width: '100%',
              backgroundImage:
                'linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #ff4e50 50%, #ff4e50 62.5%, #8e9eab 62.5%, #8e9eab 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)',
              borderTop: '0',
              borderRadius: '5px',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'start',
          }}
        >
          <h4
            className='dark:text-black text-white'
            style={{ fontSize: '20px', lineHeight: '30px' }}
          >
            Welcome to our revolutionary AI Image Editor, where creativity meets technology to
            transform your images like never before. Say goodbye to tedious manual editing and hello
            to effortless, professional-quality results at your fingertips. Ready to take your
            images to the next level? Sign up for AI Image Editor today and experience the future of
            image editing. With our powerful AI tools, the possibilities are endless.
          </h4>
          <div
            style={{
              width: '50%',
              padding: '1rem',
              backgroundColor: '#4596fdfc',
              borderRadius: '40px',
              textAlign: 'center',
            }}
          >
            <label
              htmlFor='upload-input'
              style={{
                color: 'white',
                backgroundColor: '#4596fdfc',
                fontSize: '27px',
                lineHeight: '20px',
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
      </div>
      <div style={{ width: '40%', height: '90%' }}>
        <img src={modern} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}

export default WelcomePage
