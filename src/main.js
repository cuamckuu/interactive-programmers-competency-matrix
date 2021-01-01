// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue';
import VueI18n from 'vue-i18n';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'en',
});

// TODO: Save leves to locaStorage
// TODO: Store levels in url to share them

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      store,
    };
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const levelsData = urlParams.get('levels');

    if (levelsData) {
      this.store.localStorage = false;
      const data = JSON.parse(atob(levelsData));

      Object.keys(this.store.state.levels).forEach((topic) => {
        this.store.setLevelAction(topic, parseInt(data[topic], 10));
      });
    } else {
      this.store.localStorage = true;

      Object.keys(this.store.state.levels).forEach((topic) => {
        if (localStorage[topic]) {
          this.store.setLevelAction(topic, parseInt(localStorage[topic], 10));
        }
      });
    }
  },
  router,
  i18n,
  components: { App },
  template: '<App/>',
});
