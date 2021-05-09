import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './routes';
import './assets/css/styles.scss';


Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    next('/login');
  } else {
    next()
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
