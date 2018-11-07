<template>
    <div class="menu-element menu-element-right" :class="{'menu-hidden-right': menuVisible}">
        <div class="menu-tab-right" @click="toggleMenu"><i class="fas fa-users"></i></div>
        <ul class="menu menu-right">
            <router-link :to="'/npc/' + npcs.name" tag="li" v-for="(npc, index) in npcs" :key="index"><a class="menu-hero"><img class="menu-hero-portrait" :src="npc.portrait"><p>{{ npc.type }}</p></a></router-link>
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