<template>
    <ul class="menu">
        <router-link :to="'/character/' + character.name" tag="li" v-for="(character, index) in characters" :key="index"><a class="menu-hero"><img class="menu-hero-portrait" :src="character.portrait"><p>{{ character.name }}</p></a></router-link>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                characters: this.$store.state.characters,
                menuVisible: true
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
    .menu-tab-left, .menu-tab-right {
        position: absolute;
        top: 50px;
        height: 25px;
        width: 20px;
        background-color: rgba(0,0,0,.8);
        color: #fff;
        padding: 5px;
        line-height: 25px;
    }
    .menu-tab-left {
        left: 100px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .menu-tab-right {
        right: 100px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .menu-element {
        transition: .2s;
        position: absolute;
        top: 20px;
        background-color: rgba(0,0,0,.8);
        &-left {
            left: 0;
            right: inherit;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        &-right {
            left: inherit;
            right: 0;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;

        }
    }
    .menu-hidden-left {
        left: -100px;
        transition: .2s;
    }
    .menu {
        list-style-type: none;
        padding-left: 0;
        margin: 0 auto;
        max-width: 120px;
        
        max-height: calc(100vh - 43px);
        overflow: auto;
        &-hero {
            display: block;
            width: 100px;
            margin: 0 auto;
            color: #fff;
            text-decoration: none;
            text-align: center;
            padding: 10px 0;
            p {
                margin: 0;
            }
            &-portrait {
                margin: 0 auto;
                width: 60px;
                height: 60px;
                border: 2px solid;
                border-radius: 50%;
            }
        }
    }
</style>