<template>
  <div id="poster">
    <el-form :model="loginForm" label-position="left" class="login"
             @keyup.enter.native="login"
    >
      <el-form-item>
        <h1>请先登录</h1>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input size="small" type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input size="small" type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item style="padding: 10px 50px 0px 50px">
        <el-button  class="submit" size="medium" round type="primary" @click="login">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      checked: false,
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const url = '/login'
      this.$axios
        .post(url, {
          username: this.loginForm.username,
          password: this.loginForm.password
        },)
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$router.push('/admin/xiaoTT/blogManagement')
          }
          if (successResponse.data.code === 400) {
            alert(successResponse.data.message)
          }
        })
        .catch(failResponse => {
          alert(failResponse.data);
        })
    }
  }
}
</script>

<style scoped>

#poster {
  background: url("../../assets/images/login.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

.login {
  margin:100px auto;
  width:300px;
  height: 350px;
  padding: 10px 20px 0px 20px;
  background: rgba(2, 10, 14, 0.5);
}

h1 {
  margin: 10px 0 0 0;
  color: white;
  font-size: 25px;
}
/deep/ .el-form-item__label {
  color: white;
}

.submit.el-button {
  width: 200px;
}

a.login-way {
  padding: 23px;
}

/deep/ .el-input__inner {
  border-radius: 20px !important;
  background-color: transparent !important;
  color: white !important;
}

</style>
