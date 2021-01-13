import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import(/* webpackChunkName: "landing" */ '../views/Landing.vue'),
  },
  {
    path: '/auth/callback',
    name: 'Callback',
    component: () => import(/* webpackChunkName: "callback" */ '../views/Callback.vue'),
  },
  {
    path: '/stats/:timePeriod',
    name: 'Stats',
    component: () => import(/* webpackChunkName: "stats" */ '../views/Stats.vue'),
  },
  {
    path: '/share/:year/:track/:artist/:back',
    name: 'Share',
    component: () => import(/* webpackChunkName: "stats" */ '../views/Share.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const navigation = document.getElementsByClassName('navigation');
  if (navigation.length) navigation[0].classList.remove('active');
  next();
});

export default router;
