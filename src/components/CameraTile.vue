<template>

  <div class="tile" v-bind:key="camList.camList"></div>
  <!--  <div class="tile"></div>-->
</template>


<script lang="ts">
import {Vue} from "vue-class-component";
import camList from "@/store";

export default class Tile extends Vue {
  name: "CameraTile"

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
