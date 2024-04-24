/* eslint-disable no-undef */
import useApp from '../../hooks/useContext'
import { type IColor } from '../../types'
import { gradientLines } from '../../utils/data'

export default function GradientDirections(): JSX.Element[] {
  const { selectedPallet, setGradientDirection } = useApp()

  return gradientLines.map(({ position, icon }) => (
    <button
      key={icon}
      onClick={() => {
        setGradientDirection(position)
      }}
      className='rounded-md overflow-hidden bg-gradient-to-br from-blue-500 to-blue-500 p-2 cursor-pointer flex items-center justify-center'
      style={{
        width: 40,
        height: 40,
        background: `linear-gradient(${position}, ${(selectedPallet as IColor[])?.map((gradItem) => gradItem.color).join(', ')}`,
        transform: 'none',
      }}
    >
      <span className={`icon ${icon}`}></span>
    </button>
  ))
}
