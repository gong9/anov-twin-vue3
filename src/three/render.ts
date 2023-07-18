import { ACESFilmicToneMapping, WebGLRenderer } from 'three'

const renderer = new WebGLRenderer({
  antialias: true,
  logarithmicDepthBuffer: true,
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.toneMapping = ACESFilmicToneMapping
renderer.toneMappingExposure = 0.3

export {
  renderer,
}
