interface DataSourcesType {
  label: string
  name: string
  key: string
  source?: string
  children?: DataSourcesType[]
}

export const dataSources: DataSourcesType[] = [
  {
    label: '模型',
    name: 'material',
    key: 'material',
    children: [
      {
        name: 'diamond',
        key: 'diamond',
        label: '钻石',
        source: './gltf/dflat.glb',
      },
      {
        name: 'monkey',
        key: 'monkey',
        label: '猴子',
        source: './gltf/monkey.glb',
      },
      {
        name: 'wall',
        key: 'wall',
        label: '工厂',
        source: './gltf/wall.glb',
      },
      {
        name: 'tree',
        key: 'tree',
        label: '垂柳',
        source: './gltf/tree.glb',
      },
      {
        name: 'bus',
        key: 'bus',
        label: '公交',
        source: './gltf/bus.glb',
      },
      {
        name: 'house',
        key: 'house',
        label: '建筑',
        source: './gltf/house.glb',
      },
    ],
  },
  {
    label: '物体',
    name: 'structure',
    key: 'structure',
    children: [
      {
        name: 'boxGeometry',
        key: 'boxGeometry',
        label: '立方体',
      },
      {
        name: 'capsuleGeometry',
        key: 'capsuleGeometry',
        label: '胶囊图',
      },
      {
        name: 'circleGeometry',
        key: 'circleGeometry',
        label: '圆形',
      },
      {
        name: 'coneGeometry',
        key: 'coneGeometry',
        label: '圆锥',
      },
    ],
  },
]
