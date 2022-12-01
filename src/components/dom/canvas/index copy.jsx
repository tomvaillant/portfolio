import { CanvasStyle } from '@/components/dom/Canvas/index.style'
import useStore from '@/helpers/store';
import { useAnimationFrame } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Canvas = ({ ...props }) => {
  // Datas
  const refCanvas = useRef(null)
  const penSize = 50
  const [ctx, setCtx] = useState()
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 })
  const [brushImage, setBrushImage] = useState()
  const [backgroundImage, setBackgroundImage] = useState()
  // Store
  const theme = useStore((s) => s.theme)
  // Frames
  useAnimationFrame((time) => {
    if (ctx && brushImage && backgroundImage) {
      // const dist = distanceBetween(mousePosition, lastMousePosition);
      // const angle = angleBetween(lastMousePosition, mousePosition);
      // for (let i = 0; i < dist; i+=5) {
      //     let x = lastMousePosition.x + (Math.sin(angle) * i) - penSize / 2;
      //     let y = lastMousePosition.y + (Math.cos(angle) * i) - penSize / 2;
      let x = mousePosition.x - penSize / 2;
      let y = mousePosition.y - penSize / 2;
      ctx.fillStyle = brushImage;
      ctx.fillRect(x, y, penSize, penSize);
      // }
      // setLastMousePosition(mousePosition)
      // const pattern = ctx.createPattern(backgroundImage, 'repeat');
      // ctx.globalAlpha = 0.3;
      // ctx.fillStyle = pattern;
      // ctx.fillRect(0, 0, width, height);
      // ctx.globalAlpha = 1;
    }
  })
  // Effects
  useEffect(() => {
    const ctx = refCanvas.current.getContext('2d')
    refCanvas.current.width = window.innerWidth
    refCanvas.current.height = window.innerHeight
    setCtx(ctx)
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    window.addEventListener('mousemove', handlerMouseMove)
  }, [])
  useEffect(() => {
    if (ctx && theme) {
      const imageBackground = new Image();
      imageBackground.src = `/img/noise-${ theme }.png`
      imageBackground.onload = function() {
        setBackgroundImage(imageBackground)
      }
      const imageBrush = new Image();
      imageBrush.src = `/img/brush-${ theme }.png`
      imageBrush.onload = function() {
        console.log('plop')
        const pattern = ctx.createPattern(imageBrush, "no-repeat");
        setBrushImage(pattern)
      }
    }
  }, [theme, ctx])
  useEffect(() => {
    // animationFadeOut()
  }, [backgroundImage])
  // Functions
  const handlerMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }
  const animationFadeOut = () => {
    if (ctx && backgroundImage) {
      const pattern = ctx.createPattern(backgroundImage, 'repeat');
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;
    }
    setTimeout(animationFadeOut, 100);
  }
  const distanceBetween = (point1, point2) => {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2))
  }
  const angleBetween = (point1, point2) => {
      return Math.atan2( point2.x - point1.x, point2.y - point1.y )
  }
  return (
    <CanvasStyle ref={ refCanvas } />
  )
}

export default Canvas;
