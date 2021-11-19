<template>
  <!--     https://github.com/Roman1510/memory-card-game/blob/main/src/App.vue-->
  <div class="tile" v-for="cameraTile in camList.camList" v-bind:key="cameraTile">
    <div class="tile-header">{{ cameraTile.camName }}</div>
    <div class="box">
      <CameraCanvas/>
      <Settings/>
    </div>
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
  border: 2px solid black;
  border-radius: 10px;
  color: black;
  padding: 15px;
  margin: 10px auto 10px auto; /* up right down left */
  background-color: #bada55;
}

.tile-header{
  background-color: #ffc720;
  display: flex;
  border: 2px solid black;
  border-radius: 5px;
  height: 30px;
  justify-content: center;
}

.box{
  display: flex;
  justify-content: space-between;
  margin: 30px 25px 0 30px;  /* up right down left */
}

</style>
