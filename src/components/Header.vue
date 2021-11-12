<template>

  <div class="container-fluid" id="main">
    <div style="position: sticky; top: 0; z-index: 100">
      <div class="row">
        <div class="col-12">
          <div class="main-nav-up">
            <div class="row">
              <div class="col-lg-2 col-md-2">
                <div class="main-logo">
                  <img class="oko-logo-image" src="src/includes/images/logo.png" alt="">
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
  <div class="container-fluid" id="container"></div>
</template>


<script>
export default {
  name: "Header"
}
</script>


<style scoped>
/*.header {*/
/*  display: flex;*/
/*  margin: auto;*/
/*  border: 3px solid black;*/
/*  justify-content: center;*/
/*}*/
</style>