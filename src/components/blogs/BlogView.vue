<template>
  <div class="blog-view">
    <el-card
      shadow="always"
      style="height: 1000px"
    >
      <div class="article">
        <h1 style="text-align: left" class="article-title">{{blog.title}}</h1>
        <div class="second-title">
          <div class="article-info">
            <span><i class="el-icon-time"></i>2020-10-3</span>
            <span><i class="el-icon-s-custom"></i>xiaott</span>
            <span><i class="el-icon-view"></i>2000</span>
            <span><i class="el-icon-s-comment"></i>2000</span>
            <span style=""><img src="../../assets/icos/fullheart.png">2</span>
          </div>
          <div class="article-tags">
            <span>标签：</span>
            <el-tag
              style="margin: 3px"
              :key="category.id"
              v-for="category in blog.categories"
            >
              {{category.type}}
            </el-tag>
          </div>
        </div>
        <!--
        <div class="markdown-body">
          <div v-html="blog.articleContentHtml"></div>
        </div>
        -->
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'BlogView',
  data(){
    return {
      blog:[]
    }
  },
  mounted () {
    this.blog = this.$route.query.blog
  }
}
</script>

<style scoped>
  div.second-title {
    height: 70px;
    background: rgba(34, 36, 37, 0.2);
    padding: 10px;
  }

  .article-title {
    font-weight: bold;
    font-size: 35px;
  }
  div.blog-view {
    width: 95%;
    margin: 15px 0 0 15px;
  }

  .el-card {
    margin: 20px;
  }
  div.second-title {
    display: flex;
    flex-direction: column;
  }
  div.article-info {
    text-align: left;
    margin-top: 10px;
  }

  .article-info span {
    margin-right: 70px;
  }
  div.article-tags {
    text-align: left;
    margin-top: 10px;
  }

</style>
