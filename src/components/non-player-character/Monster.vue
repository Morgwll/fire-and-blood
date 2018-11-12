<template>
    <div class="character">
        <div class="character-title">
            <h3>{{ $store.getters.getMonster.name }}</h3>
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
        <button @click="addToRoster(npcs)"><i class="fas fa-user-plus"></i></button>      
    </div>
</template>
<script>
    import mixins from '../../mixins/mixins';
    import { charactersTranslations } from '../../data/translations/en-tlts.js';
    export default {
      data() {
        return {
          npcs: this.$store.getters.getMonster,
          translations: charactersTranslations,
          madness: 10
        }
      }
    }
</script>
<style lang="scss">
    .character {
        &-title {
            border: 2px solid #422f25;
            background-color: #ddceaa;
            h3, h4 {
                margin: 2px;
            }
        }
        &-portrait {
            width: calc(100% - 40px);
            margin: 10px auto;
            img {
                width: 100%;
            }
        }
    }
</style>