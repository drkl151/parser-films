<template>
  <div class="table-wrapper">
    <table class="table">
      <tr class="title-row">
        <th>Получить m3u8</th>
        <th style="min-width: 70px">№</th>
        <th>Название</th>
        <th>Перевод</th>
        <th>Качество</th>
        <th>Год</th>
        <th>Категории</th>
        <th>Описание</th>
        <th>Актеры</th>
        <th>Длительность</th>
        <th>Режиссер</th>
        <th>Постер</th>
      </tr>
      <tr v-for="(film, i) of films" :key="film.Оригинальное_название">
        <td>
          <button
            class="btn-getm3u8"
            @click="
              getUrl({
                url: film.url,
                quality: film.quality,
                translate: film.translate,
              })
            "
          >
            Получить ссылку m3u8
          </button>
          <template v-if="film.m3u8Url">
            <input id="m3u8-text" :value="film.m3u8Url" />
            <p id="copy" @click="copyM3U8(film.m3u8Url)">copy</p>
          </template>
        </td>
        <td>{{ i + 1 }}</td>
        <td>{{ film.Название }} / {{ film.Оригинальное_название }}</td>
        <td>
          <select
            class="select"
            :value="film.translate"
            name="translate"
            @input="(e) => changeTranslateValueMethod(e, film.url)"
          >
            <option
              v-for="(translate, j) of film['Перевод']"
              :key="j"
              :value="translate"
            >
              {{ translate }}
            </option>
          </select>
        </td>
        <td>
          <select
            class="select"
            :value="film.quality"
            name="quality"
            @input="(e) => changeQualityValueMethod(e, film.url)"
          >
            <option
              v-for="(translate, k) of film['Качество']"
              :key="k"
              :value="translate"
            >
              {{ translate }}
            </option>
          </select>
        </td>
        <td>{{ film['Дата выхода'] || film['Год'] }}</td>
        <td>{{ film.Жанр }}</td>
        <td style="min-width: 450px">{{ film['Описание'] }}</td>
        <td>{{ film['В ролях актеры'] }}</td>
        <td>{{ film.Время }}</td>
        <td>{{ film.Режиссер }}</td>
        <td>
          <img style="width: 260px" :src="film.Постер" :alt="film.Название" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Table',

  props: {
    films: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      selectedTranslate: '',
      selectedQuality: '',
    }
  },

  methods: {
    ...mapActions({
      getUrlActions: 'hdrezka/getUrl',
    }),
    ...mapMutations({
      changeTranslateValue: 'hdrezka/changeTranslateValue',
      changeQualityValue: 'hdrezka/changeQualityValue',
    }),
    getUrl(options) {
      this.getUrlActions(options)
    },
    changeTranslateValueMethod(e, url) {
      this.changeTranslateValue({ url, value: e.target.value })
    },
    changeQualityValueMethod(e, url) {
      this.changeQualityValue({ url, value: e.target.value })
    },
    copyM3U8(m3u8) {
      navigator.clipboard.writeText(m3u8);
      // const m3u8 = document.getElementById('m3u8-text')
      // const btn = document.getElementById('copy')

      // btn.onclick = function () {
      //   m3u8.select()
      // //   document.execCommand('copy')
      // }
    },
  },
}
</script>

<style lang="scss">
@import './Table.scss';
</style>
