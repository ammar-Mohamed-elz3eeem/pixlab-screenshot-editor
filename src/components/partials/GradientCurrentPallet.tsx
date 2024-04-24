/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import { type IColor } from '../../types'
import useApp from '../../hooks/useContext'
import SinglePalletColor from './SinglePalletColor'

export default function CurrentPallet(): JSX.Element {
  const { selectedPallet, setSelectedPallet } = useApp()

  const singleColor = (selectedPallet as IColor[] | null)?.map(
    ({ color }: IColor, index: number) => (
      <SinglePalletColor color={color} index={index} key={index} />
    ),
  )

  const onAddColor = (): void => {
    setSelectedPallet((curr: any) => {
      return curr !== null ? [...curr, { color: 'white' }] : [{ color: 'white' }]
    })
  }

  return (
    <div className='grid grid-cols-6 gap-2 mt-5' id='gradient-items'>
      <button
        className='relative w-10 h-10 rounded-full cursor-pointer border-2 border-gray-800'
        id='addGradientItem'
        onClick={onAddColor}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='none'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-plus absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        >
          <path d='M5 12h14'></path>
          <path d='M12 5v14'></path>
        </svg>
      </button>
      {singleColor}
    </div>
  )
}
