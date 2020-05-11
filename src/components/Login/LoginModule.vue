<template>
  <div class="sign-on-container">
    <h5 class="caption">登录矿宝账号</h5>
    <SignOn v-if="step === 'login'" @changeState="changeState" />
    <Registry v-else-if="step === 'registry'" @changeState="changeState" />
    <ForgetPassword v-else-if="step === 'forgetPassword'" @changeState="changeState"/>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import SignOn from './SignOn.vue'
import Registry from './Registry.vue'
import ForgetPassword from './ForgetPassword.vue'

type LoginFlow = 'login' | 'registry' | 'forgetPassword'

@Component({
  components: {
    SignOn,
    Registry,
    ForgetPassword
  }
})
export default class LoginModule extends Vue {
  private step: LoginFlow = 'login'

  changeState (step: LoginFlow) {
    this.step = step
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
</style>