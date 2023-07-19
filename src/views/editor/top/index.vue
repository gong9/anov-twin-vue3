<script setup lang='ts'>
import { ConfigDataEnum, operateData, settingData } from './configData'

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
