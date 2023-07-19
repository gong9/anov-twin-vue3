import type { PerspectiveCamera, WebGLRenderer } from 'three'
import { Scene } from 'three'

import useThreeStore from '@/store/modules/three'

const threeStore = useThreeStore()
const scene = new Scene()

threeStore.setScene(scene)

export const resetScene = (camera: PerspectiveCamera, renderer: WebGLRenderer) => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
}

export default scene
