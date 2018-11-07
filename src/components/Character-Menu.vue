<template>
    <div>
        <ul class="menu menu-left">
            <router-link :to="'/character/' + character.name" tag="li" v-for="(character, index) in characters" :key="index"><a class="menu-hero"><img class="menu-hero-portrait" :src="character.portrait">{{ character.name }}</a></router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                characters: this.$store.state.characters
            }
        },
        created() {
            console.log(this);
        }
    }
</script>
<style lang="scss">
    .menu {
        list-style-type: none;
        padding-left: 0;
        margin: 0 auto;
        max-width: 120px;
        background-color: rgba(0,0,0,.8);
        position: absolute;
        top: 0;
        left: 0;
        &-hero {
            display: block;
            width: 100px;
            margin: 0 auto;
            color: #fff;
            text-decoration: none;
            text-align: center;
            padding: 10px 0;
            &-portrait {
                margin: 0 auto;
                width: 60px;
                height: 60px;
                border: 2px solid;
                border-radius: 50%;
            }
        }
        &-left {
            left: 0;
            right: inherit;
        }
        &-right {
            left: inherit;
            right: 0;
        }
    }
</style>