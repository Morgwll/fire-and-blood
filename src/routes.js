import Home from './components/Home.vue';
import Character from './components/player-character/Character.vue';
import Combat from './components/combat/Combat.vue';
import NPC from './components/non-player-character/NPC.vue';
import Monster from './components/non-player-character/Monster.vue';
import Locations from './components/places/Locations.vue';
import World from './components/places/World.vue';
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
    { path: '/world', component: World, children: [
        { path: '/npc/:name', component: NPC },
        { path: '/monster/:name', component: Monster },
        { path: '/locations/:name', component: Locations },
        { path: '/dungeon/:name', component: Dungeon },
    ]},
    { path: '/story', component: Story, children: [
        { path: '/incantations/:name', component: Incantations },
        { path: '/pantheon/:name', component: Pantheon },
        { path: '/lore/:name', component: Lore },
        { path: '/advice', component: Advice }
    ]}
];