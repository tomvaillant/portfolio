import { CanvasStyle } from '@/components/dom/canvas/index.style'
import useStore from '@/helpers/store';
import { useAnimationFrame } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Canvas = ({ ...props }) => {
  // Variables
  const pressureSensitivity = 38.95170789163723
  const speedSensitivity = -50
  const angleSensitivity = 0
  const minSize = 8.1498829039812644
  const calligAngle = 1.6762089347367093
  const maxSize = 20
  const hasSymmetricalEmphasis = false
  
	const steps = 20;
	const minSquaredDistance = Math.pow(5, 2);
  const interpolatedPts = new Array(2 * steps);
  const smoothing = 0.2716327239065031;
  const buffer = new Array(8);

  let oldMousePos = { x: 0, y: 0 }

  // References
  const refCanvas = useRef(null)
  const refTextureLight = useRef(null)
  const refTextureDark = useRef(null)
  const refBackgroundLight = useRef(null)
  const refBackgroundDark = useRef(null)
  // States
  const [ctx, setCtx] = useState()
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  // const [textureLight, setTextureLight] = useState()
  // const [textureDark, setTextureDark] = useState()
  const [texture, setTexture] = useState()
  // const [backgroundLight, setBackgroundLight] = useState()
  // const [backgroundDark, setBackgroundDark] = useState()
  const [background, setBackground] = useState()
  const [oldTheme, setOldTheme] = useState()
  // const [oldMousePos, setOldMousePos] = useState({ x: 0, y: 0 })
  // Store
  const theme = useStore((s) => s.theme)
  // Effects
  useEffect(() => {
    const ctx = refCanvas.current.getContext('2d')
    refCanvas.current.width = window.innerWidth
    refCanvas.current.height = window.innerHeight
    setCtx(ctx)
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    // const initTextureLight = new Image()
    // initTextureLight.src = `/img/brush-light.png`
    // // initTextureLight.onload = function() {
    //   setTextureLight(initTextureLight)
    // // }    
    // const initTextureDark = new Image()
    // initTextureDark.src = `/img/brush-dark.png`
    // // initTextureLight.onload = function() {
    //   setTextureDark(initTextureDark)
    // // }
    // const initBackgroundLight = new Image()
    // initBackgroundLight.src = `/img/noise-light.jpg`
    // // initBackgroundLight.onload = function() {
    //   setBackgroundLight(initBackgroundLight)
    // // }
    // const initBackgroundDark = new Image()
    // initBackgroundDark.src = `/img/noise-dark.jpg`
    // // initBackgroundLight.onload = function() {
    //   setBackgroundDark(initBackgroundDark)
    // // }
  }, [])
  useEffect(() => {
      // const textureImage = new Image();
      // textureImage.src = `/img/brush-${ theme }.png`
      // // textureImage.onload = function() {
      //   setTexture(textureImage)
      // // }
      // const backgroundImage = new Image();
      // backgroundImage.src = `/img/noise-${ theme }.jpg`
      // // backgroundImage.onload = function() {
      //   setBackground(backgroundImage)
      // // }
      // if (backgroundLight && backgroundDark && textureLight && textureDark) {
      //   console.log(backgroundLight)
      //   if (theme == "light") {
      //     setTexture(textureLight)
      //     setBackground(backgroundLight)
      //   } else {
      //     setTexture(textureDark)
      //     setBackground(backgroundDark)
      //   }
      // }
    if (oldTheme !== theme) {
      if (theme == "light") {
        setTexture(refTextureLight.current)
        // setBackground(refBackgroundLight.current)
      } else {
        setTexture(refTextureDark.current)
        // setBackground(refBackgroundDark.current)
      }
      setOldTheme(theme)
    }
  }, [theme])
  useEffect(() => {
    if (ctx && texture) {
      // window.addEventListener('mousedown', handlerMouseDown, false)
      // window.addEventListener('mouseup', handlerMouseUp, false)
	    window.addEventListener('mousemove', handlerMouseMove, false);
      window.addEventListener('resize', handlerResize);
      ctx.clearRect(0, 0, width, height)
    }
    return () => {
      // window.removeEventListener('mousedown', handlerMouseDown, false)
      // window.removeEventListener('mouseup', handlerMouseUp, false)
	    window.removeEventListener('mousemove', handlerMouseMove, false);
      window.removeEventListener('resize', handlerResize);
    }
  }, [ctx, texture])
  useEffect(() => {
    if (ctx && background) {
      animationFadeOut()
      ctx.clearRect(0, 0, width, height)
    }
  }, [ctx, background])
  // Frames
  useAnimationFrame((time) => {
    if (ctx && background) {
      const pattern = ctx.createPattern(background, 'repeat');
      ctx.globalAlpha = 0.25;
      ctx.fillStyle = pattern;
      // ctx.fillStyle = theme == "light" ? "white" : "black";
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;
    }
  })
  // Functions
  const animationFadeOut = () => {
    // if (ctx && background) {
    //   const pattern = ctx.createPattern(background, 'repeat');
    //   ctx.globalAlpha = 0.25;
    //   ctx.fillStyle = pattern;
    //   ctx.fillRect(0, 0, width, height);
    //   ctx.globalAlpha = 1;
    // }
    // setTimeout(animationFadeOut, 20);
  }
  const handlerResize = (e) => {
    refCanvas.current.width = window.innerWidth
    refCanvas.current.height = window.innerHeight
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)      
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  }
  const handlerMouseDown = (e) => {
	  buffer[0] = buffer[2] = buffer[4] = buffer[6] = e.clientX;
	  buffer[1] = buffer[3] = buffer[5] = buffer[7] = e.clientY;
    
    const size = minSize + pressureSensitivity * e.pressure;
    drawTexture(
      ctx      , texture,
      e.offsetX , e.offsetY,
      size      , size,
      2 * Math.PI * Math.random()
    );

	  e.preventDefault();
	  window.addEventListener('mousemove', handlerMouseMove, false);
  }
  const handlerMouseMove = (e) => {
    if (buffer[0] === undefined && buffer[1] === undefined) {
      buffer[0] = buffer[2] = buffer[4] = buffer[6] = e.clientX;
      buffer[1] = buffer[3] = buffer[5] = buffer[7] = e.clientY;
    }

		const squaredSpeed = Math.abs(
        Math.pow(e.clientX - buffer[0], 2) 
      + Math.pow(e.clientY - buffer[1], 2) 
    )
		if (squaredSpeed > minSquaredDistance) {
      rotateArray(buffer, 2)
      let pressure = 0.5
      
      const diffx = e.clientX - buffer[0]
      const diffy = e.clientY - buffer[1]
      const direction = Math.atan2(diffy, diffx) + Math.PI
      
		  buffer[0] += diffx * (1 - smoothing)
		  buffer[1] += diffy * (1 - smoothing)

      const s = Math.sqrt(squaredSpeed);
      const diff = maxSize - minSize;
      const symm = hasSymmetricalEmphasis ? 2 : 1;
      
      const influence = Math.max(0,
          speedSensitivity    * s/(s+200)
        + pressureSensitivity * pressure
        + angleSensitivity    * (
            Math.cos((Math.PI - direction + calligAngle)*symm) *.5 +.5
          )
      );
      const size = minSize + influence;
      const pts = getCubicPoints()
      for (let i = 0; i<pts.length; i+=2) {
        drawTexture(
          ctx, texture,
          pts[i], pts[i+1],
          size, size,
          2 * Math.PI * Math.random()
        );
      }
    };
    oldMousePos = { x: e.clientX, y: e.clientY }
  }
	const handlerMouseUp = (e) => {
		window.removeEventListener('mousemove', handlerMouseMove, false);
    ctx.globalCompositeOperation = 'source-over';
	}
  const rotateArray = (arr, step) => {
    let offset = 0;
    let copy = arr.concat();
    for (let i = 0, ii = arr.length; i < ii; i++) {
      if (i + step < ii) {
        arr[i + step] = copy[i];
        offset++;
      } else {
        arr[i - offset] = copy[i];
      }
    };
  }
  const getCubicPoints = () => {
    let a0,a1,a2;
    function component (t, y0, y1, y2, y3) {
      a0 = y3 - y2 - y0 + y1;
      a1 = y0 - y1 - a0;
      a2 = y2 - y0;
      return(a0*t*t*t + a1*t*t + a2*t + y1);
    }
     
    for(let i=0, ii = interpolatedPts.length; i < ii; i+=2) {
      let t = (i * .5 +.25) / (ii/2);
      interpolatedPts[i]   = component(t, buffer[0], buffer[2], buffer[4], buffer[6]);
      interpolatedPts[i+1] = component(t, buffer[1], buffer[3], buffer[5], buffer[7]);
	  }
    return interpolatedPts;
  }
  class Particle {
    constructor(context, x, y, w, h, r) {
      this.init(context, x, y, w, h, r)
    }
    init(context, x, y, w, h, r) {
      setTimeout(() => { 
        const pattern = context.createPattern(background, 'repeat');
        context.globalAlpha = 0.25;
        context.fillStyle = pattern;
        context.fillRect(0, 0, width, height);
        context.globalAlpha = 1;
      }, 0)
    }
  }
  const drawTexture = (context, img, x, y, w, h, r) => {
    context.translate(x,y);
    context.rotate(r);
    context.drawImage(img, -w/2, -h/2, w, h);
    context.rotate(-r);
    context.translate(-x,-y);
    // new Particle(context, x, y, w, h, r)
  };
  return (
    <>
      <CanvasStyle ref={ refCanvas } />
      <img src="/img/brush-light.png" ref={ refTextureLight } style={{ display: "none" }} />
      <img src="/img/brush-dark.png" ref={ refTextureDark } style={{ display: "none" }} />
      <img src="/img/noise-light.jpg" ref={ refBackgroundLight } style={{ display: "none" }} />
      <img src="/img/noise-dark.jpg" ref={ refBackgroundDark } style={{ display: "none" }} />
    </>
  )
}

export default Canvas;
