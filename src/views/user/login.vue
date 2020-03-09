<template>
  <div class="user-login">
    <van-nav-bar title="登录"></van-nav-bar>
    <van-cell-group>
      <van-field
        v-model="loginForm.mobile"
        type="text"
        required
        label="手机号"
        placeholder="请输入手机号"
        clearable
      />
      <van-field
        v-model="loginForm.code"
        type="password"
        required
        clearable
        label="验证码"
        placeholder="请输入验证码"
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="login-btn">
     <van-button round block type="info" size="small" @click="login()">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-chat',
  data () {
    return {
      loginForm: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style scoped lang="less">
 .login-btn{
     margin: 40px;
 }
</style>
