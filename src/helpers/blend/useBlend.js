import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useEffect, useMemo, useRef } from 'react'
import material from './blend'
import { getFullscreenTriangle } from '@/helpers/getFullScreenTriangle'
import { disposeAll } from '@/helpers/disposeAll'
import { useSpring, config } from '@react-spring/web'
import useStore from '@/helpers/store'
const { damp } = THREE.MathUtils

export default function useBlend(flowmap) {
  const theme = useStore((s) => s.theme)
  const { size, gl } = useThree()
  const { isWebGL2 } = gl.capabilities

  const [complexRTT, postScene, postCamera, screen] = useMemo(() => {
    const postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const complexRTT = isWebGL2
      ? new THREE.WebGLMultisampleRenderTarget(512, 512)
      : new THREE.WebGLRenderTarget(512, 512)

    complexRTT.texture.generateMipmaps = false
    complexRTT.depthBuffer = false
    complexRTT.stencilBuffer = false
    complexRTT.texture.format = THREE.RGBFormat
    complexRTT.samples = 4

    material.uniforms.uTheme.value = theme === 'light' ? new THREE.Vector3(0, 0, 0) : new THREE.Vector3(1, 1, 1)
    material.uniforms.tFlowMap.value = flowmap.value
    material.uniforms.uRes.value = new THREE.Vector2(size.width, size.height)

    // Fullscreen triangle
    const postScene = new THREE.Scene()

    const postGeometry = getFullscreenTriangle()

    const screen = new THREE.Mesh(postGeometry, material)
    screen.frustumCulled = false
    postScene.add(screen)
    postScene.background = new THREE.Color(0x212121)

    // const postScene = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)

    return [complexRTT, postScene, postCamera, screen]
  }, [])

  const animValue = useRef(0)
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    config: config.gentle,
  }))
  api.start({
    opacity: 0.5,
    onChange: ({ value }) => {
      animValue.current = value.opacity
    },
  })

  useEffect(() => {
    return () => {
      complexRTT.dispose()
      disposeAll(postScene)
    }
  }, [])

  useEffect(() => {
    screen.material.uniforms.uTheme.value = theme === 'light' ? new THREE.Vector3(0, 0, 0) : new THREE.Vector3(1, 1, 1)
  }, [theme])

  useFrame(({ gl }, delta) => {
    screen.material.uniforms.anim.value = damp(
      screen.material.uniforms.anim.value,
      animValue.current,
      1.75,
      delta
    )
    screen.material.uniforms.time.value += delta
    gl.setRenderTarget(null)
    gl.render(postScene, postCamera)
  }, 10)

  useEffect(() => {
    complexRTT.setSize(size.width, size.height)
    material.uniforms.uRes.value = new THREE.Vector2(size.width, size.height)
  }, [complexRTT, size])

  return {
    complexRTT: complexRTT,
  }
}
