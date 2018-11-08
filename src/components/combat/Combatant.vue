<template>
  <div class="combatant">
    <div class="combatant-header">
      Name: {{ name }}
      <span>Init: 16</span>
      <span>V</span>
    </div>
    <div class="combatant-body">
      hitpoints: {{ hitpoints}} + -
      <br>
      sorcery: {{ sorcery }}
      <hr>
      <div class="combatant-body-melee">
        Attack:
        <select>
          <option v-for="(weapon, index) in weapons" :key="index">{{ weapon.name }}</option>
        </select>
        Target:
        <select>
          <option v-for="(foe, i) in combatants" :key="i">{{ foe.name }}</option>
        </select>
        <button>Attack!</button>
      </div>
      <div v-if="isSorcerer" class="combatant-body-sorcery">
        Incantation:
        <select>
          <option v-for="(incantation, ind) in incantations" :key="ind">{{ incantation.name }}</option>
        </select>
        Towards:
        <select>
          <option v-if="isAreaIncantation">All</option>
          <option v-for="(foe, i) in combatants" :key="i">{{ foe.name }}</option>
        </select>
        <button>Cast!</button>
      </div>
    </div>
  </div>
</template>
<script>
  import mixins from '../../mixins/mixins';
  export default {
    props: ['combatants', 'combatant'],
    data() {
      return {
        name: this.combatant.name,
        isSorcerer: this.combatant.isSorcerer,
        incantations: [
          { name: "Rip the heart", isArea: false, damage: 3 },
          { name: "Disease", isArea: true, damage: 3 },
        ],
        weapons: [
          { name: "Brawl", damage: 1, reach: 5 },
          { name: "Axe", damage: 3, reach: 5 },
          { name: "Sword", damage: 3, reach: 5 },
          { name: "Spear", damage: 3, reach: 60 },
          { name: "Dagger", damage: 2, reach: 5 },
          { name: "Bow", damage: 2, reach: 160 }
        ],
        baseAttack: 2,
        hitpoints: 60,
        sorcery: 80,
        isAreaIncantation: false
      }
    }
  }
</script>
<style lang="scss">
  .combatant {
    margin: 10px auto;
    &-header {
      border: 2px solid #422f25;
      background-color: #6d4420;
      font-family: "New Rocker";
      color: #fff;
      padding: 10px;
    }
    &-body {
    border: 2px solid #422f25;
    background-color: #ddceaa;
    padding: 10px;
  }
  }
  
</style>