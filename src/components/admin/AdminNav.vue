<template>
  <div class="nav" style="padding: 0;width: 200px;height: 100%">
    <el-menu
      :default-active="currentPath"
      router
      mode="vertical"
      class="el-menu-admin"
      background-color="#545c64"
      text-color="#fff"
      style="width: 200px;height: 100%"
      active-text-color="#3a91ba">
      <el-menu-item index="/admin/xiaoTT/dashboard">首页</el-menu-item>
      <el-menu-item index="/admin/xiaoTT/blogManagement">文章管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AdminNav",
}
</script>

<style scoped>

  .el-menu-admin {
    border-right: 0;
    height: 100%;
  }

  .el-menu-item:hover {
    background-color: transparent !important;
  }
  .el-submenu:hover {
    background-color: transparent !important;
  }
</style>
