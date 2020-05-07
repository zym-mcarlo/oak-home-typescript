<template>
  <section id="app">
    <router-view/>
  </section>
</template>

<style lang="stylus">
@import '~@/assets/style/index.styl'
</style>

<style lang="stylus" scoped>
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color var(--text-color)
  width 100%
  height 100%
  overflow hidden
</style>
