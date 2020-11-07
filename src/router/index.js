import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/Blog.vue'),
  },
  {
    path: '/blog/id/:blogId',
    component: () => import('@/views/Blog.vue'),
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/views/Chat.vue'),
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound,
  },
  {
    path: '/_empty',
    name: '_empty',
  },
];

const Router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 路由切换滚动
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  },
});

Router.beforeEach((to, from, next) => {
  if (to.matched.length !== 0) {
    next();
  } else {
    next({path: '/notfound'});
  }
});

export default Router;
