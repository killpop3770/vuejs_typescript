<template>
  <div class="header" id="main">Header</div>
  <div>
    <form class="row g-3">
      <div class="col-auto">
        <label for="staticEmail2" class="visually-hidden">Email</label>
        <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
      </div>
      <div class="col-auto">
        <label for="inputPassword2" class="visually-hidden">Password</label>
        <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "Header"
}
</script>


<style scoped>
.header {
  display: flex;
  /*margin: auto;*/
  border: 2px solid black;
  justify-content: center;
  background-color: #ffc720;
  height: 100px;
  margin: 10px 0 50px 0;
}
</style>