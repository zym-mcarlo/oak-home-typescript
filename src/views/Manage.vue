<template>
  <section class="manage">
    <ManageAside class="aside" />
    <div class="content">
      <ManageHeader class="header" />
      <router-view class="view scroll"></router-view>
    </div>
  </section>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import ManageHeader from '@/components/Manage/Header.vue'
import ManageAside from '@/components/Manage/Aside.vue'

@Component({
  components: {
    ManageHeader,
    ManageAside
  }
})
export default class Manage extends Vue {
}
</script>

<style lang="stylus" scoped>
HeaderHeight = 56px
.manage
  width 100%
  height 100%
  display flex
  overflow hidden
  background var(--basic-color)
  .aside
    width 150px
    height 100%
    background #222731
  .content
    flex auto
    width 0
    height 100%
    padding 0 20px 20px 0
    overflow hidden
    .header
      height HeaderHeight
    .view
      height 'calc(100% - %s)' % HeaderHeight
</style>