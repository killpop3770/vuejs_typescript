<template>
  <div class="container-fluid" id="main">
    <div style="position: sticky; top: 0; z-index: 100">
      <div class="row">
        <div class="col-12">
          <div class="main-nav-up">
            <div class="row">
              <div class="col-lg-2 col-md-2">
                <div class="main-logo">
                  <img class="oko-logo-image" src="../includes/images/logo.png" alt="">
                </div>
              </div>
              <div class="col-lg-8 col-md-8">
              </div>
              <div class="col-lg-2 col-md-2">
                <div class="oko-header-dropdown-container">
                  <button class="btn btn-secondary  oko-dropdown dropdown-toggle" type="button"
                          id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true"
                          aria-expanded="false">
                    Александр
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                    <li><a class="dropdown-item" href="#">Выйти</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-divider"></div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="main-nav-down">
            <div class="row">
              <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-12">
                <div class="oko-tag-container">
                  <div class="oko-tag">
                    Дом
                  </div>
                  <div class="oko-tag">
                    Гараж
                  </div>
                  <div class="oko-tag">
                    Двор
                  </div>
                  <div class="oko-tag">
                    Двор 2
                  </div>
                  <div class="oko-tag">
                    Сад
                  </div>
                </div>
              </div>
              <div class="col-xxl-5 col-xl-6 col-lg-5 col-md-5">
                <div class="oko-toggle-container">
                  <label class="pure-material-switch">
                    <input id="onlyActive" type="checkbox">
                    <span style="user-select:none;">Только активные камеры</span>
                  </label>
                  <label class="pure-material-switch">
                    <input id="enableZones" type="checkbox">
                    <span style="user-select:none;">Отображать зоны</span>
                  </label>
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2">
                <div class="oko-button-container">
                  <button type="button" class="btn btn-primary oko-add-camera" data-bs-toggle="modal"
                          data-bs-target="#exampleModal">Добавить камеру
                  </button>
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2">
                <div class="oko-save-button-container">
                  <button type="button" class="btn btn-primary oko-add-camera" data-bs-toggle="modal"
                          data-bs-target="#exampleModal">Сохранить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content oko-modal-content">
          <div class="modal-header oko-modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Новая камера</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body oko-modal-body">
            <div class="oko-modal-form">
              <div class="input-group  oko-modal-input">
                <input type="text" class="form-control" placeholder="Username" aria-label="Логин">

                <input type="text" class="form-control" placeholder="Server" aria-label="Пароль">
              </div>
              <div class="input-group oko-modal-input">
                <input type="text" class="form-control" placeholder="URL" aria-label="Server">
              </div>
            </div>
          </div>
          <div class="modal-footer oko-modal-footer">
            <button type="button" class="btn btn-primary">Добавить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid" id="container">
  </div>
</template>

<script>
export default {
  name: "Header"
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
.nav-divider {
  width: 100%;
  height: 1px;
  background-color: #E7ECF6;
}

.container-fluid{
  padding-left: 0px;
  padding-right: 0px;
}
.row{
  margin-left: 0px;
  margin-right: 0px;
}

.col-12{
  padding-left: 0px;
  padding-right: 0px;
}
.col-xxl-12{
  padding-left: 0px;
  padding-right: 0px;
}

.oko-button-container{
  margin-left: 21px;
  margin-top: 14px;
}
.oko-toggle-container{
  display: flex;
  width: auto;
  height: auto;
  justify-content: left;
  margin-top: 18px;
  column-gap: 44px;
}

.oko-tag-container{
  margin-top: 18px;
  margin-left: 80px;
  margin-bottom: 16px;
  display: flex;
  justify-content: left;
  column-gap: 12px;
  user-select: none;

}

.oko-tag{
  background-color: #F3F7FE;
  color: #66768A;
  padding: 4px 18px 4px 18px;
  border-radius: 3px;
}
.oko-tag:hover{
  background-color: #dbdee5;
}


.oko-header-dropdown-container{

  margin-left: auto;
  margin-top: 38px;
}

.oko-dropdown{

  background-color: #ffffff;
  color: #293D55;
  border: #ffffff;
  outline: none !important;
  box-shadow: none;
  margin-left: 64px;
}
.oko-dropdown:hover{
  background-color: #ffffff;
  color: #293D55;
  border: transparent;
  outline: none !important;
  box-shadow: none;
}
.oko-dropdown:focus {
  background-color: #ffffff;
  color: #293D55;
  border: transparent;
  outline: none !important;
  box-shadow: none;
}
.oko-dropdown:active{
  background-color: #ffffff;
  color: #293D55;
  border: transparent;
  outline: none !important;
  box-shadow: none;
}
.oko-dropdown:active:hover{
  background-color: #ffffff;
  color: #293D55;
  border: transparent;
  outline: none !important;
  box-shadow: none;
}
.main-logo{
  display: block;
  width: 67px;
  height: 45px;
  margin-top: 32px;
  margin-left: 80px;
  margin-bottom: 13px;
}

.oko-logo-image{
  width: 67px;
  height: 45px;
}
.main-nav-up{
  display: block;
  background-color: #ffffff;
  width: 100%;
  height: auto;
}

.main-nav-down{
  display: block;
  background-color: #ffffff;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 4px 4px rgba(0,0,0,0.25));
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
  box-shadow: 0 1px 0px 1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
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
.oko-modal-header{
  padding: 22px 1rem 0px 1rem;
  border-bottom: 0px solid #dee2e6;
  align-items: normal;
  justify-content: center;

}
.oko-modal-footer{
  border-top: 0px solid #dee2e6;
  justify-content: center;
  padding: 22px 94px 182px 94px;
}
.oko-modal-body{
  padding: 67px 94px 22px 94px;
}
.oko-modal-input{
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  align-items: normal;
  justify-content: space-between;
  column-gap: 10px;
}
.oko-modal-content{
  border-radius: 10px;
}

.oko-save-button-container {
  margin-left: 80px;
  margin-bottom: 10px;
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

@font-face {
  font-family: 'icomoon';
  /*src: url('../includes/fonts/icomoon/icomoon.eot?fkw12i');*/
  /*src: url('/includes/fontsdes/fonts/icomoon/icomoon.eot?fkw12i#iefix') format('embedded-opentype'),*/
  /*url('/includes/fontsdes/fonts/icomoon/icomoon.ttf?fkw12i') format('truetype'),*/
  /*url('/includes/fontsdes/fonts/icomoon/icomoon.woff?fkw12i') format('woff'),*/
  /*url('/includes/fontsdes/fonts/icomoon/icomoon.svg?fkw12i#icomoon') format('svg');*/
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.oko-logo-image {
  width: 67px;
  height: 45px;
}

.oko-header-dropdown-container {
  position: absolute;
  margin-left: auto;
  right: 80px;
  margin-top: 38px;
}

.oko-dropdown {
  background-color: #ffffff;
  color: #293D55;
  border: #ffffff;
  outline: none !important;
  box-shadow: none;
}

.oko-dropdown:hover {
  background-color: #ffffff;
  color: #293D55;
  border: transparent;
  outline: none !important;
  box-shadow: none;
}

.oko-dropdown:focus {
  background-color: #ffffff;
  color: #293D55;
  border: transparent;
  outline: none !important;
  box-shadow: none;
}

.oko-dropdown:active {
  background-color: #ffffff;
  color: #293D55;
  border: transparent;
  outline: none !important;
  box-shadow: none;
}

.oko-dropdown:active:hover {
  background-color: #ffffff;
  color: #293D55;
  border: transparent;
  outline: none !important;
  box-shadow: none;
}

.oko-add-camera {
  position: absolute;
  right: 80px;
  display: block;
  padding: 12px 25px 12px 25px;
  top: 104px;
  background-color: #0073FF;
  color: #ffffff;
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
  box-shadow: 0 1px 0px 1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
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

</style>