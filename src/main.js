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
  locale: ((navigator.languages && navigator.languages[0]) || '').substr(0, 2),
  fallbackLocale: 'en',
  silentFallbackWarn: true,
  messages: {
    ru: {
      areas: {
        computer_science: 'Теория',
        software_engineering: 'Разработка ПО',
        programming: 'Программирование',
        experience: 'Опыт',
        knowledge: 'Знания',
      },
      fields: {
        topic: 'Тема',
        level0: '2^n (Уровень 0)',
        level1: 'n^2 (Уровень 1)',
        level2: 'n (Уровень 2)',
        level3: 'log(n) (Уровень 3)',
      },
    },
    en: {
      areas: {
        computer_science: 'Computer Science',
        software_engineering: 'Software Engineering',
        programming: 'Programming',
        experience: 'Experience',
        knowledge: 'Knowledge',
      },
      fields: {
        topic: 'Topic',
        level0: '2^n (Level 0)',
        level1: 'n^2 (Level 1)',
        level2: 'n (Level 2)',
        level3: 'log(n) (Level 3)',
      },
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      store,
    };
  },
  mounted() {
    document.title = 'Programmer\'s Competency Matrix';

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
