<template>
  <div class="table-wrapper">
    <div class="choose-site">
      <p>Выбери сайт для парсинга</p>

      <select name="select">
        <option value="site1" selected>Kinobase</option>
        <option value="site2">rezka</option>
        <option value="site3">film 3</option>
      </select>
    </div>

    <table class="table">
      <tr class="title-row">
        <th>Название</th>
        <th>Год</th>
        <th>Категории</th>
        <th>Описание</th>
        <th>Актеры</th>
        <th>Перевод</th>
        <th>Длительность</th>
        <th>Режиссер</th>
        <th>Формат видео</th>
        <th>Постер</th>
        <th>Торент</th>
      </tr>
      <tr v-for="film of films" :key="film.poster">
        <template v-if="film.torrentUrls.length">
          <td>
            {{ film.Название }}
            <span v-if="film.АльтернативноеНазвание">
              / {{ film.АльтернативноеНазвание }}</span
            >
          </td>
          <td>{{ film.Год }}</td>
          <td>{{ film.Жанр }}</td>
          <td>{{ film.Описание }}</td>
          <td>{{ film.Актеры }}</td>
          <td>{{ film.Перевод }}</td>
          <td>{{ film.Продолжительность }}</td>
          <td>{{ film.Режиссер }}</td>
          <td>{{ film.Качество }}</td>
          <td>
            {{ film.Постер }}
          </td>
          <td>
            <p v-for="(url, i) of film.torrentUrls" :key="i">
              <a target="_blank" :href="url">{{ url }}</a>
            </p>
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Table',

  props: {
    films: {
      type: Array,
    },
  },
}
</script>

<style>
.table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
}

th {
  border: 2px solid rgb(128, 0, 105);
  min-width: 200px;
}

td {
  border: 2px solid green;
}
</style>
