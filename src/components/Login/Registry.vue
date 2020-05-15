<template>
  <div class="content">
    <AccountInput class="item" ref="account" :isRegistry="true" v-model="account" />
    <PasswordInput class="item" ref="password" :isRegistry="true" v-model="password" />
    <PasswordInput class="item" ref="otherPassword" :isRegistry="true" :samePassword="password" v-model="confirmPassword" />
    <VerifyCode class="item" :account="account" v-model="verifyCode" />

    <div class="button-container">
      <button class="primary-button" @click="registry">{{$t('registry')}}</button>
      or
      <button class="second-button" @click="$emit('changeState', 'login')">去登录</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import { STATE } from '@/assets/js/type'
import { TranslateResult } from 'vue-i18n'
import { ACCOUNT_REGEX, PASSWORD_REGEX, VERIFY_CODE_REGEX } from './util'

import MyRadio from '../MyRadio.vue'
import AccountInput from './AccountInput.vue'
import PasswordInput from './PasswordInput.vue'
import VerifyCode from './VerifyCode.vue'

@Component({
  components: {
    MyRadio,
    AccountInput,
    PasswordInput,
    VerifyCode
  }
})
export default class SignOn extends Vue {
  private rememberPassword = false
  private account = ''
  private password = ''
  private confirmPassword = ''
  private verifyCode = ''

  get verifyAccount() {
    let state: STATE
    let message: string | TranslateResult

    if (this.account === '') {
      state = STATE.FAILED
      message = '请输入账号'
    } else if (ACCOUNT_REGEX.test(this.account)) {
      state = STATE.SUCCESS
      message = ''
    } else {
      state = STATE.FAILED
      message = 'Wrong account format'
    }
    
    return { state, message }
  }

  get verifyPassword() {
    let state: STATE
    let message: string | TranslateResult

    if (this.password === '') {
      state = STATE.FAILED
      message = '请输入密码'
    } else if (this.confirmPassword && this.password !== this.confirmPassword) {
      state = STATE.FAILED
      message = '两次密码输入不一致'
    } else if (PASSWORD_REGEX.test(this.password)) {
      state = STATE.SUCCESS
      message = ''
    } else {
      state = STATE.FAILED
      message = '6-100位 数字、字母、下划线的组合'
    }

    return { state, message }
  }

  get verifyVerifyCode() {
    let state: STATE
    let message: string | TranslateResult

    if (VERIFY_CODE_REGEX.test(this.verifyCode)) {
      state = STATE.SUCCESS
      message = ''
    } else {
      state = STATE.FAILED
      message = '验证码有误'
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
    if (this.verifyVerifyCode.state === STATE.FAILED) {
      return this.verifyVerifyCode
    }
    return { state: STATE.SUCCESS, message: '格式正确' }
  }

  registry() {
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
  .button-container
    display flex
    align-items center
    flex-direction column
    margin-top 30px
    button
      ContentContainer()
      height 40px
      margin 10px 0
</style>