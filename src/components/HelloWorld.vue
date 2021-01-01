<template>
  <div class='container'>
    <Nav></Nav>

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

    <template v-if='isEditable'>
      <b-alert v-model='showHelp' dismissible>
        {{ $t("meta.tip") }}
      </b-alert>
    </template>
    <template v-else>
      <b-alert v-model='showHelp' v-html='$t("meta.warn")'></b-alert>
    </template>

    <div v-for='el in allAreas' :key='el.area'>
      <h3>{{ $t(`areas.${el.area}`) }}</h3>
      <br>
      <LevelsTable class='noselect' :alltopics='el.topics'></LevelsTable>
      <br>
    </div>

    <hr>

    <StatsTable></StatsTable>

    <hr>

    <Recomendations></Recomendations>

  </div>
</template>

<script>
import allItemsList from '../assets/data.json';
import Nav from './Nav';
import LevelsTable from './LevelsTable';
import StatsTable from './StatsTable';
import Recomendations from './Recomendations';

export default {
  name: 'HelloWorld',
  components: {
    Nav,
    LevelsTable,
    StatsTable,
    Recomendations,
  },
  data() {
    return {
      showHelp: true,
      allAreas: allItemsList,
      levels: this.$root.store.state.levels,
    };
  },
  computed: {
    isEditable() {
      return this.$root.store.isOwnLevels;
    },
  },
  i18n: {
    messages: {
      en: {
        meta: {
          header: 'What is this?',
          info: 'This is an interactive version of \'Programmer Competency Matrix\' originally created by <a href=\'https://sijinjoseph.netlify.app\'>Sijin Joseph</a>. The main difference is that, this version contains skills statistics and recomendations. Also your levels save to localStorage, so don\'t be afraid to close tab and come back later.',
          tip: 'Click on table cells to select your level.',
          warn: 'You are at page with someone\'s levels, <b>any changes will be lost!</b> <a href=\'/\'>Click here</a> to create your own page.',
          note: 'Note that the knowledge for each level is cumulative. Being at level \'n\' implies that you also know everything from the levels lower than \'n\'.',
          stars: 'If you like this project, please star it on ',
        },
      },
      ru: {
        meta: {
          header: 'Куда я попал?',
          info: 'Это интерактивная версия \'Матрицы компетенций программиста\', которая была создана <a href=\'https://sijinjoseph.netlify.app\'>Sijin Joseph</a>. Главным отличием этой версии является возможность делать отметки и получать статистику по своим навыкам и рекомендации по их улучшению. Кроме того, данные о вашем уровне сохраняются в localStorage, поэтому не бойтесь закрыть вкладку и вернуться позже. Русский перевод основан на <a href=\'https://github.com/omreps/programmer-competency-matrix\'>этом Github проекте</a>.',
          tip: 'Нажмите на ячейку в таблице, чтобы выбрать свой уровень',
          warn: 'Вы находитесь на странице с чужими уровнями, <b>любые изменения будут утеряны!</b> <a href=\'/\'>Нажмите сюда</a>, чтобы создать свою страницу.',
          note: 'Каждый следующий уровень включает в себя предыдущий, т.е. разработчик находящийся на уровне 3 должен удовлетворять критериям двух предыдущих уровней.',
          stars: 'Если вам понравился проект, поставьте ему звёздочку на ',
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

.noselect {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.modal-body p {
  word-wrap: break-word;
}
</style>
