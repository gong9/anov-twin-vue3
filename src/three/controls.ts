import type { Camera, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export const createOrbitControls = (camera: Camera, render: WebGLRenderer) => {
  const controls = new OrbitControls(camera, render.domElement)
  controls.enableDamping = true

  return controls
}

