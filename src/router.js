import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home';
import GameMode from './pages/GameMode';
import GamePlay from './pages/GamePlay';
import NotFound from './pages/NotFound';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/game-mode/:theme',
    component: GameMode,
    props: true,
  },
  {
    path: '/game-play/:theme/:id',
    component: GamePlay,
    props: true,
  },
  { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

export default router;
