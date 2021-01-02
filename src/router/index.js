import Vue from 'vue';
import Router from 'vue-router';
import CompetencyMatrix from '@/components/CompetencyMatrix';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CompetencyMatrix',
      component: CompetencyMatrix,
    },
  ],
  mode: 'history',
});
