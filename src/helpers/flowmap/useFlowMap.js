import {
  HalfFloatType,
  Mesh,
  OrthographicCamera,
  Vector2,
  Scene,
  WebGLRenderTarget,
  GLSL3,
  ShaderMaterial,
} from 'three'

import vertexShader from '@/helpers/flowmap/flowmap.vert'
import fragmentShader from '@/helpers/flowmap/flowmap.frag'
import { useEffect, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { disposeAll } from '@/helpers/disposeAll'
import { getFullscreenTriangle } from '@/helpers/getFullScreenTriangle'
import useStore from '../store'

export const useFlowMap = (falloff = 0.05, alpha = 1.0, dissipation = 0.955) => {
  const { size } = useThree()

  const screenScene = useMemo(() => new Scene(), [])
  const screenCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)
  const screenGeometry = getFullscreenTriangle()

  const mousePos = useMemo(() => new Vector2(), [])
  const mouseCache = useMemo(() => new Vector2(), [])
  useEffect(() => {
    const mouseMove = (e) => {      
      const mouseX = ( e.clientX / window.innerWidth ) * 2 - 1;
      const mouseY =  - ( e.clientY / window.innerHeight ) * 2 + 1;
      mousePos.set(mouseX, mouseY)
    }
    document.addEventListener('mousemove', mouseMove)
    return () => {
      document.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  let renderTargetRead = useMemo(
    () =>
      new WebGLRenderTarget(size.width, size.height, {
        type: HalfFloatType,
        depthBuffer: false,
      }),
    [size]
  )

  renderTargetRead.name = 'flowRTTread'

  let renderTargetWrite = useMemo(
    () =>
      new WebGLRenderTarget(size.width, size.height, {
        type: HalfFloatType,
        depthBuffer: false,
      }),
    [size]
  )
  renderTargetWrite.name = 'flowRTTwrite'
  renderTargetWrite.depthBuffer = false

  // Flowmap material
  const material = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          tMap: { value: null },
          uFalloff: { value: falloff },
          uAlpha: { value: alpha },
          time: { value: 0 },
          uVisible: { value: true },
          uDissipation: { value: dissipation },
          uRes: { value: new Vector2(size.width, size.height) },
          uMouse: { value: new Vector2(-0.25, 0.5) },
        },
        vertexShader,
        fragmentShader,
        depthTest: false,
        glslVersion: GLSL3,
      }),
    []
  )

  const screen = useMemo(() => new Mesh(screenGeometry, material), [])

  useStore.setState({
    flowmap: screen.material.uniforms.tMap.value,
  })

  screen.frustumCulled = false
  screenScene.add(screen)

  useFrame(({ gl, mouse, scene, camera }, delta) => {
    if (material) {
      let ratio = 0
      const mouseX = mousePos.x * 0.5 + 0.5 + ratio
      const mouseY = mousePos.y * 0.5 + 0.5
      if (mouseX === mouseCache.x && mouseY === mouseCache.y) {
        material.uniforms.uVisible.value = false
      } else {
        material.uniforms.uVisible.value = true
      }
      mouseCache.set(mousePos.x * 0.5 + 0.5 + ratio, mousePos.y * 0.5 + 0.5)
      material.uniforms.time.value += delta
      material.uniforms.uMouse.value.lerp(mouseCache, 0.14)
    }
    gl.autoClear = false

    gl.setRenderTarget(renderTargetWrite)
    gl.render(screenScene, screenCamera)

    // Swap render targets
    const temp = renderTargetRead
    renderTargetRead = renderTargetWrite
    renderTargetWrite = temp

    material.uniforms.tMap.value = renderTargetRead.texture

    gl.setRenderTarget(null)

    gl.render(screenScene, screenCamera)
  }, 1)

  // useFrame(({ scene, camera, gl }, delta) => {
  //   gl.clear()
  //   gl.setRenderTarget(null)

  //   gl.render(scene, camera)
  // }, 10)

  useEffect(() => {
    renderTargetWrite.setSize(size.width, size.height)
    renderTargetRead.setSize(size.width, size.height)
    material.uniforms.uRes.value = new Vector2(size.width, size.height)
  }, [size])

  useEffect(() => {
    return () => {
      renderTargetWrite.dispose()
      renderTargetRead.dispose()
      disposeAll(screenScene)
    }
  }, [])

  return renderTargetRead.texture
}
