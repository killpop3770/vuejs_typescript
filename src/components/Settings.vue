<template>
  <div class="col-lg-4">
    <div class="setting-card-container">
      <div class="setting-card">
        <div class="setting-card-header" id="{{cardId}}">
          <div class="setting-card-header-tab tab-disable" id="{{firstTabId}}">
            Настройки
          </div>
          <div class="setting-card-header-tab tab-active" id="{{secondTabId}}">
            Зоны
          </div>
          <div class="setting-card-header-tab tab-disable" id="{{thirdTabId}}">
            Оповещение
          </div>
          <div class="setting-card-header-tab tab-disable" id="{{fourthTabId}}">
            Правила
          </div>
        </div>

        <div class="settings-card-content content-hidden" id="{{firstTabContent}}">
        </div>
        <div class="settings-card-content content-active" id="{{secondTabContent}}">
          <div class="zones-container">

          </div>
          <div class="add-zone-button-holder">
            <button type="button" class="btn btn-primary add-zone-button"
                    id="{{addZoneButtonId}}" >
              Добавить
            </button>
            <button type="button" class="btn btn-primary end-zone-button"
                    id="{{endZoneButtonId}}" hidden>
              Завершить
            </button>
          </div>
        </div>
        <div class="settings-card-content content-hidden" id="{{thirdTabContent}}">
        </div>
        <div class="settings-card-content content-hidden" id="{{fourthTabContent}}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings"
}
</script>

<style scoped>
@font-face {
  font-family: 'icomoon';
  src:  url('../includes/fonts/icomoon.ttf?fkw12i') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
body{
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
  background-color: rgba( 0, 0, 0, 0.38);
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

.setting-card-container {
  padding-top: 0;
  padding-bottom: 24px;
  width: auto;
  height: 432px;
}

.setting-card{
  height: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.setting-card-header{
  display: flex;
  padding: 2px 2px 2px 2px;
  flex-direction: row;
  width: 100%;
  background-color: #EEEEEF;
  border-radius: 8px;
  height: 32px !important;
}

.setting-card-header-tab{
  display: block;
  width: 25%;
  height: 28px;
  align-content: center;
  text-align: center;
  background-color: #EEEEEF;
  user-select:none;
  cursor: pointer;
}

.tab-active{
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 1.0);

}
.tab-disable{
  background-color: #EEEEEF;
}
.settings-card-content{
  height: 360px;
  padding: 14px 16px 14px 16px;
  position: relative;
}
.content-active{
  display: block;
}
.content-hidden{
  display: none;
}

.add-zone-button-holder{
  position: absolute;
  left:    14px;
  bottom:   0;
}
.add-zone-button{

}
.end-zone-button{

}
.zones-container{
  padding: 10px 0 0 0;
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