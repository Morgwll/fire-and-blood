<template>
  <div class="combatant">
    <div class="combatant-header" @click="toggle">
      Name: {{ combatSpec.name }}
      <span>Init: 16 <i class="fas fa-chevron-down"></i></span>
    </div>
    <div class="combatant-body" :class="{show: isShowing}">
      Hitpoints: {{ combatSpec.hitpoints }} + -
      <br>
      Sorcery: {{ combatSpec.sorcery }}
      <hr>
      <div class="combatant-body-melee">
        Attack:
        <select>
          <option v-for="(weapon, index) in combatSpec.weapons" :key="index">{{ weapon.name }}</option>
        </select>
        Target:
        <select>
          <option v-for="(foe, i) in combatants" :key="i">{{ foe.name }}</option>
        </select>
        <button @click="attack(combatSpec.baseAttack, opponent.defr, 2, 2)">Attack!</button>
      </div>
      <div v-if="combatSpec.isSorcerer" class="combatant-body-sorcery">
        Incantation:
        <select>
          <option v-for="(incantation, ind) in combatSpec.incantations" :key="ind">{{ incantation.name }}</option>
        </select>
        Towards:
        <select>
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
        combatSpec: {
          name: this.combatant.name,
          isSorcerer: this.combatant.isSorcerer,
          incantations: [
            { name: "Rip the heart", isArea: false, damage: 3, cost: 30, isArea: false },
            { name: "Disease", isArea: true, damage: 3, cost: 30, isArea: false },
          ],
          weapons: [
            { name: "Brawl", damage: 1, reach: 5, cost: 0 },
            { name: "Axe", damage: 3, reach: 5, cost: 2 },
            { name: "Sword", damage: 3, reach: 5, cost: 2 },
            { name: "Spear", damage: 3, reach: 60, cost: 3 },
            { name: "Dagger", damage: 2, reach: 5, cost: 1 },
            { name: "Bow", damage: 2, reach: 160, cost: 2 }
          ],
          baseAttack: 2,
          hitpoints: 60,
          sorcery: 80,
          endurance: 20,
        },
        opponent: {
          defr: 13,
          armor: 1,
          hitpoints: 30
        }, 
        isShowing: false
      }
    },
    methods: {
      toggle() {
        this.isShowing = !this.isShowing;
      },
      attack(atkr, defr, cost, dmg) {
        const roll = this.diceRoller(20);
        console.log(roll);
        const hit = roll + atkr;
        this.endurance = this.endurance - cost;
        if(roll === 20) {
          console.log("Natural 20!!");
        }
        if (hit > defr) {
          console.log("Hit");
        } else {
          console.log("miss")
        }
      },
      cast(dmg, defr, cost) {
        this.sorcery = this.sorcery - cost;
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
      padding: 10px 30px 10px 10px;
      position: relative;
      cursor: pointer;
      span {
        position: absolute;
        top: 12px;
        right: 8px;
      }
    }
    &-body {
      border: 2px solid #422f25;
      background-color: #ddceaa;
      padding: 0 10px;
      height: 0;
      overflow: hidden;
    }
  }
  .show {
    padding: 10px 10px;
    height: auto;
  }
</style>