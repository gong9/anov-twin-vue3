import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three'

export const createBox = () => {
  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({ color: 0x00FF00 })
  return new Mesh(geometry, material)
}
