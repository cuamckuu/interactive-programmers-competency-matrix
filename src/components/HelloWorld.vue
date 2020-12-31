<template>
  <div class='container-fluid'>
    <Nav></Nav>

    <div class='container'>
      <h3>What is this?</h3>

      <blockquote class='blockquote'>
        This is an interactive version of 'Programmer Competency Matrix' originally created by <a href='https://sijinjoseph.netlify.app/#about'>Sijin Joseph</a>.
        This version contains skills statistics and recomendations.
      </blockquote>
      <p>
        Note that the knowledge for each level is cumulative.
        Being at level 'n' implies that you also know everything from the levels lower than 'n'.
      </p>

      <b-alert v-model='showHelp' dismissible>
        Click on table cells to select your level.
      </b-alert>

      <div v-for="area in areas" :key='area'>
        <h3>{{ $t('areas.'+area) }}</h3>
        <br>
        <LevelsTable :allitems='getAreaItems(area)'></LevelsTable>
        <br>
        <br>
      </div>

    </div>
  </div>
</template>

<script>
import allItemsList from '../assets/data.json';
import Nav from './Nav';
import LevelsTable from './LevelsTable';

export default {
  name: 'HelloWorld',
  components: {
    Nav,
    LevelsTable,
  },
  data() {
    return {
      showHelp: true,
      areas: [
        'computer_science',
        'software_engineering',
        'programming',
        'experience',
        'knowledge',
      ],
    };
  },
  methods: {
    getAreaItems(area) {
      // eslint-disable-next-line
      return allItemsList.filter(x => x.area === area).map(function (x) {
        x.current_level = -1; // eslint-disable-line
        return x;
      });
    },
  },
  i18n: {
    messages: {
      en: {
        meta: {
        },
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
      ru: {
        meta: {
        },
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
    },
  },
};
</script>

<style>
.blockquote {
  padding: .5rem 1rem;
  border-left: .25rem solid #eceeef;
}

.selected {
  background: lightgrey;
}

table {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.clickable:hover {
  cursor: pointer;
}

th {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  min-width: 100%;
}
</style>
