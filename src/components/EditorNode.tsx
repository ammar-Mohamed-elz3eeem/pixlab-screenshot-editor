/* eslint-disable no-undef */
import useApp from '../hooks/useContext'
import { isImage } from '../utils/helpers'
import { type IColor } from '../types'
import useFabric from '../hooks/useFabric'

function EditorNode(): JSX.Element {
  const { selectedPallet, gradientDirection, selectedThumbType } = useApp()
  const {
    canvas: { canvasRadius },
  } = useFabric()

  const editorStyle = (): Record<string, string> => {
    if (selectedPallet?.length === 1) {
      if (isImage(selectedPallet[0])) {
        return {
          backgroundImage: `url(${selectedPallet[0].background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }
      } else {
        return { background: `${selectedPallet[0].color}` }
      }
    } else {
      return {
        backgroundImage: `linear-gradient(${gradientDirection}, ${(selectedPallet as IColor[])?.map(({ color }: IColor) => color).join(', ')})`,
      }
    }
  }

  return (
    <div
      className='my-node'
      style={{
        ...editorStyle(),
        width: selectedThumbType?.width,
        height: selectedThumbType?.height,
        borderRadius: canvasRadius,
      }}
    ></div>
  )
}

export default EditorNode
