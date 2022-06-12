import * as THREE from 'three'
import fragmentShader from './blend.frag'
import vertexShader from './blend.vert'

const material = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: null },
    anim: { value: 0 },
    tFlowMap: { value: null },
    uRes: { value: null },
    uTheme: { value: null }
  },
  fragmentShader: fragmentShader,
  vertexShader,
})

export default material
