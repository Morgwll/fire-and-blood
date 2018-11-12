<template>
    <div class="menu-element menu-element-right" :class="{'menu-hidden-right': menuHidden}">
        <ul class="menu">
            <router-link :to="'/world/npcs/' + element.name" tag="li" v-for="(element, index) in menuContent" :key="index"><a class="menu-hero"><img class="menu-hero-portrait" :src="element.portrait"><p>{{ element.name }}</p></a></router-link>
        </ul>
        <ul class="tab-menu-right">
            <li class="menu-tab-right" @click="switchContent(npcs)" active-class="active-tab"><i class="fas fa-users"></i></li>
            <li class="menu-tab-right" @click="switchContent(monsters)" active-class="active-tab"><i class="fa fa-crow"></i></li>
            <li class="menu-tab-right" @click="switchContent(locations)" active-class="active-tab"><i class="fas fa-compass"></i></li>
            <li class="menu-tab-right" @click="switchContent(dungeons)" active-class="active-tab"><i class="fas fa-dungeon"></i></li>
            <li class="menu-tab-right" @click="switchContent(advice)" active-class="active-tab"><i class="fab fa-critical-role"></i></li>
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
                locations: this.$store.state.locations,
                dungeons: this.$store.state.dungeons,
                advice: this.$store.state.advice,
                menuHidden: true
            }
        },
        methods: {
            switchContent(content) {
                this.menuContent = content;
                this.menuHidden = !this.menuHidden;
            }
        },
        created() {
            console.log(this);
        }
    }
</script>