import Home from './components/Home.vue';
import Character from './components/player-character/Character.vue';
import NPC from './components/non-player-character/NPC.vue';
import Story from './components/story/story.vue';
import Weapons from './components/story/story.vue';
import Incantations from './components/story/story.vue';
import Players from './components/players-menu/Players-Menu.vue';
import World from './components/world-menu/World-Menu.vue';

export const routes = [
    { path: '', component: Story },
    { path: '/players/', component: Players, children: [
        { path: '/character/:name', component: Character },
        { path: '/weapons/', component: Weapons },
        { path: '/incantations/', component: Incantations },
        { path: '/story/', component: Story }
    ]},
    { path: '/world/', component: World, children: [
        { path: '/npc/:type', component: NPC }
    ]}
];