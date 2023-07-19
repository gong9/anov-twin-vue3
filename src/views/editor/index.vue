<script setup lang='ts'>
import { } from 'vue'
import Top from './top/index.vue'
import Left from './left/index.vue'
import Canvas from './canvas/index.vue'
import Right from './right/index.vue'
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
