<template>
  <div class='container'>
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
  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    changeLocale(newLocale) {
      this.$root.$i18n.locale = newLocale;
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
      },
      ru: {
        meta: {
          lang: 'Язык',
          title: 'Матрица компетенций программиста',
        },
      },
    },
  },
};
</script>
