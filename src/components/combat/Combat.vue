<template>
  <div>
    <app-combatant v-for="(combatant, index) in combatants" :key="index" :combatants="combatants" :combatant="combatant"></app-combatant>
  </div>
</template>
<script>
  import mixins from '../../mixins/mixins.js';
  import appCombatant from './Combatant.vue';

  export default {
    components: {
      appCombatant
    },
    data() {
      return {
        combatants: this.$store.getters.getCombatants
      }
    }
  }
</script>