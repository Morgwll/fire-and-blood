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

export const store = new Vuex.Store({
  state: {
    characters,
    characterName: "Boligrafor",
    npcType: "Innkeeper",
    monsterType: "Dek",
    monsters,
    weapons,
    incantations,
    npcs,
    locations,
    pantheon
  },
  getters: {
    getCharacter: state => {
      for(let index = 0; index < state.characters.length; index++) {
        if(state.characters[index].name == state.characterName) {
          return state.characters[index];
        }
      }
    },
    getNPC: state => {
      for(let index = 0; index < state.npcs.length; index++) {
        if(state.npcs[index].type == state.npcType) {
          return state.npcs[index];
        }
      }
    },
    getMonster: state => {
      for(let index = 0; index < state.monsters.length; index++) {
        if(state.monsters[index].type == state.npcType) {
          return state.monsters[index];
        }
      }
    }
  },
  mutations: {
    'ADD_HITPOINTS' (state) {
      state.character.hitpoints++;
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
    chooseCharacter: state => {
      state.characterName
    }
  }
})