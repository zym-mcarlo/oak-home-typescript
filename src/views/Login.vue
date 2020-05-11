<template>
  <section class="login-container">
    <LoginHeader class="header" />
    <div class="container">
      <LoginModule />
      <LoginFooter class="footer" />
    </div>
  </section>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import LoginHeader from '@/components/Login/Header.vue'
import LoginFooter from '@/components/Login/Footer.vue'
import LoginModule from '@/components/Login/LoginModule.vue'

@Component({
  components: {
    LoginHeader,
    LoginFooter,
    LoginModule
  }
})
export default class Login extends Vue{}
</script>

<style lang="stylus" scoped>
loginHeader = 56px
.login-container
  height 100%
  overflow-y auto
  background var(--basic-color)
  .header
    height loginHeader
    line-height loginHeader
  .container
    width 100%
    overflow hidden
    min-height 'calc(100vh - %s)' % loginHeader
</style>