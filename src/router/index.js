import Vue from 'vue';
import VueRouter from 'vue-router';

// import About from '@/views/About.vue';
import Blog from '@/views/Blog.vue';
// import Chat from '@/views/Chat.vue';
import Home from '@/views/Home.vue';
import AccessDenied from '@/views/AccessDenied.vue';
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
    meta: {
      needLogin: true,
    },
    component: () => import('@/views/Chat.vue'),
  },
  {
    path: '/editor',
    name: 'editor',
    meta: {
      needLogin: true,
      needAdmin: true,
    },
    component: () => import('@/views/Editor.vue'),
  },
  {
    path: '/editor/:type/:id',
    meta: {
      needLogin: true,
      needAdmin: true,
    },
    component: () => import('@/views/Editor.vue'),
    props: true,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/oauth/redirect',
    name: 'oauth',
    component: () => import('@/views/Oauth.vue'),
  },
  {
    path: '/accessdenied',
    name: 'accessdenied',
    component: AccessDenied,
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
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  },
});

Router.beforeEach((to, from, next) => {
  if (to.matched.length !== 0) {
    if (to.meta.needLogin && (!localStorage.getItem('token') ||
        !localStorage.getItem('githubAccessToken') ||
        !localStorage.getItem('userId'))) {
      next({
        name: 'login',
      });
    } else {
      if (to.meta.needAdmin && !localStorage.getItem('tokenAdmin')) {
        next({
          name: 'accessdenied',
        });
      } else {
        next();
      }
    }
  } else {
    next({path: '/notfound'});
  }
});

export default Router;
