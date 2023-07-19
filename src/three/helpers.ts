import { AxesHelper, GridHelper } from 'three'

export const createAxesHelper = (size = 1) => {
  const axesHelper = new AxesHelper(size)

  return axesHelper
}

export const createGridHelper = (size = 10, divisions = 10) => {
  const gridHelper = new GridHelper(size, divisions)

  return gridHelper
}
