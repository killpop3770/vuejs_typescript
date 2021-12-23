<template>
  <Header/>
  <br>
  <br>
  <br>
  <div>
    <CameraTile/>
  </div>
  <br>
</template>


<script lang="ts">
import CameraTile from "@/components/CameraTile.vue";
import Header from "@/components/Header.vue";

export default {

  components: {
    Header,
    CameraTile,
  },
}

</script>