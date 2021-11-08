<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
  <CameraTile/>
</template>



<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CameraTile from './components/CameraTile.vue';

@Options({
  components: {
    CameraTile,
  },
})

export default class App extends Vue {}
</script>