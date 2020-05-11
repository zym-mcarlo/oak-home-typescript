<template>
  <div class="item">
    <label>
       验证码 
       <div class="input-container">
        <input type="password" :value="value" @input="input($event)">
        <button class="second-button get-verify-code" v-if="startCountDown">{{countDown.as('seconds')}}s</button>
        <button class="second-button get-verify-code" @click="getVerifyCode" v-else>获取验证码</button>
       </div>
    </label>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { accountRegex } from './util'
import moment from 'moment'

@Component
export default class PasswordInput extends Vue {
  @Prop({ required: true }) private account!: string
  @Prop({ required: true }) private value!: string

  private countDown: moment.Duration = moment.duration(10, 'seconds')
  private startCountDown = false

  get accountIsValid() {
    return accountRegex.test(this.account)
  }

  getVerifyCode() {
    if (this.accountIsValid) {
      /**get code */
      this.preventShake()
    } else {
      alert('手机号码有误！')
    }
  }

  preventShake() {
    this.startCountDown = true
    this.countDown = moment.duration(10, 'seconds')
    const timer = setInterval(() => {
      this.countDown.subtract(1, 'second')
      if (this.countDown.as('milliseconds') === 0) {
        clearInterval(timer)
        this.startCountDown = false
      }
    }, 1000)
  }

  input(event: Event) {
    this.$emit('input', (event.target as HTMLInputElement).value)
  }
}
</script>

<style lang="stylus" scoped>
@import './input-item.styl'

.get-verify-code
  width 110px
  height 30px
.input-container
  display flex
  align-items center
  input
    width auto !important
</style>