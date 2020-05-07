<template>
  <header>
    <div class="content">
      <img src="" alt="logo">
      <select class="language-selector" name="" id="" v-model="locale">
        <option value="en-US">English</option>
        <option value="zh-CN">中文</option>
      </select>
    </div>
  </header>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {Locale} from '@/assets/js/config'

@Component
export default class LoginHeader extends Vue {
  private locale: Locale = 'zh-CN'

  onLocaleChange() {
    console.log(this.$i18n)
  }
}
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