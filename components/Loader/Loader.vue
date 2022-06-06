<template>
  <div class="loader">
    <iframe
      class="loader__iframe"
      src="https://www.youtube.com/embed/3SeOVVJXOUo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Loader',
}
</script>

<style lang="scss">
@import './Loader.scss';
</style>
