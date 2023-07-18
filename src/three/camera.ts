import { PerspectiveCamera } from 'three'
import type { Vector3 } from 'three'

export const createPerspectiveCamera = (position: Vector3) => {
  const camera = new PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  )

  camera.position.set(position.x, position.y, position.z)
}

