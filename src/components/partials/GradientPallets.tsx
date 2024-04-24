/* eslint-disable no-undef */
import useApp from '../../hooks/useContext'
import { type IPallet } from '../../types'
import { colorPallets } from '../../utils/data'

export default function GradientPallets(): JSX.Element[] {
  const { setSelectedPallet } = useApp()

  const handlePalletChange = (pallet: IPallet): void => {
    setSelectedPallet([{ color: pallet.firstColor }, { color: pallet.secondColor }])
  }

  return colorPallets.map((pallet, index) => (
    <div key={index} className='pallet'>
      <div
        className='w-full h-20 rounded-lg overflow-hidden cursor-pointer'
        onClick={() => {
          handlePalletChange(pallet)
        }}
        style={{
          background: `linear-gradient(${pallet.position}, ${pallet.firstColor}, ${pallet.secondColor})`,
        }}
      ></div>
    </div>
  ))
}
