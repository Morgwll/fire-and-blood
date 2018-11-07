<template>
  <div id="app">
    <app-players-menu></app-players-menu>
    <app-world-menu></app-world-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import appPlayersMenu from './components/players-menu/Players-Menu.vue';
  import appWorldMenu from './components/world-menu/World-Menu.vue';
  export default {
    components: {
      appPlayersMenu,
      appWorldMenu
    }
  }
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 20px 40px;
  background-image: url('https://5.imimg.com/data5/JB/EM/MY-11791301/parchment-paper-500x500.jpg');
}
</style>
