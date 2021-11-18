<template>
  <div class="camera-canvas">
    <img class="camera-image" alt="" src="">
    <canvas width="200" height="100"
            class="oko-canvas"></canvas>
  </div>
</template>

<script lang="ts">

export default  {
  name: "CameraCanvas"
}
</script>

<style scoped>
.camera-canvas{
  height: 100px;
  width: 100px;
  border-color: black;
  background-color: #699bf7;
  border-width: 1px;
  border-radius: 10px;
}
</style>