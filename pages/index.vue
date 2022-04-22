<template>
  <main id="main">
    <Table :films="films" />
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Table from '@/components/Table/Table'

export default {
  name: 'IndexPage',

  mounted() {
    this.parse()
  },

  components: {
    Table,
  },

  methods: {
    ...mapActions({
      parse: 'parse/parse',
    }),
  },

  computed: {
    ...mapGetters({
      films: 'parse/films',
    }),
  },
}
</script>

<style lang="css">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px 20px;
  width: 100vw;
  height: 100vh;
}
</style>
