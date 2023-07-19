import type { Vector3 } from 'three'
import { DirectionalLight, PointLight } from 'three'

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

export {
  createPointLight,
  createDirectionalLight,
}
