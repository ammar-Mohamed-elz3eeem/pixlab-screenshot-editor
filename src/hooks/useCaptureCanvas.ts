import { type RefObject, useCallback } from 'react'
import domtoimage from 'dom-to-image'


interface UseCaptureCanvas {
  captureToImage: () => void
}

const useCaptureCanvas = (canvasContainerRef: RefObject<HTMLDivElement>): UseCaptureCanvas => {
  const captureToImage = useCallback(() => {
    if (!canvasContainerRef.current) return

    console.log('canvasContainerRef.current', canvasContainerRef.current)
    const styleBefore = canvasContainerRef.current.style.cssText;
    console.log(styleBefore);
    canvasContainerRef.current.style.cssText = "";
    domtoimage
      .toJpeg(canvasContainerRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.jpeg'
        link.href = dataUrl
        link.click()
      })
      .catch((e) => {
        console.error(e)
      })
      .finally(() => {
        canvasContainerRef.current!.style.cssText = styleBefore;
      })
  }, [canvasContainerRef])

  return { captureToImage }
}

export default useCaptureCanvas
