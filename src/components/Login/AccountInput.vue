<template>
  <div class="item">
    <label>
       账号 
       <div class="input-container">
        <input type="text" :value="value" @input="input($event)">
        <p class="hint" v-if="verifyAccount.message">{{verifyAccount.message}}</p>
       </div>
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { TranslateResult } from 'vue-i18n'
import { ACCOUNT_REGEX } from './util'

@Component
export default class AccountInput extends Vue{
  @Prop({ default: false }) private isRegistry!: boolean
  @Prop({ required: true }) private value!: string

  get verifyAccount() {
    let message: string | TranslateResult = ''

    if (this.isRegistry) {
      if (this.value && !ACCOUNT_REGEX.test(this.value)) {
        message = 'Wrong account format'
      }
    }
    
    return { message }
  }

  input(event: Event) {
    this.$emit('input', (event.target as HTMLInputElement).value)
  }
}
</script>

<style lang="stylus" scoped>
@import './input-item.styl'
</style>