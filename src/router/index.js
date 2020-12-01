import Vue from 'vue';
import VueRouter from 'vue-router';

// import About from '@/views/About.vue';
import Blog from '@/views/Blog.vue';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

// 重复跳转相同路由不再报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

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
    component: Blog,
  },
  {
    path: '/blog/:filter/:filterValue',
    component: Blog,
    props: true,
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/views/Chat.vue'),
  },
  {
    path: '/_empty',
    name: '_empty',
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound,
  },
];

const Router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  },
});

export default Router;
