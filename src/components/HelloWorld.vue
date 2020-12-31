<template>
  <div class='container-fluid'>
    <b-navbar variant='light' fixed='top'>
      <b-navbar-brand class='clickable' v-on:click='scrollToTop'>
        {{ $t('meta.title') }}
      </b-navbar-brand>

      <b-navbar-nav class='ml-auto'>
        <b-nav-item-dropdown :text='$t("meta.lang")'>
          <b-dropdown-item v-on:click='changeLocale("en")'>
            EN
          </b-dropdown-item>
          <b-dropdown-item v-on:click='changeLocale("ru")'>
            RU
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <br>

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

      <b-table-simple responsive=true>
        <b-thead head-variant='light'>
          <b-tr>
            <b-th v-for='(field, i) in fields' :key='i'>
                {{ $t('fields.' + field) }}
            </b-th>
          </b-tr>
        </b-thead>

        <b-tbody>
          <b-tr v-for='(row, i) in items' :key='row.current_level'>
            <b-td><b>{{ row.topic }}</b></b-td>
            <template v-for='lvl in 4'>
              <template v-if='row.current_level === (lvl-1)'>
                <b-td
                  :key='lvl'
                  class='clickable selected'>
                  {{ row['level' + (lvl-1)] }}
                </b-td>
              </template>
              <template v-else>
                <b-td
                  :key='lvl'
                  class='clickable'
                  v-on:click='handleClick(i, lvl-1)'>
                  {{ row['level' + (lvl-1)] }}
                </b-td>
              </template>
            </template>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>
import itemsList from '../assets/data.json';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: itemsList.map((x) => {
        x.current_level = -1; // eslint-disable-line
        return x;
      }),
      fields: [
        'topic',
        'level0',
        'level1',
        'level2',
        'level3',
      ],
      showHelp: true,
    };
  },
  methods: {
    handleClick(itemId, newLevel) {
      this.items[itemId].current_level = newLevel;
    },
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
          lang: 'Lang',
          title: 'Programmes\'s Competency Matrix',
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
          lang: 'Язык',
          title: 'Матрица компетенций программиста',
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
