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
// 导入api方法
import { apiUserLogin } from '@/api/user.js'
export default {
  name: 'user-login',
  data () {
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    // 登录系统
    async login () {
      // 调用api，校验账号信息有效，如下api请求有可能【成功】，还有可能【失败】
      try {
        const result = await apiUserLogin(this.loginForm)
        console.log(result) // {token:xx,refresh_token:xx}
        this.$toast.success('登录成功')
        // 页面跳转
        this.$router.push('/')
      } catch (err) {
        // 错误信息提示 vant组件库方法
        this.$toast.fail('手机号或验证码错误' + err)
        // this.$toast.success('手机号或验证码错误' + err) // 成功提示
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
