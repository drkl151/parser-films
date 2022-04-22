/* eslint-disable vue/order-in-components */
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

  components: {
    Table,
  },

  mounted() {
    this.parse()
  },

  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters({
      films: 'parse/films',
    }),
  },

  methods: {
    ...mapActions({
      parse: 'parse/parse',
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
