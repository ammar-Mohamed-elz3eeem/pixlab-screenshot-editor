import React, { useEffect, type ReactElement } from 'react'
import useApp from '../hooks/useContext'
import useFabric from '../hooks/useFabric'
import { fabric } from 'fabric'
import { useDeleteClickPressed } from '../hooks/useDeleteClick'

export function FabBrushes(canvas: fabric.Canvas): Record<string, fabric.PatternBrush> {
  const vLinePatternBrush = new fabric.PatternBrush(canvas)
  vLinePatternBrush.getPatternSrc = function () {
    const patternCanvas = document.createElement('canvas')
    patternCanvas.width = patternCanvas.height = 10
    const ctx = patternCanvas.getContext('2d')!

    ctx.strokeStyle = this.color
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.moveTo(0, 5)
    ctx.lineTo(10, 5)
    ctx.closePath()
    ctx.stroke()

    return patternCanvas
  }

  const squarePatternBrush = new fabric.PatternBrush(canvas)
  squarePatternBrush.getPatternSrc = function () {
    const squareWidth = 10
    const squareDistance = 2

    const patternCanvas = document.createElement('canvas')
    patternCanvas.width = patternCanvas.height = squareWidth + squareDistance
    const ctx = patternCanvas.getContext('2d')!

    ctx.fillStyle = this.color
    ctx.fillRect(0, 0, squareWidth, squareWidth)

    return patternCanvas
  }

  const hLinePatternBrush = new fabric.PatternBrush(canvas)
  hLinePatternBrush.getPatternSrc = function () {
    const patternCanvas = document.createElement('canvas')
    patternCanvas.width = patternCanvas.height = 10
    const ctx = patternCanvas.getContext('2d')!

    ctx.strokeStyle = this.color
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.moveTo(5, 0)
    ctx.lineTo(5, 10)
    ctx.closePath()
    ctx.stroke()

    return patternCanvas
  }

  const diamondPatternBrush = new fabric.PatternBrush(canvas)
  diamondPatternBrush.getPatternSrc = function () {
    const squareWidth = 10
    const squareDistance = 5
    const patternCanvas = document.createElement('canvas')
    const rect = new fabric.Rect({
      width: squareWidth,
      height: squareWidth,
      angle: 45,
      fill: this.color,
    })

    const canvasWidth = rect.getBoundingRect().width

    patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance
    rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 })

    const ctx = patternCanvas.getContext('2d')!
    rect.render(ctx)

    return patternCanvas
  }

  return {
    vline: vLinePatternBrush,
    square: squarePatternBrush,
    hline: hLinePatternBrush,
    diamond: diamondPatternBrush,
  }
}

function FabCanvas(): ReactElement {
  const { selectedThumbType, texts, selectedTab, setSelectedTab } = useApp()
  const {
    canvas: { fabImage, setFabContext, fabContext },
  } = useFabric()
  useDeleteClickPressed()

  useEffect(() => {
    if (fabImage) {
      fabImage.cornerSize = 20
      fabImage.cornerColor = '#000'
      fabImage.transparentCorners = false
      fabContext?.add(fabImage).centerObject(fabImage)
    }
  }, [fabContext, fabImage])

  useEffect(() => {
    setFabContext((oldCanvas) => {
      const newCanvas = new fabric.Canvas('app-drawer', {
        width: selectedThumbType?.width,
        height: selectedThumbType?.height,
        backgroundColor: 'transparent',
      })
      return newCanvas
    })
  }, [])

  useEffect(() => {
    if (fabContext) {
      if (selectedTab !== 'free-draw') {
        fabContext.isDrawingMode = false
      } else {
        fabContext.isDrawingMode = true
      }
    }
  }, [selectedTab, setSelectedTab])

  useEffect(() => {
    texts.forEach((text) => {
      fabContext?.add(text)
    })
  }, [texts, fabContext])

  return (
    <>
      <canvas
        id='app-drawer'
        className='absolute z-0 !top-1/2 !left-1/2 -translate-x-1/2 -translate-y-1/2'
      ></canvas>
    </>
  )
}

export default FabCanvas
