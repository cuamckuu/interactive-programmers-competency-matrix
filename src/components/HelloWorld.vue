<template>
  <div class='container-fluid'>
    <Nav></Nav>

    <div class='container'>
      <h3>{{ $t('meta.header') }}</h3>

      <blockquote class='blockquote' v-html='$t("meta.info")'></blockquote>
      <p>
        {{ $t('meta.note') }}
      </p>

      <p>
        <b>
          {{ $t('meta.stars') }}
          <a href='https://github.com/cuamckuu/interactive-programmers-competency-matrix'>
            Github
          </a>
        </b>
      </p>

      <hr>

      <b-alert v-model='showHelp' dismissible>
        {{ $t("meta.tip") }}
      </b-alert>

      <div v-for='el in areas' :key='el.area'>
        <h3>{{ $t('areas.'+el.area) }}</h3>
        <br>
        <LevelsTable :alltopics='el.topics'></LevelsTable>
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
      areas: allItemsList,
      levels: this.$root.store.state.levels,
    };
  },
  i18n: {
    messages: {
      en: {
        meta: {
          header: 'What is this?',
          info: "This is an interactive version of 'Programmer Competency Matrix' originally created by <a href='https://sijinjoseph.netlify.app'>Sijin Joseph</a>. The main difference is that, this version contains skills statistics and recomendations. Also your levels save to localStorage, so don't be afraid to close tab and come back later.",
          tip: 'Click on table cells to select your level.',
          note: 'Note that the knowledge for each level is cumulative. Being at level \'n\' implies that you also know everything from the levels lower than \'n\'.',
          stars: 'If you like this project, please star it on ',
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
          header: 'Куда я попал?',
          info: "Это интерактивная версия 'Матрицы компетенций программиста', которая была создана <a href='https://sijinjoseph.netlify.app'>Sijin Joseph</a>. Главным отличием этой версии является возможность делать свои отметки и получать статистику по своим навыкам и рекомендации по их улучшению. Кроме того, данные о вашем уровне сохраняются в localStorage, поэтому не бойтесь закрыть вкладку и вернуться позже. Русский перевод основан на <a href='https://github.com/omreps/programmer-competency-matrix'>этом Github проекте</a>.",
          tip: 'Нажмите на ячейку в таблице, чтобы выбрать свой уровень',
          note: 'Каждый следующий уровень включает в себя предыдущий , т.е. разработчик находящийся на уровне 3 должен удовлетворять критериям двух предыдущих уровней.',
          stars: 'Если вам понравился проект, поставьте ему звёздочку на ',
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
.modal-body p {
    word-wrap: break-word;
}
</style>
