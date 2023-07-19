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
import { createAxesHelper } from '@/three/helpers'

const sceneDiv = ref<Ref | null>(null)
const camera = createPerspectiveCamera(new Vector3(0, 0, 10))
const orbitControls = createOrbitControls(camera, renderer)
const axesHelper = createAxesHelper(10)

scene.add(camera)
scene.add(createBox())
scene.add(axesHelper)

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
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
