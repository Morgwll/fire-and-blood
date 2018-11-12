import Home from './components/Home.vue';
import Character from './components/player-character/Character.vue';
import Combat from './components/combat/Combat.vue';
import NPC from './components/non-player-character/NPC.vue';
import Monster from './components/non-player-character/Monster.vue';
import Locations from './components/places/Locations.vue';
import Dungeon from './components/places/Dungeons.vue';
import Advice from './components/story/Advice.vue';
import Incantations from './components/story/Incantations.vue';
import Lore from './components/story/Lore.vue';
import Pantheon from './components/story/Pantheon.vue';
import Story from './components/story/Story.vue';

export const routes = [
    { path: '', component: Story },
    { path: '/character/:name', component: Character },
    { path: '/combat', component: Combat },
    { path: '/world/npc/:name', component: NPC },
    { path: '/world/monster/:name', component: Monster },
    { path: '/world/location/:name', component: Locations },
    { path: '/world/dungeon/:name', component: Dungeon },
    { path: '/world/advice/:name', component: Advice },
    { path: '/world/incantations/:name', component: Incantations },
    { path: '/world/pantheon/:name', component: Pantheon },
    { path: '/world/lore/:name', component: Lore },
];