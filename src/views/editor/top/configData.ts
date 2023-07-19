interface ConfigDataType {
  label: string
  key: string
  icon: string
  path: string | number
  onClick?: () => void
}

export enum ConfigDataEnum {
  operate = 'operate',
  setting = 'setting',
}

export const operateData: ConfigDataType[] = [
  {
    label: '导入',
    key: 'import',
    path: 0,
    icon: 'UploadOutlined',
    onClick: () => {},
  },
  {
    label: '导出',
    key: 'export',
    path: 1,
    icon: 'DownloadOutlined',
    onClick: () => {},
  },
  {
    label: '回退',
    key: 'undo',
    path: 2,
    icon: 'UndoOutlined',
    onClick: () => {},
  },
  {
    label: '撤销',
    key: 'redo',
    path: 3,
    icon: 'RedoOutlined',
    onClick: () => {},
  },
  {
    label: '清空',
    key: 'clear',
    path: 4,
    icon: 'CloseOutlined',
    onClick: () => {},
  },
  {
    label: '保存',
    icon: 'SaveOutlined',
    key: 'save',
    path: 5,
    onClick: () => {
      console.log(1112)
    },
  },
]

export const settingData: ConfigDataType[] = [
  {
    label: '设置',
    key: 'setting',
    path: 0,
    icon: 'SettingOutlined',
    onClick: () => { },
  },
  {
    label: '帮助',
    key: 'help',
    path: 1,
    icon: 'QuestionCircleOutlined',
    onClick: () => { },
  },
]
