<script setup lang='ts'>
import { } from 'vue'
import { dataSources } from './configData'
</script>

<template>
  <div
    className="flex editor-left mb-2 pt-2" :style="{ backgroundColor: '#252526' }"
  >
    <div className="flex flex-col editor-left-menu pr-1">
      <el-menu class="menu-left">
        <el-menu-item v-for="item in dataSources" :key="item.key" :index="item.key">
          {{ item.label }}
        </el-menu-item>
      </el-menu>
    </div>
    <div className="editor-left-item pl-1" :style="{ width: '150px', height: 'auto' }" />
  </div>
</template>

<style scoped lang='scss'>
.menu-left{
    height: 100%;
}
</style>
