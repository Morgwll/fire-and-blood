import Home from './components/Home.vue';
import Character from './components/player-character/Character.vue';
import NPC from './components/non-player-character/NPC.vue';
import Story from './components/story/story.vue';

export const routes = [
    { path: '', component: Story },
    { path: '/character/:name', component: Character },
    { path: '/npc/:type', component: NPC },
];