<template>
  <div class="validator">
    <div id="yundun-spm" class="nc-container"></div>
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
.validator
  width 310px
  height 34px
</style>
