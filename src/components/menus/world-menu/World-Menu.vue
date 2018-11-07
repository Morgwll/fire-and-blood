<template>
    <div class="menu-element menu-element-right" :class="{'menu-hidden-right': menuHidden}">
        <ul class="menu">
            <router-link :to="'/npc/' + npcs.name" tag="li" v-for="(npc, index) in menuContent" :key="index"><a class="menu-hero"><img class="menu-hero-portrait" :src="npc.portrait"><p>{{ npc.type }}</p></a></router-link>
        </ul>
        <ul class="tab-menu-right">
            <li class="menu-tab-right" @click="toggleMenu"><i class="fas fa-arrow-right"></i></li>
            <li class="menu-tab-right" @click="switchContent(npcs)"><i class="fas fa-users"></i></li>
            <li class="menu-tab-right" @click="switchContent(monsters)"><i class="fa fa-crow"></i></li>
            <li class="menu-tab-right" @click="switchContent(npcs)"><i class="fas fa-compass"></i></li>
            <li class="menu-tab-right" @click="switchContent(npcs)"><i class="fas fa-dungeon"></i></li>
            <li class="menu-tab-right" @click="switchContent(npcs)"><i class="fab fa-critical-role"></i></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                menuContent: this.$store.state.npcs,
                npcs: this.$store.state.npcs,
                monsters: this.$store.state.monsters,
                menuHidden: true
            }
        },
        methods: {
            toggleMenu() {
                this.menuHidden = !this.menuHidden;
            },
            switchContent(content) {
                this.menuContent = content;
            }
        },
        created() {
            console.log(this);
        }
    }
</script>