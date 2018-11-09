<template>
    <div class="character">
        <div class="character-title">
            <h3>{{ $store.state.characterName }}</h3>
            <h4>{{ translations[0].clan }}: {{ character.clan }}</h4>
        </div>
        <div class="character-portrait">
            <img :src="character.portrait">
        </div>
        <div>
            <ul class="stat-list">
                <li v-for="(stat, index) in character.stats" :key="index"><span>{{ translations[0].stats[index] }}</span>: {{ stat }} Bonus: {{ calcBonus(stat) }} <button @click="regRoll(calcBonus(stat), 12)">Roll</button></li>
            </ul>
        </div>
        <div>
            {{ translations[0].substats.charisma }}: {{ calcCharisma }} <button @click="diceRoller(20)">Roll</button>
            <br>
            {{ translations[0].substats.sorcery }}: {{ calcSorcery }}
            <br>
            {{ translations[0].substats.hitpoints }}: {{ hitpoints }} <button @click="hitpoints++">+</button><button @click="hitpoints--">-</button>
            <br>
            {{ translations[0].substats.investigation }}: {{ calcInvestigation }} <button @click="diceRoller(20)">Roll</button>
            <br>
            {{ translations[0].substats.sanity }}: {{ character.stats.wisdom * 5 }} <button @click="character.sanity++">+</button><button @click="character.sanity--">-</button>
            <br>
        </div>
        <div>
            <h4>Skills</h4>
            <ul>
                <li v-for="(skill, i) in character.skills" :key="i">{{ translations[0].skills[i] }}: {{ skill }} <button @click="regRoll(2, 12)">Roll</button></li>
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
    .stat-list {
        list-style-type: none;
    }
</style>