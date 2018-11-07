<template>
  <div class="menu-element menu-element-left" :class="{'menu-hidden-left': menuVisible}">
    <ul class="menu-left">
      <router-link class="menu-tab-left" to="/character/" tag="li" active-class="active-menu-tab"><a><i class="fas fa-users"></i></a></router-link>
      <router-link class="menu-tab-left" to="/notes" tag="li" active-class="active-menu-tab"><a><i class="fas fa-book-open"></i></a></router-link>
      <router-link class="menu-tab-left" to="/weapons" tag="li" active-class="active-menu-tab"><a><i class="fas fa-feather"></i></a></router-link>
      <router-link class="menu-tab-left" to="/incantations" tag="li" active-class="active-menu-tab"><a><i class="fas fa-ankh"></i></a></router-link>
      <router-link class="menu-tab-left" to="/story" tag="li" active-class="active-menu-tab"><a><i class="fas fa-crow"></i></a></router-link>
      <router-link class="menu-tab-left" to="/map" tag="li" active-class="active-menu-tab"><a><i class="fas fa-compass"></i></a></router-link>
      <router-link class="menu-tab-left" to="/locations" tag="li" active-class="active-menu-tab"><a><i class="fas fa-dungeon"></i></a></router-link>
      <router-link class="menu-tab-left" to="/advice" tag="li" active-class="active-menu-tab"><a><i class="fab fa-critical-role"></i></a></router-link>
    </ul>
  </div>
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
    .menu-left {
      position:absolute;
      top: 50px;
      list-style-type: none;
      left: 100px;
      padding-left: 0;
      li {
        margin: 10px 0;
        cursor: pointer;
        a {
          color: #fff;
          display: block;
        }
      }
    }
    .active-menu-tab {
      background-color: rgba(0,0,0,.8);
    }
    .menu-tab-left, .menu-tab-right {
        //position: absolute;
        //top: 50px;
        height: 25px;
        width: 20px;
        background-color: rgba(0,0,0,.5);
        color: #fff;
        padding: 5px;
        line-height: 25px;
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