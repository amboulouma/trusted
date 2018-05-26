<template>
  <div id="app">
    
    <nav id="menu">
      <div class="nav-left">
        <p><router-link tag="div" to="/"><img src="./assets/gefco.png" alt="Gefco"></router-link></p>
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
}

.nav-right {
  display: flex;
}

.nav-right p {
  padding-right: 1rem;
}
</style>
