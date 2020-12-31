// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue';
import VueI18n from 'vue-i18n';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>',
});
