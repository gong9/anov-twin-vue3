import type { Vector3 } from 'three'
import { AmbientLight, DirectionalLight, PointLight } from 'three'

const createDirectionalLight = (position: Vector3, color = 0xFFFFFF, intensity = 1) => {
  const directionalLight = new DirectionalLight(color, intensity)
  directionalLight.position.set(position.x, position.y, position.z)

  return directionalLight
}

const createPointLight = (position: Vector3, color = 0xFFFFFF, intensity = 1, distance = 0) => {
  const directionalLight = new PointLight(color, intensity, distance)
  directionalLight.position.set(position.x, position.y, position.z)

  return directionalLight
}

const createAmbientLight = (position: Vector3, color = 0xFFFFFF, intensity = 1) => {
  const ambientLight = new AmbientLight(color, intensity)
  ambientLight.position.set(position.x, position.y, position.z)

  return ambientLight
}

export {
  createPointLight,
  createDirectionalLight,
  createAmbientLight,
}
