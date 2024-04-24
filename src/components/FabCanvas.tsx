import React, { useEffect, type ReactElement } from 'react'
import useApp from '../hooks/useContext'
import useFabric from '../hooks/useFabric'
import { fabric } from 'fabric'

function FabCanvas(): ReactElement {
  const { selectedThumbType, texts } = useApp()
  const {
    canvas: { fabImage, setFabContext, fabContext },
  } = useFabric()

  useEffect(() => {
    if (fabImage) {
      fabImage.cornerSize = 20
      fabImage.cornerColor = '#000'
      fabImage.transparentCorners = false
      fabContext?.add(fabImage).centerObject(fabImage)
    }
  }, [fabContext, fabImage])

  useEffect(() => {
    setFabContext(
      new fabric.Canvas('app-drawer', {
        width: selectedThumbType?.width,
        height: selectedThumbType?.height,
        backgroundColor: 'transparent',
      }),
    )
  }, [])

  useEffect(() => {
    texts.forEach((text) => {
      fabContext?.add(text)
    })
  }, [texts, fabContext])

  return (
    <canvas
      id='app-drawer'
      className='absolute z-0 !top-1/2 !left-1/2 -translate-x-1/2 -translate-y-1/2'
    ></canvas>
  )
}

export default FabCanvas
