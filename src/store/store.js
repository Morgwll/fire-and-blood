import Vue from 'vue';
import Vuex from 'vuex';
import { characters } from '../data/characters.js';
import { monsters } from '../data/monsters.js';
import { locations } from '../data/locations.js';
import { weapons } from '../data/weapons.js';
import { advice } from '../data/advice.js';
import { npcs } from '../data/npcs.js';
import { pantheon } from '../data/pantheon.js';
import { incantations } from '../data/incantations.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    characters,
    choice: characters[0].name,
    monsters,
    weapons,
    incantations,
    npcs,
    advice,
    locations,
    pantheon,
    showRollModal: false,
    roll: null,
    rollMessage: '',
    bonus: null,
    defense: null,
    combatants: []
  },
  getters: {
    getCharacter: state => {
      for(let index in state.characters) {
        if(state.characters[index].name == state.choice) {
          return state.characters[index];
        }
      }
    },
    getNPC: state => {
      for(let index = 0; index < state.npcs.length; index++) {
        if(state.npcs[index].name == state.npcName) {
          return state.npcs[index];
        }
      }
    },
    getMonster: state => {
      for(let index = 0; index < state.monsters.length; index++) {
        if(state.monsters[index].name == state.npcName) {
          return state.monsters[index];
        }
      }
    },
    getCombatants: state => {
      return state.combatants;
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