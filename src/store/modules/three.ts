import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'

export enum ControlsItemType {
  orbitControls = 'orbitControls',
  transformControls = 'transformControls',
}

export enum CameraItemType {
  perspectiveCamera = 'perspectiveCamera',
}

type ControlsValueType<T> = T extends ControlsItemType.orbitControls ? OrbitControls : TransformControls
type CameraValueType<T> = T extends CameraItemType.perspectiveCamera ? PerspectiveCamera : unknown

interface ControlsType {
  orbitControls?: OrbitControls
  transformControls?: TransformControls
}

interface CameraType {
  perspectiveCamera?: PerspectiveCamera
}

const useThreeStore = defineStore('threeStore', () => {
  const scene = ref<null | Scene>(null)
  const renderer = ref<null | WebGLRenderer>(null)
  const controls = ref< ControlsType | null>(null)
  const camera = ref<null | CameraType>(null)

  const setScene = (value: Scene) => {
    scene.value = value
  }

  const setRenderer = (value: WebGLRenderer) => {
    renderer.value = value
  }

  const setControls = <T extends ControlsItemType> (key: T, value: ControlsValueType<T>) => {
    if ((controls.value)) {
      controls.value[key] = value as any
    }
    else {
      controls.value = {
        [key]: value,
      }
    }
  }

  const setCamera = <T extends CameraItemType>(key: T, value: CameraValueType<T>) => {
    if ((camera.value)) {
      camera.value[key] = value as any
    }
    else {
      camera.value = {
        [key]: value,
      }
    }
  }

  return {
    scene,
    renderer,
    controls,
    camera,
    setScene,
    setRenderer,
    setControls,
    setCamera,
  }
})

export default useThreeStore
