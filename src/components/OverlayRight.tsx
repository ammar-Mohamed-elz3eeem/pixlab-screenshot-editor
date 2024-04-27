import React from 'react'
import useApp from '../hooks/useContext'
const OverlayRight = () => {
  const { overLay, setOverLay } = useApp()
  return (
    <div
      style={{
        position: 'absolute',
        left: '0',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        zIndex: '3',
        opacity: '0.7',
        display: overLay,
      }}
    ></div>
  )
}

export default OverlayRight
