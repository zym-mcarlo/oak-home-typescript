<template>
  <div class="content">
    <div class="item">
      <label>
        账号 <input type="text" v-model="account"></label>
    </div>
    <div class="item">
      <label>密码 <input type="password" v-model="password"></label>
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
</template>

<script>
export default {

}
</script>

<style>

</style>