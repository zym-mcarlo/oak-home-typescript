<template>
  <div class="item">
    <label>
       密码 
       <div class="input-container">
        <input type="password" :value="value" @input="input($event)">
        <p class="hint" v-if="verifyPassword.message">{{verifyPassword.message}}</p>
       </div>
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { TranslateResult } from 'vue-i18n'
import { PASSWORD_REGEX } from './util'

@Component
export default class PasswordInput extends Vue{
  @Prop({ default: false }) private isRegistry!: boolean
  @Prop({ default: '' }) private samePassword!: string
  @Prop({ required: true }) private value!: string

  get verifyPassword() {
    let message: string | TranslateResult = ''

    if (this.isRegistry) {
      if (this.value) {
        if (this.samePassword && this.value !== this.samePassword) {
          message = '两次密码输入不一致'
        } else if (!PASSWORD_REGEX.test(this.value)) {
          message = '6-100位 数字、字母、下划线的组合'
        }  
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