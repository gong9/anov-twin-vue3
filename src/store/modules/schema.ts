import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { GlobalConfigTyle, MeshType, ModelType, SchemaType } from '@/type/SchemaType'

type CubeType = MeshType | ModelType
type PositionType = [x: number, y: number, z: number]

const useSchemaStore = defineStore('schemaStore', () => {
  // schema base data, mesh and model
  const data = ref<SchemaType>({
    mesh: [],
    model: [],
  })

  // global config
  const globalConfig = ref<GlobalConfigTyle>({
    globalConfigData: {
      background: '#ffffff',
    },
    globalConfig: [
      {
        name: 'background',
        label: '背景颜色',
        type: 'color',
      },
    ],
  })

  const currentSelectedMesh = ref<null | CubeType[]>(null)

  const initialMainCameraPosition = ref<PositionType>([0, 3, 10])

  const addMesh = () => {}
  const addModel = () => {}
  const updateMesh = () => {}
  const updateModel = () => {}
  const setData = () => {}
  const setCurrentSelectedMesh = () => {}
  const reset = () => {}
  return {
    data,
    globalConfig,
    currentSelectedMesh,
    initialMainCameraPosition,
    addMesh,
    addModel,
    updateMesh,
    updateModel,
    setData,
    setCurrentSelectedMesh,
    reset,
  }
})

export default useSchemaStore
