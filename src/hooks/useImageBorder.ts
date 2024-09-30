import { useEffect, useState } from 'react'
import { type fabric } from 'fabric';
import { type IFrameBorder } from '../types';

const useImageBorder = (imageObject: fabric.Image | null, canState: fabric.Canvas | null): {borderStyle: IFrameBorder} => {
  const [borderStyle, setBorderStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  })

  const updateHTMLBorder = (): void => {
    if (!imageObject) return

    const boundingRect = imageObject.getBoundingRect()
    console.log(boundingRect);
    setBorderStyle({
      top: boundingRect.top - 30,
      left: boundingRect.left - 30,
      width: boundingRect.width + 60,
      height: boundingRect.height + 60,
    })
  }

  useEffect(() => {
    // Only run if the imageObject is available
    if (!imageObject) return

    // Initial border update
    updateHTMLBorder()

    // Event listeners for object modifications
    const handleObjectModification = (): void => {
      updateHTMLBorder()
    }

    // Attach Fabric.js event listeners
    imageObject.canvas?.on('object:modified', handleObjectModification)
    imageObject.canvas?.on('object:moving', handleObjectModification)
    imageObject.canvas?.on('object:scaling', handleObjectModification)

    // Clean up event listeners on unmount or boxState change
    return () => {
      imageObject.canvas?.off('object:modified', handleObjectModification)
      imageObject.canvas?.off('object:moving', handleObjectModification)
      imageObject.canvas?.off('object:scaling', handleObjectModification)
    }
  }, [imageObject, canState]);

  return { borderStyle }
}

export default useImageBorder
