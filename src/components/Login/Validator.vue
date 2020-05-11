<template>
  <div class="item">
    验证
    <div class="validator">
      <div id="yundun-spm" class="nc-container"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import NoCaptcha from '@/assets/js/noCaptcha'

@Component
export default class Validator extends Vue {
  private noCaptcha!: NoCaptcha

  mounted() {
    this.noCaptcha = new NoCaptcha('#yundun-spm', (data) => {
      console.log(data)
    })
  }
}
</script>

<style lang="stylus" scoped>
.item
  width 380px
  margin auto
  color var(--text-color)
  display flex
  align-items center
  justify-content space-between
  .validator
    width 310px
    height 34px
</style>
