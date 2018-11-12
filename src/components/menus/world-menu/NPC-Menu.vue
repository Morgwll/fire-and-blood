<template>
    <div class="menu-element menu-element-right" :class="{'menu-hidden-right': menuVisible}">
        <ul class="menu menu-right">
            <router-link :to="'/world/npc/' + npcs.name" tag="li" v-for="(npc, index) in npcs" :key="index" @click="toggleMenu"><a class="menu-hero"><img class="menu-hero-portrait" :src="npc.portrait"><p>{{ npc.name }}</p></a></router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                npcs: this.$store.state.npcs,
                menuVisible: false
            }
        },
        methods: {
            toggleMenu() {
                this.menuVisible = !this.menuVisible;
            }
        },
        created() {
            console.log(this);
        }
    }
</script>
<style lang="scss">
    .menu-hidden-right {
        right: -100px;
        transition: .2s;
    }
</style>