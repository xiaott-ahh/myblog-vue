<template>
  <div class="nav-header">
    <div class="nav-logo" style="display: flex;padding-left: 30px">
      <a class="logo" href="/">
        <img src="../../assets/images/logo.png" alt=""/>
      </a>
    </div>
    <div class="nav-search" style="width: 35%;padding-top: 15px;margin:0 30px 15px 30px">
      <el-input
        @keyup.enter.native="searchClick(keywords)"
        placeholder="输入文章关键词..."
        prefix-icon="el-icon-search"
        size="small"
        style="width: 70%;margin-right: 10px"
        v-model="keywords">
      </el-input>
      <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick(keywords)">搜索</el-button>
    </div>
    <div class="nav-right">
      <el-menu
        theme="dark"
        mode="horizontal"
        router
        @select="handleSelect"
        background-color="black"
        text-color=white
        active-text-color=white>
        <el-menu-item index="/tags">分类</el-menu-item>
        <el-menu-item index="/date">归档</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      keywords: '',
    }
  },
  methods: {
    handleSelect() {

    },
    searchClick(keywords) {
      this.$router.push({
        path: '/index/blogList',
        query: {
          keywords: keywords
        }
      })
    }
  }
}
</script>

<style scoped>
  .nav-header {
    display: flex;
    align-items: center;
    height: 80px;
    background: #2b2928;
    align-items: center;
  }

  .nav-logo {
    width: 55%;
  }

  .nav-right {
    width: 15%;
  }

  .el-menu {
    border: none !important;
    background-color: transparent !important;
  }

  .el-menu-item {
    border-bottom: none !important;
    background-color: transparent !important;
  }

</style>
