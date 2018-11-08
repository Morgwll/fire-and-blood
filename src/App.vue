<template>
  <div id="app" class="app-styling">
    <app-player-menu></app-player-menu>
    <app-world-menu></app-world-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import appPlayerMenu from './components/menus/player-menu/Player-Menu.vue';
  import appWorldMenu from './components/menus/world-menu/World-Menu.vue';
  export default {
    components: {
      appPlayerMenu,
      appWorldMenu
    }
  }
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 20px 40px;
  background-image: url('https://5.imimg.com/data5/JB/EM/MY-11791301/parchment-paper-500x500.jpg');
  font-family: 'Roboto';
}
.app-styling {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
}
h1, h2, h3, h4 {
  font-family: 'New Rocker';
  font-weight: 700;
  text-align: center;
}
</style>
