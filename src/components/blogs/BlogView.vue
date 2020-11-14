<template>
  <div class="blog-view">
    <el-card
      shadow="always"
      style="height: 180px;width: 100%;margin:0;"
    >
      <div class="article">
        <h1 style="text-align: left;margin-top: 0;margin-bottom: 10px" class="article-title">{{blog.title}}</h1>
        <div class="second-title">
          <div class="article-info">
            <img src="../../assets/icos/origin.png" style="margin-right: 40px">
            <span><i class="el-icon-time"></i>{{blog.createdAt}}</span>
            <span><i class="el-icon-s-custom"></i>xiaott</span>

            <span><i class="el-icon-view"></i>{{blog.visitedNum}}</span>

          </div>
          <div class="article-tags">
            <span>标签：</span>
            <el-tag
              style="margin: 3px"
              :key="category"
              v-for="category in blog.tags.split('/')"
            >
              {{category}}
            </el-tag>
          </div>
        </div>
          <!--
          <div v-html="blog.blogHtml"></div>
          -->
      </div>
    </el-card>
    <mavon-editor codeStyle="monokai" v-html="blog.blogHtml"></mavon-editor>
  </div>
</template>

<script>
export default {
  name: 'BlogView',
  data(){
    return {
      blog:{}
    }
  },
  props: ['selectedBlog'],
  created () {
    const id = this.$route.query.id;
    const url = '/getblog/' + id;
    this.$axios.get(url).then(
      resp => {
        if(resp && resp.data) {
          this.blog = resp.data;
          //this.blog.visitedNum += 1;
          console.log('浏览量:' + this.blog.visitedNum);
          /*
          更新浏览量

          this.$axios.post('/blogs',{
            id: this.blog.id,
            title: this.blog.title,
            blogMd: this.blog.blogMd,
            blogHtml: this.blog.blogHtml,
            abs: this.blog.abs,
            cover: this.blog.cover,
            createdAt: this.blog.createdAt,
            tags: this.blog.tags,
            visitedNum: this.blog.visitedNum
          })*/
        }
      }
    ).catch(failResponse=>{
      this.$alert("加载失败请重试");
    });
  },
  watch:{

    $route() {
      this.$router.go(0)
    },
    /*
    selectedBlog: function (val) {
      console.log('跳转到blogView,val=' + val);
      this.blog = val;
    }*/
  },
}
</script>

<style scoped>
  div.second-title {
    height: 70px;
    background: rgba(12,23,33,0.1);
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
    display: flex;
    align-items: center;
    text-align: left;
    margin-top: 5px;
  }

  .article-info span {
    margin-right: 70px;
  }
  div.article-tags {
    text-align: left;
    margin-top: 10px;
  }

  .markdown-body {
    padding: 20px;
    margin-top: 10px;
    border: none !important;
  }
</style>
