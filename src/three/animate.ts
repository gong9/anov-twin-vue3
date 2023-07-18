import type { Camera, Scene, WebGLRenderer } from 'three'
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const animate = (renderer: WebGLRenderer, scene: Scene, camera: Camera, orbitControls?: OrbitControls) => {
  renderer.render(scene, camera)
  orbitControls?.update()
  requestAnimationFrame(() => animate(renderer, scene, camera, orbitControls))
}

export default animate
