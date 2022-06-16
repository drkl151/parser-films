<template>
  <main id="main">
    <Loader v-if="isRequest" />

    <template v-else>
      <div v-if="!isRequest && !films.length" class="getFilms">
        <p>Выберите категорию :</p>

        <select v-model="currentPage" class="select-film">
          <option
            v-for="page of pages"
            :key="page.title"
            class="select-film__option"
            :value="page"
          >
            {{ page.title }}
          </option>
        </select>

        <button class="getFilms__btn" @click="parseHdrezka(currentPage.url)">
          Получить фильмы
        </button>
      </div>

      <Table v-if="films.length" :films="films" />
    </template>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Table from '@/components/Table/Table'
import Loader from '@/components/Loader/Loader.vue'

export default {
  name: 'IndexPage',

  components: {
    Table,
    Loader,
  },

  data() {
    return {
      pages: [
        {
          title: 'Последние поступления',
          url: 'https://hdrezka.ag/?filter=last&genre=1',
        },
        {
          title: 'Популярные',
          url: 'https://hdrezka.ag/?filter=popular&genre=1',
        },
        {
          title: 'Сейчас смотрят',
          url: 'https://hdrezka.ag/?filter=watching&genre=1',
        },
      ],
      currentPage: {
        title: 'Сейчас смотрят',
        url: 'https://hdrezka.ag/?filter=watching&genre=1',
      },
    }
  },

  mounted() {
    this.loadSocket();
  },

  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters({
      isRequest: 'hdrezka/isRequest',
      films: 'hdrezka/films',
    }),
  },

  methods: {
    ...mapActions({
      parseHdrezka: 'hdrezka/parse',
      loadSocket: 'hdrezka/loadSocket'
    }),
  },
}
</script>

<style lang="scss">
@import '../style/index.scss';
</style>
