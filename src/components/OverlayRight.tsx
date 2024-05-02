import React, { type ReactElement } from 'react'
import useApp from '../hooks/useContext'
const OverlayRight = (): ReactElement => {
  const { overLay } = useApp()

  return (
    <div
      style={{
        position: 'absolute',
        left: '0',
        height: '100%',
        width: '100%',
        zIndex: '3',
        opacity: '0.7',
        display: overLay,
      }}
      className='dark:bg-[#e5e5d4] bg-[black]'
    ></div>
  )
}

export default OverlayRight
