<template>
  <div class="content">
    <AccountInput class="item" ref="account" v-model="account" />
    <PasswordInput class="item" ref="password" v-model="password" />
    <Validator class="item" ref="validator" />
    
    <label class="remember-password">
      <MyRadio v-model="rememberPassword" />
      <span>记住密码</span>
    </label>

    <div class="button-container">
      <button class="primary-button" @click="login">{{$t('login')}}</button>
      or
      <button class="second-button" @click="$emit('changeState', 'registry')">马上注册</button>
    </div>

    <div class="forget-password">
      <button @click="$emit('changeState', 'forgetPassword')">忘记密码</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import { STATE } from '@/assets/js/type'
import { TranslateResult } from 'vue-i18n'
import { ACCOUNT_REGEX, PASSWORD_REGEX } from './util'

import MyRadio from '../MyRadio.vue'
import AccountInput from './AccountInput.vue'
import PasswordInput from './PasswordInput.vue'
import Validator from './Validator.vue'

@Component({
  components: {
    MyRadio,
    AccountInput,
    PasswordInput,
    Validator
  }
})
export default class SignOn extends Vue {
  private rememberPassword = false
  private account = ''
  private password = ''

  get verifyAccount() {
    let state: STATE
    let message: string | TranslateResult

    if (this.account === 'admin') {
      state = STATE.SUCCESS
      message = ''
    } else if (ACCOUNT_REGEX.test(this.account)) {
      state = STATE.SUCCESS
      message = ''
    } else {
      state = STATE.FAILED
      message = '账号错误'
    }
    
    return { state, message }
  }

  get verifyPassword() {
    let state: STATE
    let message: string | TranslateResult

    if (PASSWORD_REGEX.test(this.password)) {
      state = STATE.SUCCESS
      message = ''
    } else {
      state = STATE.FAILED
      message = '密码错误'
    }
    
    return { state, message }
  }

  get verifyLoginEnv() {
    if (this.verifyAccount.state === STATE.FAILED) {
      return this.verifyAccount
    }
    if (this.verifyPassword.state === STATE.FAILED) {
      return this.verifyPassword
    }
    return { state: STATE.SUCCESS, message: '格式正确' }
  }

  login() {
    if (this.verifyLoginEnv.state === STATE.SUCCESS) {
      this.$router.push({name: 'Manage'})
    } else {
      // throw error
      alert(this.verifyLoginEnv.message)
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  padding 30px 0
  ContentContainer()
    width 380px
    margin auto
  .item:not(:first-of-type)
    margin-top 40px
  .remember-password
    ContentContainer()
    margin-top 30px
    display flex
    align-items center
    justify-content flex-end
    font-size 12px
    color var(--text-dark-color)
    span
      margin-left 4px
  .button-container
    display flex
    align-items center
    flex-direction column
    button
      ContentContainer()
      height 40px
      margin 10px 0
  .forget-password
    ContentContainer()
    text-align center
    button
      font-size 12px
      color var(--text-dark-color)
      &:hover
        text-decoration underline
</style>