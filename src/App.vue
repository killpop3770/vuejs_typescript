<template>
  <Header/>
  <div>
<!--     https://github.com/Roman1510/memory-card-game/blob/main/src/App.vue-->
    <CameraTile v-for="cameraTile in cameraTileList" v-bind:key="cameraTile"/>
  </div>
</template>


<script lang="ts">
import CameraTile from "@/components/CameraTile.vue"
import Header from "@/components/Header.vue"

export default {

  components: {
    Header,
    CameraTile
  },

  data(): any {
    return {
      cameraTileList: [
        {number: "1"},
        {number: "2"},
        {number: "3"},
        {number: "4"},
      ]
    }
  }
}

</script>