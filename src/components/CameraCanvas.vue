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
  height: 200px;
  width: 500px;
  border: 2px solid black;
  background-color: #699bf7;
  border-radius: 10px;
}
</style>