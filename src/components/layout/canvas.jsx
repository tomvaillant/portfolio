import { Canvas } from '@react-three/fiber'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import { useFlowMap } from '@/helpers/flowmap/useFlowMap'
import useBlend from '@/helpers/blend/useBlend'

function Bg() {
  const flowmap = useFlowMap()
  useBlend(flowmap)

  return null
}

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      mode='concurrent'
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
      }}
      shadows={false}
      gl={{ alpha: true, antialias: false, stencil: false, depth: true }}
      linear={false}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <Bg />
      {children}
    </Canvas>
  )
}

export default LCanvas
