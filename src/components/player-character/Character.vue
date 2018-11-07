<template>
    <div class="character">
        <div>
            <img class="character-portrait" :src="character.portrait">
            <h3>{{ translations[0].name }}: {{ $store.state.characterName }}</h3>
            <h4>{{ translations[0].clan }}: {{ character.clan }}</h4>
        </div>
        <div>
            <ul>
                <li v-for="(stat, index) in character.stats" :key="index"><span>{{ translations[0].stats[index] }}</span>: {{ stat }} Bonus: {{ calcBonus(stat) }} <button @click="diceRoller(20)">Roll</button></li>
            </ul>
        </div>
        <div>
            Charisma: {{ calcCharisma }} <button @click="diceRoller(20)">Roll</button>
            <br>
            Sorcery: {{ calcSorcery }}
            <br>
            Initiative: {{ calcInitiative }} <button @click="diceRoller(20)">Roll</button>
            <br>
            Hit Points: {{ hitpoints }} <button @click="hitpoints++">+</button><button @click="hitpoints--">-</button>
            <br>
            Investigation: {{ calcInvestigation }} <button @click="diceRoller(20)">Roll</button>
            <br>
            Sanity: {{ character.stats.wisdom * 5 }} <button @click="character.sanity++">+</button><button @click="character.sanity--">-</button>
            <br>
        </div>
        <div>
            <h4>Skills</h4>
            <ul>
                <li v-for="(skill, i) in character.skills" :key="i">{{ translations[0].skills[i] }}: {{ skill }} <button @click="diceRoller(20)">Roll</button></li>
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
                character: this.$store.getters.getCharacter,
                name: this.$store.dispatch('chooseCharacter', this.$route.params.name),
                translations: charactersTranslations,
                madness: 10
            }
        },
        computed: {
            calcCharisma() {
                const wis = this.character.stats.wisdom / 2;
                const app = this.character.stats.appearance / 2;
                return Math.floor(wis + app);
            },
            calcAttack() {
                const str = this.character.stats.strength / 2;
                const agi = this.character.stats.agility / 2;
                return Math.floor(str + agi);
            },
            calcInitiative() {
                const wis = this.character.stats.wisdom / 2;
                const agi = this.character.stats.agility / 2;
                const comb =  Math.floor(wis + agi);
                return Math.floor((comb / 2) - 5);
            },
            calcInvestigation() {
                return Math.floor(this.character.stats.wisdom + 2);
            },
            calcSorcery() {
                return Math.floor((this.character.stats.wisdom * 3) + this.madness);
            }
        },
        created() {
            const htp = {
                con: this.character.stats.constitution / 2,
                end: this.character.stats.endurance / 4,
                agi: this.character.stats.agility / 2,
                str: this.character.stats.strength / 3,
            }
            this.hitpoints = Math.floor(htp.con + htp.end + htp.str + htp.agi);
            this.sanity = Math.floor((this.character.stats.wisdom * 5) - this.madness);
            this.investigation = Math.floor(this.character.stats.wisdom + 2);
        }
    }
</script>
<style lang="scss">
    .character {
        width: 100%;
        max-width: 922px;
        margin: 0 auto;
        &-portrait {
            height: 100px;
            width: 100px;
        }
    }
</style>