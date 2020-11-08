<template>
  <div class="admin-head">
    <div class="nav-logo" style="width: 200px">
      <a class="logo" href="/">
        <img src="../../assets/images/logo.png" alt=""/>
      </a>
    </div>
    <div class="userImage" style="margin-right: 20px">
      <el-button type="danger" icon="el-icon-switch-button" circle @click="quit"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHeader",
  methods: {
    quit() {
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>

.admin-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}

.nav-logo {
  background-color: #409EFF;
}
</style>
