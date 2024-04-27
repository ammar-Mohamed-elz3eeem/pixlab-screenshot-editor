import { fabric } from 'fabric'

// RoundedRect allows rounding each corner of a rect individually.
export const RoundedRect = fabric.util.createClass(fabric.Rect, {
  type: 'roundedRect',

  initialize: function (
    options: {
      topLeft: number
      topRight: number
      bottomLeft: number
      bottomRight: number
      width: number
      height: number
    } & fabric.IRectOptions,
  ) {
    this.topLeft = [options.topLeft, options.topLeft]
    this.topRight = [options.topRight, options.topRight]
    this.bottomLeft = [options.bottomLeft, options.bottomLeft]
    this.bottomRight = [options.bottomRight, options.bottomRight]
    this.width = options.width
    this.height = options.height
  },

  _render: function (ctx: CanvasRenderingContext2D) {
    const w = this.width
    const h = this.height
    const x = -this.width / 2
    const y = -this.height / 2
    /* "magic number" for bezier approximations of arcs (http://itc.ktu.lt/itc354/Riskus354.pdf) */
    const k = 1 - 0.5522847498
    ctx.beginPath()

    // top left
    ctx.moveTo(x + this.topLeft[0], y)

    // line to top right
    ctx.lineTo(x + w - this.topRight[0], y)
    ctx.bezierCurveTo(
      x + w - k * this.topRight[0],
      y,
      x + w,
      y + k * this.topRight[1],
      x + w,
      y + this.topRight[1],
    )

    // line to bottom right
    ctx.lineTo(x + w, y + h - this.bottomRight[1])
    ctx.bezierCurveTo(
      x + w,
      y + h - k * this.bottomRight[1],
      x + w - k * this.bottomRight[0],
      y + h,
      x + w - this.bottomRight[0],
      y + h,
    )

    // line to bottom left
    ctx.lineTo(x + this.bottomLeft[0], y + h)
    ctx.bezierCurveTo(
      x + k * this.bottomLeft[0],
      y + h,
      x,
      y + h - k * this.bottomLeft[1],
      x,
      y + h - this.bottomLeft[1],
    )

    // line to top left
    ctx.lineTo(x, y + this.topLeft[1])
    ctx.bezierCurveTo(
      x,
      y + k * this.topLeft[1],
      x + k * this.topLeft[0],
      y,
      x + this.topLeft[0],
      y,
    )

    ctx.closePath()

    this._renderPaintInOrder(ctx)
  },
})
