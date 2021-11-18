<template>
  <!--     https://github.com/Roman1510/memory-card-game/blob/main/src/App.vue-->
  <div class="tile" v-for="cameraTile in camList.camList" v-bind:key="cameraTile">
    {{ cameraTile.camName }}
    <CameraCanvas/>
    <Settings/>
    <!--    {{ cameraTile.camUrl }},-->
    <!--    {{ cameraTile.camIsActive }},-->

  </div>
</template>


<script lang="ts">
import camList from "@/store";
import CameraCanvas from "@/components/CameraCanvas.vue";
import Settings from "@/components/Settings.vue";

export default {
  name: "CameraTile",

  components: {
    CameraCanvas,
    Settings,
  },

  data() {
    return {
      camList,
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tile {
  width: 1000px;
  height: 300px;
  border: 3px solid black;
  border-radius: 10px;
  color: black;
  padding: 15px;
  margin: 10px auto 10px auto;
  background-color: #bada55;
}
</style>
