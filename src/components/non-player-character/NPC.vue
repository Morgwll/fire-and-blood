<template>
    <div class="character">
        <div>
            <h3>{{ translations[0].name }}: {{ $store.state.npcType }}</h3>
        </div>
        <div>
            <ul>
                <li v-for="(stat, index) in npcs.stats" :key="index"><span>{{ translations[0].stats[index] }}</span>: {{ stat }} Bonus: {{ calcBonus(stat) }} <button @click="diceRoller(20)">Roll</button></li>
            </ul>
        </div>
            <h4>Skills</h4>
            <ul>
                <li v-for="(challenge, i) in npcs.challenges" :key="i">{{ translations[0].challenges[i] }}: {{ challenge }} <button @click="diceRoller(20)">Roll</button></li>
            </ul>   
        </div>      
    </div>
</template>
<script>
    import mixins from '../../mixins/mixins';
    import { charactersTranslations } from '../../data/translations/en-tlts.js';
    export default {
      data() {
        return {
          npcs: this.$store.getters.getNPC,
          name: this.$store.dispatch('chooseCharacter', this.$route.params.name),
          translations: charactersTranslations,
          madness: 10
        }
      }
    }
</script>
<style lang="scss">
    .character {
        width: 100%;
        max-width: 922px;
        margin: 0 auto;
    }
</style>