<template>
  <Header/>
  <div>
    <!--     https://github.com/Roman1510/memory-card-game/blob/main/src/App.vue-->
    <CameraTile v-for="cameraTile in camList.camList" v-bind:key="cameraTile" v-text="cameraTile"></CameraTile> <!--TODO: REDO!!!-->
  </div>
</template>


<script lang="ts">
import CameraTile from "@/components/CameraTile.vue"
import Header from "@/components/Header.vue"
import camList from "@/store";

export default {

  components: {
    Header,
    CameraTile,
  },

  data(): any {
    return {
      camList
    }
  }
}

</script>