<template>
  <div class="col-lg-8">
    <div class="image-container">
      <img id="{{camId}}" class="camera-image">
      <canvas id="{{canvasId}}" width="{{canvasWidth}}" height="{{canvasHeight}}"
              class="oko-canvas"></canvas>
    </div>
  </div>
</template>

<script>
import {canvasInit, cam} from "@/includes/js/oko.js"
import camList from "@/store";

// console.log(cam)

export default {
  name: "CameraCanvas",
  data() {
    return {
      cam: camList,
    }
  },
  computed: {
    canvasInit,

  },
}
</script>

<style scoped>
@font-face {
  font-family: 'icomoon';
  src: url('../includes/fonts/icomoon.ttf?fkw12i') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

body {
  overflow-y: hidden;
  overflow: scroll;
}


/* Input */
.pure-material-switch > input {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  z-index: -1;
  position: absolute;
  right: 6px;
  top: -8px;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgba(0 0, 0 0.38);
  outline: none;
  opacity: 0;
  transform: scale(1);
  pointer-events: none;
  transition: opacity 0.3s 0.1s, transform 0.2s 0.1s;
}


.pure-material-switch > span {
  display: inline-block;
  width: 100%;
  cursor: pointer;
}


.pure-material-switch > span::before {
  content: "";
  float: right;
  display: inline-block;
  margin: 5px 0 5px 10px;
  border-radius: 7px;
  width: 34px;
  height: 14px;
  background-color: #c5C5C7;
  vertical-align: top;
  transition: background-color 0.2s, opacity 0.2s;
}

.pure-material-switch > span::after {
  content: "";
  position: absolute;
  top: 2px;
  right: 16px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s, transform 0.2s;
}

.pure-material-switch > input:checked + span::before {
  background-color: #C3ECB0;
}

.pure-material-switch > input:checked + span::after {
  background-color: #87D861;
  transform: translateX(18px);
}

/* Hover, Focus */
.pure-material-switch:hover > input {
  opacity: 0.04;
}

.pure-material-switch > input:focus {
  opacity: 0.12;
}

.pure-material-switch:hover > input:focus {
  opacity: 0.16;
}

/* Active */
.pure-material-switch > input:active {
  opacity: 1;
  transform: scale(0);
  transition: transform 0s, opacity 0s;
}

.pure-material-switch > input:checked:active + span::before {
  background-color: rgba(0, 0, 0, 0.38);
}

/* Disabled */
.pure-material-switch > input:disabled {
  opacity: 0;
}

.pure-material-switch > input:disabled + span {
  color: rgb(0, 0, 0);
  opacity: 0.38;
  cursor: default;
}

.pure-material-switch > input:disabled + span::before {
  background-color: rgba(0, 0, 0, 0.38);
}

.image-container {
  padding-top: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 24px;
  padding-left: 24px;
  position: relative;
  display: inline-block;
}

.oko-canvas {
  position: relative;
  z-index: 50;
  height: 432px;
  width: 768px;
}

.camera-image {
  position: absolute;
  height: 432px;
  width: 768px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #C4C4C4;
  z-index: 1;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>