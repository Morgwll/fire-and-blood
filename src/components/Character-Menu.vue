<template>
    <div>
        {{ characters }}
        <ul>
            <router-link :to="'/character/' + character.name" tag="li" v-for="(character, index) in characters" :key="index"><a>{{ character.name }}</a></router-link>
        </ul>
    </div>
</template>
<script>
    export default {
        data:() => ({
            characters: this.$store
        })
    }
</script>