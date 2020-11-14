<template>
  <div class="footer">
    <p>小滔滔的博客©Copyright 2020</p>
    <p>Powered by  <el-link :underline="false" href="https://github.com/xiaott-ahh/myblog-server" target="_blank"> myBlog</el-link> & 阿里云</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer {
    padding-top: 25px;
    background: black;
    height: 100px;
    display: flex;
    flex-direction: column;
  }

  p {
    color: #7c7878;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  /deep/ .el-link--inner {
    font-size: 15px;
  }
</style>
