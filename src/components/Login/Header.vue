<template>
  <header>
    <div class="content">
      <img src="" alt="logo">
      <select class="language-selector" name="" id="" v-model="$i18n.locale">
        <option value="en-US">English</option>
        <option value="zh-CN">中文</option>
      </select>
    </div>
  </header>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class LoginHeader extends Vue {}
</script>

<style lang="stylus" scoped>
  header
    background gray
    border-bottom 1px solid
    .content
      width 80%
      max-width 1200px
      margin auto
      display flex
      align-items center
      .language-selector
        margin-left auto
</style>