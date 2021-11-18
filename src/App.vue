<template>
  <Header/>
  <div>
    <CameraTile/>
  </div>
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