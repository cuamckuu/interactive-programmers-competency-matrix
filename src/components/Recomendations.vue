<template>
  <div class='container-fluid'>
    <h3>{{ $t('recomendations.header') }}</h3>
    <br>
    <blockquote class="blockquote" v-html='$t("recomendations.description")'></blockquote>
    <br>
    <LevelsChart :chartdata='chartData' :options='chartOptions'></LevelsChart>
  </div>
</template>

<script>
import LevelsChart from './LevelsChart';
import allItemsList from '../assets/data.json';

export default {
  name: 'Recomendations',
  components: {
    LevelsChart,
  },
  data() {
    return {
      allAreas: allItemsList,
      levels: this.$root.store.state.levels,
      chartOptions: {
        scales: {
          yAxes: [{
            ticks: {
              fontSize: 18,
            },
          }],
        },
      },
    };
  },
  computed: {
    chartData() {
      const items = [];

      this.allAreas.forEach((el) => {
        el.topics.forEach((topic) => {
          const level = this.levels[topic];
          items.push([this.$t(`levels.${topic}.name`), level]);
        });
      });

      const sortedItems = items.sort((a, b) => a[1] - b[1]);

      const labels = sortedItems.map(x => x[0]);
      const data = sortedItems.map(x => x[1]);

      const res = {
        labels,
        datasets: [{
          label: this.$t('fields.level'),
          data,
          backgroundColor: data.map(() => this.getRandomColor()),
        }],
      };

      return res;
    },
  },
  methods: {
    getRandomColor() {
      const letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return `${color}aa`;
    },
  },
  i18n: {
    messages: {
      en: {
        recomendations: {
          header: 'Recomendations',
          description: '<a href=\'https://en.wikipedia.org/wiki/Theory_of_constraints\'>Theory of constraints</a> adopts the common idiom \'A chain is no stronger than its weakest link\'. Same works for programming. Therefore, the quickest way to get better is to start improving from the weakest skills listed below.',
        },
      },
      ru: {
        recomendations: {
          header: 'Рекомендации',
          description: 'В <a href=\'https://ru.wikipedia.org/wiki/Теория_ограничений\'>теории ограничений</a> применяется принцип: \'Прочность цепи равна прочности самого слабого звена\'. Такой же принцип применим в программировании. Поэтому, для быстрого улучшения своих навыков, начните с улучшения самых слабых из них, список которых приведён ниже.',
        },
      },
    },
  },
};
</script>
