<template>
  <div class="aside-container">
    <div class="logo">
      <img src="" alt="">
    </div>

    <ol>
      <li>
        <router-link to="/rig">矿机</router-link>
      </li>
      <li>
        <router-link to="/rigList">列表</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.aside-container
  color var(--highlight-color)
</style>