<template>
  <div class='container'>
    <b-navbar variant='light' fixed='top'>
      <b-navbar-brand class='clickable' v-on:click='scrollToTop'>
        {{ $t('meta.title') }}
      </b-navbar-brand>


      <b-navbar-nav class='ml-auto'>
        <b-button variant='primary' class='mr-2' v-b-modal.modal-share>
          {{ $t('meta.share') }}
        </b-button>
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

    <b-modal id="modal-share" :title="$t('meta.share')" hide-backdrop ok-only>
      <p>
        {{ $t('meta.shareInfo') }}
        <a :href='shareLink'>{{ $t('meta.link') }}</a>
      </p>
    </b-modal>
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
  computed: {
    shareLink() {
      return `${window.location.origin}?levels=${btoa(JSON.stringify(this.$root.store.state.levels))}`;
    },
  },
  i18n: {
    messages: {
      en: {
        meta: {
          lang: 'Lang',
          share: 'Share your levels',
          shareInfo: 'Share this link with somebody to show your levels and stats:',
          link: 'Your personal link',
          title: 'Programmes\'s Competency Matrix',
        },
      },
      ru: {
        meta: {
          lang: 'Язык',
          share: 'Поделиться своими уровнями',
          shareInfo: 'Поделитесь этой ссылкой с кем-нибудь, чтобы показать свои уровни и статистику:',
          link: 'Ваша персональная ссылка',
          title: 'Матрица компетенций программиста',
        },
      },
    },
  },
};
</script>
