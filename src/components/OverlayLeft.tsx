import { type ReactElement } from 'react'
import useApp from '../hooks/useContext'

const OverlayLeft = (): ReactElement => {
  const { overLay } = useApp()

  return (
    <div
      style={{
        position: 'absolute',
        top: '3.75rem',
        left: '0',
        height: '100%',
        width: '5%',
        zIndex: '35',
        opacity: '0.8',
        display: overLay,
      }}
      className='dark:bg-[#e5e5d4] bg-[black]'
    ></div>
  )
}

export default OverlayLeft
