<script setup lang='ts'>
import { ref } from 'vue'

interface ConfigDataType {
  label: string
  key: string
  icon: string
  path: string | number
  onClick?: () => void
}

enum ConfigDataEnum {
  operate = 'operate',
  setting = 'setting',
}

const operateData: ConfigDataType[] = [
  {
    label: '导入',
    key: 'import',
    path: 0,
    icon: 'UploadOutlined',
    onClick: () => {
      alert('导入')
    },
  },
  {
    label: '导出',
    key: 'export',
    path: 1,
    icon: 'DownloadOutlined',
    onClick: () => {

    },
  },
  {
    label: '回退',
    key: 'undo',
    path: 2,
    icon: 'UndoOutlined',
    onClick: () => {

    },
  },
  {
    label: '撤销',
    key: 'redo',
    path: 3,
    icon: 'RedoOutlined',
    onClick: () => {

    },
  },
  {
    label: '清空',
    key: 'clear',
    path: 4,
    icon: 'CloseOutlined',
    onClick: () => {

    },
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

const settingData: ConfigDataType[] = [
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

const handleItemAction = (type: ConfigDataEnum, key: string) => {
  const currentData = type === ConfigDataEnum.operate ? operateData : settingData
  currentData[~~key].onClick?.()
}
</script>

<template>
  <div class="editor-top flex justify-between pt-1 items-center cursor-pointer">
    <div className="ml-5">
      anov-twin
    </div>

    <div>
      <el-menu class="top-menu" mode="horizontal" :ellipsis="false" @select="(key:string) => handleItemAction(ConfigDataEnum.operate, key)">
        <el-menu-item v-for="item in operateData" :key="item.key" :index="String(item.path)" class="top-menu-item">
          <div class="top-menu-item-label flex justify-center items-center">
            {{ item.label }}
          </div>
        </el-menu-item>
      </el-menu>
    </div>

    <div>
      <el-menu class="top-menu-right" mode="horizontal" :ellipsis="false" @select="(key:string) => handleItemAction(ConfigDataEnum.setting, key)">
        <el-menu-item v-for="item in settingData" :key="item.key" :index="String(item.path)" class="top-menu-item">
          <div class="top-menu-item-label">
            {{ item.label }}
          </div>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.editor-top {
    height: 60px;

    .top-menu {
        width: 100%;
    }

    .top-menu-right {
        width: 100%;
    }

    .top-menu-item {
        font-size: 12px;
        width: 80px;
    }

    .el-menu--horizontal {
        border-bottom: solid 1px #080f1d !important;
    }
    .top-menu-item-label{
        width: 100%;
        height: 100%;
        z-index:1000
    }
}
</style>
