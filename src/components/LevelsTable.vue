<template>
  <div>
    <b-table-simple responsive=true>
      <b-thead head-variant='light'>
        <b-tr>
          <b-th v-for='(field, i) in fields' :key='i'>
              {{ $t(`fields.${field}`) }}
          </b-th>
        </b-tr>
      </b-thead>

      <b-tbody>
        <b-tr v-for='(topic, i) in items' :key='topic'>
          <b-td><b>{{ $t(`levels.${topic}.name`) }}</b></b-td>
          <template v-for='lvl in 4'>
            <template v-if='levels[topic] === (lvl-1)'>
              <b-td
                :key='lvl'
                class='clickable selected'>
                {{ $t(`levels.${topic}.level${lvl-1}`) }}
              </b-td>
            </template>
            <template v-else>
              <b-td
                :key='lvl'
                class='clickable'
                v-on:click='handleClick(i, lvl-1)'>
                {{ $t(`levels.${topic}.level${lvl-1}`) }}
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
    'alltopics',
  ],
  data() {
    return {
      items: this.alltopics,
      fields: [
        'topic',
        'level0',
        'level1',
        'level2',
        'level3',
      ],
      levels: this.$root.store.state.levels,
    };
  },
  methods: {
    handleClick(itemId, newLevel) {
      const topicKey = this.items[itemId];
      this.$root.store.setLevelAction(topicKey, newLevel);
    },
  },
};
</script>

<style>
.selected {
  background: lightgrey;
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
