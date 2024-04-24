import { fabricContext, type FabricContext } from '../context/fabricContext'
import { useContext } from 'react'
import { fabric } from 'fabric'
import useApp from './useContext'

export default function useFabric(): {
  canvas: FabricContext
  addRect: () => fabric.Rect
  addCircle: () => fabric.Circle
  addTriangle: () => fabric.Triangle
  addPath: (data: string) => fabric.Path
  addPolygon: (points: Array<{ x: number; y: number }>) => fabric.Polygon
} {
  const fabState = useContext<FabricContext>(fabricContext)
  const { setShapes, shapes } = useApp()

  const addRect = (): fabric.Rect => {
    const newRect = new fabric.Rect({
      width: 100,
      height: 100,
      left: 10,
      top: 10,
    })
    setShapes([...shapes, newRect])
    return newRect
  }

  const addCircle = (): fabric.Circle => {
    const newCircle = new fabric.Circle({
      radius: 100,
      left: 10,
      top: 10,
    })
    setShapes([...shapes, newCircle])
    return newCircle
  }

  const addTriangle = (): fabric.Triangle => {
    const newTriangle = new fabric.Triangle({
      left: 0,
      top: 0,
    })
    setShapes([...shapes, newTriangle])
    return newTriangle
  }

  const addPolygon = (points: Array<{ x: number; y: number }>): fabric.Polygon => {
    const newPolygon = new fabric.Polygon(points, {
      left: 0,
      top: 0,
    })
    setShapes([...shapes, newPolygon])
    return newPolygon
  }

  const addPath = (pathData: string): fabric.Path => {
    const newPath = new fabric.Path(pathData, {
      left: 0,
      top: 0,
    })
    setShapes([...shapes, newPath])
    return newPath
  }

  return {
    canvas: fabState,
    addRect,
    addCircle,
    addTriangle,
    addPolygon,
    addPath,
  }
}
