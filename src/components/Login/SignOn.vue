<template>
  <div class="sign-on-container">
    <h5 class="caption">登录矿宝账号</h5>
    <div class="content">
      <div class="item">
        <label>
          账号 <input type="text"></label>
      </div>
      <div class="item">
        <label>密码 <input type="text"></label>
      </div>
      <div class="item">
        <label>验证 <Validator /></label>
      </div>

      <label class="remember-password">
        <MyRadio v-model="rememberPassword" />
        <span>记住密码</span>
      </label>

      <div class="button-container">
        <button @click="login">{{$t('login')}}</button>
        or
        <button>马上注册</button>
      </div>

      <div class="forget-password">
        <button>忘记密码</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Validator from './Validator.vue'
import MyRadio from '../MyRadio.vue'

@Component({
  components: {
    MyRadio,
    Validator
  }
})
export default class SignOn extends Vue {
  private rememberPassword = false
  
  login() {
    this.$router.push({name: 'Manage'})
  }
}
</script>

<style lang="stylus" scoped>
.sign-on-container
  width 600px
  position relative
  margin auto
  margin-top 30px
  border-radius 2px
  background var(--highlight-color)
  box-shadow var(--highlight-box-shadow)
  .caption
    font-size 20px
    color var(--primary-color)
    height 80px
    line-height @height
    text-align center
    border-bottom 1px solid #fcf1ee
  .content
    padding 30px 0
    ContentContainer()
      width 380px
      margin auto
    .item
      ContentContainer()
      color var(--text-color)
      &:not(:first-of-type)
        margin-top 40px
      label
        display flex
        align-items center
        justify-content space-between
        input
          border-bottom 1px solid #D8D8D8
          width 310px
          height 34px
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
        background var(--primary-color)
        color var(--highlight-color)
        height 40px
        border-radius 2px
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