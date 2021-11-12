<template>
  <div class="tile">{{l}}</div>
</template>



<script lang="ts">
import {Vue} from "vue-class-component";
import l from "@/store";

export default class Tile extends Vue{
  name: "CameraTile"
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tile {
  width: 1000px;
  height: 300px;
  border: 3px solid black;
  border-radius: 10px;
  color: cyan;
  padding: 15px;
  margin: 10px auto 10px auto;
}
</style>
