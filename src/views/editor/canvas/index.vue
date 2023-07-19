<script setup lang='ts'>
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'
import { Vector3 } from 'three'
import scene from '@/three/scene'
import { renderer } from '@/three/render'
import { createPerspectiveCamera } from '@/three/camera'
import animate from '@/three/animate'
import { createOrbitControls } from '@/three/controls'
import { createBox } from '@/three/createCube'
import { createAxesHelper, createGridHelper } from '@/three/helpers'

const sceneDiv = ref<Ref | null>(null)
const camera = createPerspectiveCamera(new Vector3(0, 10, 10))
const orbitControls = createOrbitControls(camera, renderer)
const axesHelper = createAxesHelper(10)
const gridHelper = createGridHelper(100, 30)

scene.add(camera)
scene.add(createBox())
scene.add(axesHelper)
scene.add(gridHelper)

onMounted(() => {
  sceneDiv.value!.appendChild(renderer.domElement)
  animate(renderer, scene, camera, orbitControls)
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
