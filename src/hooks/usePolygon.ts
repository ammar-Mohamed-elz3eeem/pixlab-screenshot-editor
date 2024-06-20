/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

// import { fabric } from 'fabric'
// import useFabric from './useFabric'
// import {
//   type CustomFabricLine,
//   type CustomFabricCircle,
//   type CustomFabricPolygon,
// } from '../context/fabricContext'

// export default function usePolygon(): {
//   addPoint: (canvas: fabric.Canvas, options: any) => void
//   generatePolygon: (canvas: fabric.Canvas) => void
//   toggleDrawPolygon: (canvas: fabric.Canvas) => void
// } {
//   const {
//     canvas: {
//       pointArray,
//       activeShape,
//       setActiveShape,
//       setActiveLine,
//       setPointArray,
//       setLineArray,
//       lineArray,
//       activeLine,
//       drawMode,
//       setDrawMode,
//     },
//   } = useFabric()
//   return {
//     addPoint: function (canvas: fabric.Canvas, options: fabric.IEvent<MouseEvent>) {
//       const pointOptions = {
//         radius: 5,
//         id: new Date().getTime(),
//         fill: '#ffffff',
//         stroke: '#333333',
//         strokeWidth: 0.5,
//         left: options.pointer!.x,
//         top: options.pointer!.y,
//         selectable: false,
//         hasBorders: false,
//         hasControls: false,
//         originX: 'center',
//         originY: 'center',
//         objectCaching: false,
//       }

//       const circle = new fabric.Circle(pointOptions) as CustomFabricCircle

//       if (!pointArray || pointArray.length === 0) {
//         circle.set({
//           fill: 'red',
//         })
//       }

//       const points = [
//         options.pointer!.x,
//         options.pointer!.y,
//         options.pointer!.x,
//         options.pointer!.y,
//       ]

//       const line = new fabric.Line(points, {
//         strokeWidth: 2,
//         fill: '#999999',
//         stroke: '#999999',
//         originX: 'center',
//         originY: 'center',
//         selectable: false,
//         hasBorders: false,
//         hasControls: false,
//         evented: false,
//         objectCaching: false,
//       }) as CustomFabricLine

//       line.class = 'line'

//       if (activeShape) {
//         const pos = canvas.getPointer(options.e)
//         const currentPoints = activeShape.get('points') as Array<{ x: number; y: number }>
//         currentPoints.push({ x: pos.x, y: pos.y })
//         const polygon = new fabric.Polygon(currentPoints, {
//           stroke: '#333333',
//           strokeWidth: 1,
//           fill: '#cccccc',
//           opacity: 0.3,
//           selectable: false,
//           hasBorders: false,
//           hasControls: false,
//           evented: false,
//           objectCaching: false,
//         })
//         canvas.remove(activeShape)
//         canvas.add(polygon)
//         setActiveShape(polygon)
//         canvas.renderAll()
//       } else {
//         const pointer = canvas.getPointer(options.e)
//         const polyPoint = [{ x: pointer.x, y: pointer.y }]
//         const polygon = new fabric.Polygon(polyPoint, {
//           stroke: '#333333',
//           strokeWidth: 4,
//           fill: '#000000',
//           opacity: 0.9,
//           selectable: false,
//           hasBorders: false,
//           hasControls: false,
//           evented: false,
//           objectCaching: false,
//         })
//         setActiveShape(polygon)
//         canvas.add(polygon)
//       }

//       setActiveLine(line)

//       setPointArray((oldArr) => [...(oldArr ?? []), circle])

//       setLineArray([...(lineArray ?? []), line])
//       console.log('pointArray', pointArray)
//       console.log('lineArray', lineArray)

//       canvas.add(line)
//       canvas.add(circle)
//     },
//     generatePolygon: function (canvas: fabric.Canvas) {
//       const pointsVec = []
//       // collect points and remove them from canvas
//       for (const point of pointArray!) {
//         pointsVec.push({
//           x: point.left,
//           y: point.top,
//         })
//         canvas.remove(point)
//       }

//       // remove lines from canvas
//       for (const line of lineArray!) {
//         canvas.remove(line)
//       }

//       // remove selected Shape and Line
//       canvas.remove(activeShape!).remove(activeLine!)

//       const polyOptions = {
//         id: new Date().getTime(),
//         stroke: '#0084ff',
//         fill: '#000000',
//         objectCaching: false,
//         moveable: false,
//       }

//       // create polygon from collected points
//       const polygon = new fabric.Polygon(
//         pointsVec as Array<{ x: number; y: number }>,
//         polyOptions,
//       ) as CustomFabricPolygon
//       canvas.add(polygon)
//     },
//     toggleDrawPolygon: function (canvas: fabric.Canvas) {
//       console.log('run this', drawMode)
//       if (drawMode) {
//         console.log('not draw mode')
//         // stop draw mode
//         setActiveLine(null)
//         setActiveShape(null)
//         setLineArray([])
//         setPointArray([])
//         canvas.selection = true
//         setDrawMode(false)
//       } else {
//         // start draw mode
//         console.log('draw mode')

//         canvas.selection = false
//         setDrawMode(true)
//       }
//     },
//   }
// }

import { fabric } from 'fabric'
import useFabric from './useFabric'
import {
  type CustomFabricLine,
  type CustomFabricCircle,
  type CustomFabricPolygon,
} from '../context/fabricContext'
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'

export default function usePolygon(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [pointArray, setPointArray] = useState<CustomFabricCircle[]>([])
  const [lineArray, setLineArray] = useState<CustomFabricLine[]>([])
  const [activeShape, setActiveShape] = useState<fabric.Polygon | null>(null)
  const [activeLine, setActiveLine] = useState<CustomFabricLine | null>(null)
  const [drawMode, setDrawMode] = useState<boolean>(false)
  const {
    canvas: { fabContext },
  } = useFabric()

  function addPoint(canvas: fabric.Canvas, options: fabric.IEvent<MouseEvent>): void {
    const pointOptions = {
      radius: 5,
      id: new Date().getTime(),
      fill: '#ffffff',
      stroke: '#333333',
      strokeWidth: 0.5,
      left: options.pointer!.x,
      top: options.pointer!.y,
      selectable: false,
      hasBorders: false,
      hasControls: false,
      originX: 'center',
      originY: 'center',
      objectCaching: false,
    }

    const circle = new fabric.Circle(pointOptions) as CustomFabricCircle

    if (!pointArray || pointArray.length === 0) {
      circle.set({
        fill: 'red',
      })
    }

    const points = [options.pointer!.x, options.pointer!.y, options.pointer!.x, options.pointer!.y]

    const line = new fabric.Line(points, {
      strokeWidth: 2,
      fill: '#999999',
      stroke: '#999999',
      originX: 'center',
      originY: 'center',
      selectable: false,
      hasBorders: false,
      hasControls: false,
      evented: false,
      objectCaching: false,
    }) as CustomFabricLine

    line.class = 'line'

    if (activeShape) {
      const pos = canvas.getPointer(options.e)
      const currentPoints = activeShape.get('points') as Array<{ x: number; y: number }>
      currentPoints.push({ x: pos.x, y: pos.y })
      const polygon = new fabric.Polygon(currentPoints, {
        stroke: '#333333',
        strokeWidth: 1,
        fill: '#cccccc',
        opacity: 0.3,
        selectable: false,
        hasBorders: false,
        hasControls: false,
        evented: false,
        objectCaching: false,
      })
      canvas.remove(activeShape)
      canvas.add(polygon)
      setActiveShape(polygon)
      canvas.renderAll()
    } else {
      const pointer = canvas.getPointer(options.e)
      const polyPoint = [{ x: pointer.x, y: pointer.y }]
      const polygon = new fabric.Polygon(polyPoint, {
        stroke: '#333333',
        strokeWidth: 4,
        fill: '#000000',
        opacity: 0.9,
        selectable: false,
        hasBorders: false,
        hasControls: false,
        evented: false,
        objectCaching: false,
      })
      setActiveShape(polygon)
      canvas.add(polygon)
    }

    setActiveLine(line)

    setPointArray((oldArr) => [...(oldArr ?? []), circle])

    setLineArray([...(lineArray ?? []), line])
    console.log('pointArray', pointArray)
    console.log('lineArray', lineArray)

    canvas.add(line)
    canvas.add(circle)
  }
  function generatePolygon(canvas: fabric.Canvas): void {
    const pointsVec = []
    // collect points and remove them from canvas
    for (const point of pointArray) {
      pointsVec.push({
        x: point.left,
        y: point.top,
      })
      canvas.remove(point)
    }

    // remove lines from canvas
    for (const line of lineArray) {
      canvas.remove(line)
    }

    // remove selected Shape and Line
    canvas.remove(activeShape!).remove(activeLine!)

    const polyOptions = {
      id: new Date().getTime(),
      stroke: '#0084ff',
      fill: '#000000',
      objectCaching: false,
      moveable: false,
    }

    // create polygon from collected points
    const polygon = new fabric.Polygon(
      pointsVec as Array<{ x: number; y: number }>,
      polyOptions,
    ) as CustomFabricPolygon
    canvas.add(polygon)
  }
  function toggleDrawPolygon(canvas: fabric.Canvas): void {
    console.log('run this', drawMode)
    if (drawMode) {
      console.log('not draw mode')
      // stop draw mode
      setActiveLine(null)
      setActiveShape(null)
      setLineArray([])
      setPointArray([])
      canvas.selection = true
      setDrawMode(false)
    } else {
      // start draw mode
      console.log('draw mode')

      canvas.selection = false
      setDrawMode(true)
    }
  }
  function onMouseDown(options: fabric.IEvent<MouseEvent>): void {
    if (drawMode) {
      console.log('inside draw mode here')
      if (options.target && (options.target as CustomFabricCircle).id === pointArray[0].id) {
        generatePolygon(fabContext!)
        toggleDrawPolygon(fabContext!)
        console.log('drawMode', drawMode)
      } else {
        addPoint(this, options)
      }
    }
  }
  function onMouseMove(options: fabric.IEvent<MouseEvent>): void {
    if (drawMode) {
      if (activeLine && activeLine.class === 'line') {
        const pointer = this.getPointer(options.e)

        activeLine.set({
          x2: pointer.x,
          y2: pointer.y,
        })

        const points = activeShape!.get('points') as Array<{ x: number; y: number }>

        // console.log('points now', points)

        points[pointArray.length] = {
          x: pointer.x,
          y: pointer.y,
        }

        activeShape!.set({
          points: points as fabric.Point[],
        })
        this.renderAll()
      }
    }
    this.renderAll()
  }

  useEffect(() => {
    if (fabContext) {
      console.log('fabContext from event listeners', fabContext)
      fabContext.on('mouse:down', onMouseDown)
      fabContext.on('mouse:move', onMouseMove)
      return () => {
        fabContext.off('mouse:down')
        fabContext.off('mouse:move')
      }
    }
  }, [fabContext, pointArray, setPointArray, drawMode, setDrawMode])

  return [drawMode, setDrawMode]
}
