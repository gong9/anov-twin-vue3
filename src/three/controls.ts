import type { Camera, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'

import useThreeStore, { ControlsItemType } from '@/store/modules/three'

const threeStore = useThreeStore()

export const createOrbitControls = (camera: Camera, render: WebGLRenderer) => {
  const controls = new OrbitControls(camera, render.domElement)
  controls.enableDamping = true

  threeStore.setControls(
    ControlsItemType.orbitControls,
    controls,
  )

  return controls
}

export const createTransformControls = (camera: Camera, domElement: HTMLElement) => {
  const transformControls = new TransformControls(camera, domElement)

  threeStore.setControls(
    ControlsItemType.transformControls,
    transformControls,
  )

  return transformControls
}

