<template>
    <div>
        <div>
            <h3>Name: {{ $route.params.name }}</h3>
            <div>{{ $route.params }}</div>
            <h4>Clan/Heritage: {{ clan }}</h4>
            <div>{{ character }}</div>
        </div>
        <div>
            <ul>
                <li v-for="(stat, index) in stats" :key="index">{{ stat.text }}: {{ stat.value }} Bonus: {{ calcBonus(stat.value) }} <button @click="diceRoller(20)">Roll</button></li>
            </ul>
        </div>
        <div>
            Charisma: {{ calcCharisma }} <button @click="diceRoller(20)">Roll</button>
            <br>
            Attack: {{ calcAttack }} <button @click="diceRoller(20)">Roll</button>
            <br>
            Sorcery: {{ calcSorcery }} <button @click="diceRoller(20)">Roll</button>
            <br>
            Initiative: {{ calcInitiative }} <button @click="diceRoller(20)">Roll</button>
            <br>
            Hit Points: {{ hitpoints }} <button @click="hitpoints++">+</button><button @click="hitpoints--">-</button>
            <br>
            Investigation: {{ calcInvestigation }} <button @click="diceRoller(20)">Roll</button>
            <br>
            Sanity: {{ sanity }} <button @click="sanity++">+</button><button @click="sanity--">-</button>
            <br>
            Armor: {{ armor.name }} - {{ armor.bonus }}
            <br>
            Weapons: <ul>
                <li v-for="(weapon, ind) in weapons" :key="ind">{{ weapon.name }}: Damage: {{ weapon.damage }} - Reach: {{ weapon.reach }}</li>
            </ul>
        </div>
        <div>
            <h4>Skills</h4>
            <ul>
                <li v-for="(skill, i) in skills" :key="i">{{ skill.text }}: {{ skill.value }} <button @click="diceRoller(20)">Roll</button></li>
            </ul>   
        </div>      
    </div>
</template>
<script>
    import mixins from '../../mixins/mixins';
    import { characters } from '../../data/characters.js';
    export default {
        data() {
            return {
                characters,
                character: null,
                name: this.$route.params.name,
                clan: "Raven Black",
                stats: {
                    strength: {
                        text: "STR",
                        value: 18,
                    },
                    agility: {
                        text: "AGI",
                        value: 16,
                    },
                    constitution: {
                        text: "CON",
                        value: 14,
                    },
                    wisdom: {
                        text: "WIS",
                        value: 13,
                    },
                    appearance: {
                        text: "APP",
                        value: 11,
                    },
                    endurance: {
                        text: "END",
                        value: 10,
                    }
                },
                skills: {
                    athletics: {
                        text: "Athletics",
                        value: 1
                    },
                    acrobatics: {
                        text: "Acrobatics",
                        value: 1
                    },
                    science: {
                        text: "Science/Alchemy",
                        value: 1
                    },
                    riding: {
                        text: "Riding/Piloting",
                        value: 2
                    },
                    stealth: {
                        text: "Stealth",
                        value: 2
                    },
                    survival: {
                        text: "Survival",
                        value: 2
                    },
                    insight: {
                        text: "Insight",
                        value: 2
                    },
                    intimidation: {
                        text: "Intimidation",
                        value: 2
                    },
                    persuasion: {
                        text: "Persuasion",
                        value: 2
                    },
                    deceipt: {
                        text: "Deceipt",
                        value: 2
                    },
                    supernatural: {
                        text: "Supernatural",
                        value: 2
                    },
                    religion: {
                        text: "Religion",
                        value: 2
                    },
                    medicine: {
                        text: "Medicine",
                        value: 2
                    },
                    craft: {
                        text: "Craft",
                        value: 2
                    },
                },
                madness: 0,
                hitpoints: 30,
                sanity: 80,
                experience: 0,
                level: 1,
                currency: {
                    jewels: {
                        text: "Jewels",
                        amount: 2000
                    },
                    gold: {
                        text: "Gold",
                        amount: 30
                    },
                    jade: {
                        text: "Jade",
                        amount: 2
                    },
                    silver: {
                        text: "Silver",
                        amount: 400
                    },
                    copper: {
                        text: "Copper",
                        amount: 120
                    }
                },
                weapons: [
                    {
                        name: "Axe",
                        damage: 3,
                        reach: "5",
                        bonus: 0
                    },
                    {
                        name: "Sling",
                        damage: 1,
                        reach: "60/120",
                        bonus: 0
                    }
                ],
                armor: {
                    name: "pelts",
                    bonus: 1
                }
            }
        },
        computed: {
            calcCharisma() {
                const wis = this.stats.wisdom.value / 2;
                const app = this.stats.appearance.value / 2;
                return Math.floor(wis + app);
            },
            calcAttack() {
                const str = this.stats.strength.value / 2;
                const agi = this.stats.agility.value / 2;
                return Math.floor(str + agi);
            },
            calcInitiative() {
                const wis = this.stats.wisdom.value / 2;
                const agi = this.stats.agility.value / 2;
                const comb =  Math.floor(wis + agi);
                return Math.floor((comb / 2) - 5);
            },
            calcInvestigation() {
                return Math.floor(this.stats.wisdom.value + 2);
            },
            calcHp() {
                
                this.hitpoints = Math.floor(con + end + str + agi);
                console.log(Math.floor(con + end + str + agi));
            },
            calcSanity() {
                
            },
            calcSorcery() {
                this.sorcery = Math.floor((this.stats.wisdom.value * 3) + this.madness);
            }
        },
        created() {
            const htp = {
                con: this.stats.constitution.value / 2,
                end: this.stats.endurance.value / 4,
                agi: this.stats.agility.value / 2,
                str: this.stats.strength.value / 3,
            }
            this.hitpoints = Math.floor(htp.con + htp.end + htp.str + htp.agi);
            this.sanity = Math.floor((this.stats.wisdom.value * 5) - this.madness);
            this.investigation = Math.floor(this.stats.wisdom.value + 2);
            console.log(this.$store.characters);
            for(let index = 0; index < this.characters.length; index++) {
                console.log("acuca mare");
                if(this.characters[index].name == this.name) {
                    console.log(this.characters[index])
                    this.characters[index] = this.character;
                }
            }
        }
    }
</script>