<template>
    <div class="menu-element menu-element-left" :class="{'menu-hidden-left': menuHidden}">
        <ul class="menu">
            <router-link :to="'/character/' + character.name" tag="li" v-for="(character, index) in characters" :key="index"><a class="menu-hero"><img class="menu-hero-portrait" :src="character.portrait"><p>{{ character.name }}</p></a></router-link>
        </ul>
        <ul class="tab-menu-left">
            <li class="menu-tab-left" @click="toggleMenu"><i class="fas fa-arrow-left"></i></li>
            <li class="menu-tab-left" @click="switchContent(characters)"><i class="fas fa-users"></i></li>
            <router-link  class="menu-tab-left" tag="li" to="/combat"><i class="fas fa-shield-alt"></i></router-link>
            <li class="menu-tab-left" @click="switchContent(characters)"><i class="fas fa-book-open"></i></li>
            <li class="menu-tab-left" @click="switchContent(characters)"><i class="fas fa-ankh"></i></li>
            <li class="menu-tab-left" @click="switchContent(characters)"><i class="fas fa-feather"></i></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                menuContent: null,
                characters: this.$store.state.characters,
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
<style lang="scss">
    .menu-tab-left, .menu-tab-right {
        height: 25px;
        width: 20px;
        background-color: rgba(0,0,0,.5);
        color: #fff;
        padding: 5px;
        line-height: 25px;
        text-align: center;
    }
    .menu-tab-left {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .menu-tab-right {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .menu-element {
        transition: .2s;
        position: absolute;
        top: 20px;
        z-index: 6;
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
    .menu-hidden-right {
        right: -100px;
        transition: .2s;
    }
    .active-tab {
        background-color: rgba(0,0,0,.8);
    }
    .tab-menu-left {
        left: 100px;
    }
    .tab-menu-right {
        left: -30px;
    }
    .tab-menu-left, .tab-menu-right {
        position: absolute;
        top: 0;
        list-style-type: none;
        padding-left: 0;
        li {
            margin: 10px 0;
            cursor: pointer;
        }
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