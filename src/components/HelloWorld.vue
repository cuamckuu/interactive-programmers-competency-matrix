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

      <LevelsTable :items="items"></LevelsTable>

    </div>
  </div>
</template>

<script>
import itemsList from '../assets/data.json';
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
      items: itemsList.map((x) => {
        x.current_level = -1; // eslint-disable-line
        return x;
      }),
      showHelp: true,
      areas: [
        'Computer Science',
        'Software Engineering',
        'Programming',
        'Experience',
        'Knowledge',
      ],
    };
  },
  methods: {
    changeLocale(newLocale) {
      this.$i18n.locale = newLocale;
    },
    scrollToTop() {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    },
  },
  i18n: {
    messages: {
      en: {
        meta: {
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
