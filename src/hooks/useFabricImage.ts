/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import useApp from './useContext'
import useFabric from './useFabric'
import { fabric } from 'fabric'

export default function useFabricImage(): (file: any) => void {
  const { setImage, selectedThumbType } = useApp()
  const {
    canvas: { setFabImage, fabContext },
  } = useFabric()

  return (file: any) => {
    const url = URL.createObjectURL(file)
    setImage(url)
    fabric.Image.fromURL(url, (image) => {
      image.scaleToHeight(selectedThumbType?.height! / 1.5)
      image.scaleToWidth(selectedThumbType?.width! / 1.5)
      image.set(
        'clipPath',
        new fabric.Rect({
          width: image.width,
          height: image.height,
          rx: 20, // Set the x-radius to 20 for example, adjust as needed
          ry: 20, // Set the y-radius to 20 for example, adjust as needed
          originX: 'center',
          originY: 'center',
        }),
      )

      // Add the frame to the canvas
      fabContext?.add(image).centerObject(image)
      const frame = new fabric.Rect({
        width: selectedThumbType?.width! / 1.5 + 20,
        height: selectedThumbType?.height! / 1.5 + 20,
        fill: 'white',
        stroke: 'black',
        strokeWidth: 20, // Adjust the thickness of the frame as needed
        originX: 'center',
        originY: 'center',
      })
      fabContext?.add(frame).centerObject(frame)
      console.log('framFbric', frame, image)
      setFabImage(image)
    })
  }
}
