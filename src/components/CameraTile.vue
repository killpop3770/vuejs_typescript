<template>
  <div class="tile" v-for="cameraTile in camList.camList" v-bind:key="cameraTile" id="template">
    <div class="row" id="{{rowId}}">
      <div class="col-lg-1">
      </div>
      <div class="col-lg-10">
        <div class="camera-board">
          <div class="row">
            <div class="col-lg-2">
              <div class="board-name">
                {{ cameraTile.camName }}
              </div>
            </div>
            <div class="col-lg-4">
              <div class="camera-name">
                {{ cameraTile.camModel }}
              </div>
            </div>
            <div class="col-lg-2">
              <div class="switch-container">
                <label class="pure-material-switch">
                  <input type="checkbox">
                  <span style="user-select:none;"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <CameraCanvas/>
            <Settings/>
          </div>
        </div>
      </div>
      <div class="col-lg-1">
      </div>
    </div>
  </div>
</template>

<script type="ts">
import CameraCanvas from "./CameraCanvas";
import Settings from "./Settings";
import camList from "@/store";

export default {
  name: "CameraTile",

  components: {
    CameraCanvas,
    Settings,
  },

  data() {
    return {
      camList
    }
  }
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

.row {
  margin-left: 0;
  margin-right: 0;
}


.pure-material-switch {
  z-index: 0;
  position: relative;
  display: inline-block;
  color: #66768A;
  font-size: 16px;
  line-height: 1.5;
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

.camera-board {
  margin-top: 14px;

  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.board-name {
  padding-left: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
}

.camera-name {
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
}

.switch-container {
  display: flex;
  justify-content: right;
  padding-left: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
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