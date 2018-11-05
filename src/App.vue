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
    data: () => ({
        msg: 'Welcome to Your Vue.js App'
    }),
    components: {
      appCharacterMenu,
      appNpcMenu
    }
  }
</script>

<style lang="scss">
</style>
