import type { Camera, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'

export const createOrbitControls = (camera: Camera, render: WebGLRenderer) => {
  const controls = new OrbitControls(camera, render.domElement)
  controls.enableDamping = true

  return controls
}

export const createTransformControls = (camera: Camera, domElement: HTMLElement) => {
  const transformControls = new TransformControls(camera, domElement)

  return transformControls
}

