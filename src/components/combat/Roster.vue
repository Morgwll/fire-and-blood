<template>
    <div class="combat-roster">
        <ul>
            <li v-for="(fighter, index) in fighters" :key="index">{{ figher.name }}</li>
        </ul>
        <div @click="initiative">Fight!!</div>
    </div>
</template>
<script>
import mixins from '../../mixins/mixins.js';
    export default {
        data() {
            return {
                figthers: []
            }
        },
        methods: {
            initiative() {
                for(index in fighters) {
                    this.fighters[index].initiative + this.diceRoll(20);
                    
                }
            }
        }
    }
</script>