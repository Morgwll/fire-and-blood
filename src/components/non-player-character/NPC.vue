<template>
    <div class="character">
        <div class="character-title">
            <h3>{{ $store.state.npcType }}</h3>
        </div>
        <div class="character-portrait">
            <img :src="npcs.portrait">
        </div>
        <div>
            <ul class="stat-list">
                <li v-for="(stat, index) in npcs.stats" :key="index"><span>{{ translations[0].stats[index] }}</span>: {{ stat }} Bonus: {{ calcBonus(stat) }} <button @click="diceRoller(20)">Roll</button></li>
            </ul>
        </div>
        <h4>Challenge</h4>
        <ul>
            <li v-for="(challenge, i) in npcs.challenges" :key="i">{{ translations[0].challenges[i] }}: {{ challenge }} <button @click="diceRoller(20)">Roll</button></li>
        </ul>       
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