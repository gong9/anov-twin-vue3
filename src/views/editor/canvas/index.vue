<script setup lang='ts'>
import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { Vector3 } from 'three'
import scene, { resetScene } from '@/three/scene'
import { renderer } from '@/three/render'
import { createPerspectiveCamera } from '@/three/camera'
import animate from '@/three/animate'
import { createOrbitControls } from '@/three/controls'
import { createBox } from '@/three/createCube'
import { createAxesHelper, createGridHelper } from '@/three/helpers'
import useThreeStore from '@/store/modules/three'

const sceneDiv = ref<Ref | null>(null)
const camera = createPerspectiveCamera(new Vector3(0, 10, 10))
const orbitControls = createOrbitControls(camera, renderer)
const axesHelper = createAxesHelper(10)
const gridHelper = createGridHelper(100, 30)
const threeStore = useThreeStore()

scene.add(camera)
scene.add(createBox())
scene.add(axesHelper)
scene.add(gridHelper)

onMounted(() => {
  sceneDiv.value!.appendChild(renderer.domElement)
  animate(renderer, scene, camera, orbitControls)
  window.addEventListener('resize', () => resetScene(camera, renderer))
})

onUnmounted(() => {
  window.removeEventListener('resize', () => resetScene(camera, renderer))
})
</script>

<template>
  <div ref="sceneDiv" class="scene" />
</template>

<style scoped lang='scss'>
.scene {
  width: 100%;
}
</style>
