<template>
    <div>
        <ul class="menu menu-right">
            <router-link :to="'/npc/' + npcs.name" tag="li" v-for="(npc, index) in npcs" :key="index"><a class="menu-hero"><img class="menu-hero-portrait" :src="npc.portrait">{{ npc.type }}</a></router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                npcs: this.$store.state.npcs
            }
        },
        created() {
            console.log(this);
        }
    }
</script>