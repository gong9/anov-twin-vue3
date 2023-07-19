import { AxesHelper } from 'three'

export const createAxesHelper = (size = 1) => {
  const axesHelper = new AxesHelper(size)

  return axesHelper
}
