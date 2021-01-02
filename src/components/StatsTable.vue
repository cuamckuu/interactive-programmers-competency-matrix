<template>
  <div class='container-fluid'>
    <h3>{{ $t('stats.statsTitle') }}</h3>
    <br>
    <b-table-simple responsive=true>
      <b-thead head-variant='light'>
        <b-tr>
          <b-th>
            {{ $t('fields.topic') }}
          </b-th>
          <b-th>
            {{ $t('stats.mean') }}
          </b-th>
          <b-th>
            {{ $t('stats.median') }}
          </b-th>
          <b-th>
            {{ $t('stats.std') }}
          </b-th>
        </b-tr>
      </b-thead>

      <b-tr v-for='area in areas' :key='area.area'>
        <b-td>{{ $t(`areas.${area.area}`) }}</b-td>
        <b-td>{{ statsByArea[area.area].mean }}</b-td>
        <b-td>{{ statsByArea[area.area].median }}</b-td>
        <b-td>{{ statsByArea[area.area].std }}</b-td>
      </b-tr>

      <b-tfoot>
        <b-td><b>{{ $t('stats.total') }}</b></b-td>
        <b-td><b>{{ statsByArea.total.mean }}</b></b-td>
        <b-td><b>{{ statsByArea.total.median }}</b></b-td>
        <b-td><b>{{ statsByArea.total.std }}</b></b-td>
      </b-tfoot>

    </b-table-simple>
  </div>
</template>

<script>
import { mean, median, std } from 'mathjs';
import allItemsList from '../assets/data.json';

export default {
  name: 'StatsTable',
  data() {
    return {
      areas: allItemsList,
      levels: this.$root.store.state.levels,
    };
  },
  computed: {
    statsByArea() {
      const res = {};
      const allLevels = [];

      this.areas.forEach((el) => {
        const areaLevels = [];

        el.topics.forEach((topic) => {
          const level = this.levels[topic];

          areaLevels.push(level);
          allLevels.push(level);
        });

        if (areaLevels.includes(-1)) {
          res[el.area] = {
            mean: '?',
            median: '?',
            std: '?',
          };
        } else {
          res[el.area] = {
            mean: mean(areaLevels).toFixed(2),
            median: median(areaLevels).toFixed(2),
            std: std(areaLevels).toFixed(2),
          };
        }
      });

      if (allLevels.includes(-1)) {
        res.total = {
          mean: '?',
          median: '?',
          std: '?',
        };
      } else {
        res.total = {
          mean: mean(allLevels).toFixed(2),
          median: median(allLevels).toFixed(2),
          std: std(allLevels).toFixed(2),
        };
      }

      return res;
    },
  },
  i18n: {
    messages: {
      en: {
        stats: {
          statsTitle: 'Statistics',
          mean: 'Mean level',
          median: 'Median level',
          std: 'Standart deviation',
          total: 'Total',
        },
      },
      ru: {
        stats: {
          statsTitle: 'Статистика',
          mean: 'Средний уровень',
          median: 'Медианный уровень',
          std: 'Стандартное отклонение',
          total: 'Итог',
        },
      },
    },
  },
};
</script>
