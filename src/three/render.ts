import { ACESFilmicToneMapping, WebGLRenderer } from 'three'
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer'

const renderer = new WebGLRenderer({
  antialias: true,
  logarithmicDepthBuffer: true,
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.toneMapping = ACESFilmicToneMapping
renderer.toneMappingExposure = 0.3

const css3drender = new CSS3DRenderer()
css3drender.setSize(window.innerWidth, window.innerHeight)
document.querySelector('.cssrender')!.appendChild(css3drender.domElement)

export {
  renderer,
  css3drender,
}
