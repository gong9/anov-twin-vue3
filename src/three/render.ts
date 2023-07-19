import { ACESFilmicToneMapping, WebGLRenderer } from 'three'

import useThreeStore from '@/store/modules/three'

const threeStore = useThreeStore()
const renderer = new WebGLRenderer({
  antialias: true,
  logarithmicDepthBuffer: true,
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.toneMapping = ACESFilmicToneMapping
renderer.toneMappingExposure = 0.3
renderer.setPixelRatio(window.devicePixelRatio)

threeStore.setRenderer(renderer)

export {
  renderer,
}
