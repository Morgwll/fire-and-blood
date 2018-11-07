<template>
  <div id="app">
    <app-character-menu></app-character-menu>
    <app-npc-menu></app-npc-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import appCharacterMenu from './components/Character-Menu.vue';
  import appNpcMenu from './components/NPC-Menu.vue';
  export default {
    components: {
      appCharacterMenu,
      appNpcMenu
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
