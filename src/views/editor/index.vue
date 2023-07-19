<script setup lang='ts'>
import { onMounted, onUnmounted } from 'vue'

import Top from './top/index.vue'
import Left from './left/index.vue'
import Canvas from './canvas/index.vue'
import Right from './right/index.vue'
import controller from './controller'

onMounted(() => {
  controller.init()
})

onUnmounted(() => {
  controller.destroy()
})
</script>

<template>
  <div class="editor">
    <Top />
    <div class="flex justify-between" :style="{ height: '95vh' }">
      <Left />
      <Canvas />
      <Right />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.editor {
  overflow-y: hidden;
    height: 100vh;
}
</style>
