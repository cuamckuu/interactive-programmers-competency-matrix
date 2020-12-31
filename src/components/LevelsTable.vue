<template>
  <div>
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
</template>


<script>
export default {
  name: 'LevelsTable',
  props: [
    'items',
  ],
  data() {
    return {
      fields: [
        'topic',
        'level0',
        'level1',
        'level2',
        'level3',
      ],
    };
  },
  methods: {
    handleClick(itemId, newLevel) {
      this.items[itemId].current_level = newLevel;
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
