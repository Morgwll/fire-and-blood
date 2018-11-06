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
</style>
