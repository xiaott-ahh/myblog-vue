<template>
  <div id="personal-info">
    <el-card
      shadow="always"
      style="height: 240px;"
    >
      <div class="my-info">
        <span>
          <img src="../../assets/images/avator.png" @click="login" style="width: 70px;margin-bottom: 10px;"/>
        </span>
        <span>邱俊滔   <i class="el-icon-location"></i>北京</span>
        <el-divider></el-divider>
        <a
          class="github"
          target="_blank"
          href="https://github.com/xiaott-ahh"
          style="color: black;text-align: left;height: 30px">
          <img src="../../assets/icos/github.png" style="vertical-align: middle;margin-right: 2px" alt=""/>
          <span>xiaott-ahh</span>
        </a>
        <span style="text-align: left;">
          <img src="../../assets/icos/email.png" style="vertical-align: middle" alt=""/>
          13068729891@163.com
        </span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  methods: {
    login() {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

  div.my-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  h1 {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    height: 50px;
  }

  a:link a:visited, a:focus {
    color: #3377aa;
  }
  a:hover {
    color: #3a91ba;
  }
</style>
