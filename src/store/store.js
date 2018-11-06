import Vue from 'vue';
import Vuex from 'vuex';
import { characters } from '../data/characters.js';
import { monsters } from '../data/monsters.js';
import { locations } from '../data/locations.js';
import { weapons } from '../data/weapons.js';
import { npcs } from '../data/npcs.js';
import { pantheon } from '../data/pantheon.js';
import { incantations } from '../data/incantations.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    characters,
    monsters,
    weapons,
    incantations,
    npcs,
    locations,
    pantheon
  },
  getters: {

  },
  mutations: {
    'ADD_HITPOINTS' (state) {
    },
    'REMOVE_HITPOINTS' (state) {
    },
    'ADD_SANITY' (state) {
    },
    'REMOVE_SANITY' (state) {
    },
    'ADD_EQUIPMENT' (state) {
    },
    'REMOVE_EQUIPMENT' (state) {
    },
    'ADD_CURRENCY' (state) {
    },
    'REMOVE_CURRENCY' (state) {
    },
    'ADD_STATPOINTS' (state) {
    },
    'REMOVE_STATPOINTS' (state) {
    },
    'ADD_ENEMIES' (state) {
    },
    'REMOVE_ENEMIES' (state) {
    }
  },
  actions: {

  }
})