<template>
  <div class="radio-container" :class="{'selected': value}">
    <input type="checkbox" :checked="value" @change="inputChange($event)">
    <svg class="icon mark" aria-hidden="true" v-if="value">
      <use xlink:href="#icon-right"></use>
    </svg>
  </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class MyRadio extends Vue {
  @Prop({required: true}) private value!: boolean

  private inputChange(event: InputEvent) {
    this.$emit('input', (event.target as HTMLInputElement).checked)
  }
}
</script>

<style lang="stylus" scoped>
.radio-container
  display inline-block
  width 16px
  height @width
  position relative
  border 1px solid var(--text-dark-color)
  &.selected
    background var(--primary-color)
    border 1px solid var(--primary-color)
  input[type=checkbox]
    opacity 0
    position absolute
    width 100%
    height 100%
    top 0
    left 0
    z-index 1
  .mark
    font-size 12px
    line-height @font-size
    position absolute
    top 'calc(50% - %s)' % (@font-size / 2)
    left 'calc(50% - %s)' % (@font-size / 2)
    color var(--highlight-color)
</style>