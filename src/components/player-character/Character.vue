<template>
    <div>
        <div>
            <h3>Name: {{ name }}</h3>
            <h4>Clan/Heritage: {{ clan }}</h4>
        </div>
        <div>
            <ul>
                <li v-for="(stat, index) in stats" :key="index">{{ stat.text }}: {{ stat.value }}</li>
            </ul>
        </div>
        <div>
            Charisma: {{ calcCharisma }}
            <br>
            Attack: {{ calcAttack }}
            <br>
            Sorcery: {{ calcSorcery }}
            <br>
            Initiative: {{ calcInitiative }}
            <br>
            Hit Points: {{ hitpoints.temp }} <button @click="heal(hitpoints)">+</button><button @click="damage(hitpoints)">-</button>
            <br>
            Investigation: {{ calcInvestigation }}
            <br>
            Sanity: {{ calcSanity }} <button @click="heal(hitpoints)">+</button><button @click="damage(hitpoints)">-</button>
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
                <li v-for="(skill, i) in skills" :key="i">{{ skill.text }}: {{ skill.value }}</li>
            </ul>   
        </div>      
    </div>
</template>
<script>
    export default {
        props: ['character'],
        data:() => ({
            name: "Canio",
            clan: "Raven Black",
            stats: {
                strength: {
                    text: "STR",
                    value: 18
                },
                agility: {
                    text: "AGI",
                    value: 16
                },
                constitution: {
                    text: "CON",
                    value: 14
                },
                wisdom: {
                    text: "WIS",
                    value: 13
                },
                appearance: {
                    text: "APP",
                    value: 11
                },
                endurance: {
                    text: "END",
                    value: 10
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
                }
            },
            madness: 0,
            hitpoints: {
                temp: null, 
                max: null
            },
            sanity: {
                temp: null,
                max: null
            },
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
        }),
        methods: {
            heal() {
                if(this.hitpoints.temp < this.hitpoints.max) {
                    this.hitpoints.temp++;
                }
            },
            damage() {
                if(this.hitpoints.temp > 0) {
                    this.hitpoints.temp--;
                }
            },
            sanityHeal() {
                if(this.sanity.temp < this.sanity.max) {
                    this.sanity.temp++;
                }
            },
            sanityDamage() {
                if(this.sanity.temp > 0) {
                    this.sanity.temp--;
                }
            }
        },
        computed: {
            calcStatBonus(stat) {
                return Math.floor((stat / 2) - 5);
            },
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
                console.log(this);
;               const con = this.stats.constitution.value / 2;
                const end = this.stats.endurance.value / 4;
                const agi = this.stats.agility.value / 2;
                const str = this.stats.strength.value / 3;
                this.hitpoints.max = Math.floor(con + end + str + agi);
                this.hitpoints.temp = Math.floor(con + end + str + agi);
            },
            calcSanity() {
                this.sanity = Math.floor((this.stats.wisdom.value * 5) - this.madness);
            },
            calcSorcery() {
                this.sorcery = Math.floor((this.stats.wisdom.value * 3) + this.madness);
            }
        }
    }
</script>