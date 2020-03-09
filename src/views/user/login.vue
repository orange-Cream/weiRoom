<template>
  <div class="user-login">
    <van-nav-bar title="登录"></van-nav-bar>
    <van-cell-group>
      <ValidationObserver ref="loginFormRef">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|phone"
          name="手机号码"
        >
          <van-field
            v-model="loginForm.mobile"
            type="text"
            required
            label="手机号"
            placeholder="请输入手机号"
            clearable
            :error-message="errors[0]"
          />
        </ValidationProvider>
        <ValidationProvider name="验证码" rules="required" v-slot="{ errors }">
          <van-field
            v-model="loginForm.code"
            type="password"
            required
            clearable
            label="验证码"
            placeholder="请输入验证码"
            :error-message="errors[0]"
          >
            <van-button slot="button" size="small" type="primary"
              >发送验证码</van-button
            >
          </van-field>
        </ValidationProvider>
      </ValidationObserver>
    </van-cell-group>
    <div class="login-btn">
      <van-button round block type="info" size="small" @click="login()"
        >登录</van-button
      >
    </div>
  </div>
</template>

<script>
// 导入api方法
import { apiUserLogin } from '@/api/user.js'
// 验证相关模块导入
import { ValidationProvider, ValidationObserver } from 'vee-validate'
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
  components: {
    // 注册
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    // 登录系统
    async login () {
      // 对表单全部项目进行校验,没有问题再向下执行
      const valid = await this.$refs.loginFormRef.validate()
      if (!valid) {
        // 校验失败, 停止后续代码执行
        return false
      }

      // 调用api，校验账号信息有效，如下api请求有可能【成功】，还有可能【失败】
      try {
        const result = await apiUserLogin(this.loginForm)
        console.log(result) // {token:xx,refresh_token:xx}
        // 通过vuex 维护服务器端返回的token等秘钥信息
        this.$store.commit('updateUser', result)
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
.login-btn {
  margin: 40px;
}
</style>
