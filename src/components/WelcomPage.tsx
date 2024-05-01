import React from 'react'
import './WelcomPage'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import useFabricImage from '../hooks/useFabricImage'
import useApp from '../hooks/useContext'
import useFabric from '../hooks/useFabric'
import { fabric } from 'fabric'
const WelcomPage = () => {
  const [show, setShow] = useState('flex')
 const{setOverLay} = useApp()

 const fabricImageInit = useFabricImage()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      fabricImageInit(file)
      setShow('none')
      setOverLay('none')
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div
      id='welcomPage'
      style={{
        backgroundColor: '#e5e5d4',
        position: 'absolute',
        width: '65%',
        zIndex: 21,
        overflow: 'scroll',
        left: '6.5rem',
        top: '2rem',
        height: '85%',
        borderRadius: '15px',
        boxShadow: ' 1px 2px 11px 0px white',
        display: show,
        flexDirection: 'column',
        rowGap: '3rem',
        alignItems: 'center',
      }}
      
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
          {...getRootProps()}
          onClick={(e) => {
            e.stopPropagation();
            console.log('label',e.target);
            // setShow('none')
            //  setOverLay('none')
            
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

export default WelcomPage
