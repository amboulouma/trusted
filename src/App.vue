<template>
  <div id="app">
    <nav id="menu">
      <div class="nav-left">
        <img src="./assets/logo.png">
      </div>
      <div class="nav-right">
        <p><a href="/">Our mission</a></p>
        <p><a href="/">Our technology</a></p>
        <p><a href="/">Partner access</a></p>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style media="screen">
#menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F5F6F7;
}

.nav-right {
  display: flex;
}

.nav-right p {
  padding-right: 1rem;
}

a {
  text-decoration: none;
}
</style>
