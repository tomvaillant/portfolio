import { CanvasStyle } from '@/components/layout/canvas.style'
import useStore from '@/helpers/store'
import useCanvas from '@/helpers/useCanvas'
import { useEffect, useRef } from 'react'

function resizeCanvas(canvas) {
  const { width, height } = canvas.getBoundingClientRect()
  
  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio:ratio=1 } = window
    const context = canvas.getContext('2d')
    canvas.width = width*ratio
    canvas.height = height*ratio
    context.scale(ratio, ratio)
    return true
  }

  return false
}
const _postdraw = () => {
 index++
 ctx.restore()
}
const _predraw = (context, canvas) => {
  context.save()
  resizeCanvas(canvas)
  const { width, height } = context.canvas
  context.clearRect(0, 0, width, height)
}

const Canvas = (props) => {  
  const { draw, predraw=_predraw, postdraw=_postdraw } = props
  const canvasRef = useCanvas(draw, {predraw, postdraw})
  return <CanvasStyle ref={canvasRef} />
}

export default Canvas
