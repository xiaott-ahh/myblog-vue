<template>
  <div id="blog-list">
    <el-card
      shadow="always"
      v-for="(blog,i) in blogs"
      :key="i"
      style="height: 170px;"
    >
      <div class="article">
        <div class="article-cover">
          <img :src="blog.cover"  alt=""/>
        </div>
        <div class="article-info">
          <el-link :underline="false" @click="openBlog(blog)" style="font-size: 20px;font-weight: bold;">{{blog.title}}</el-link>
          <p style="width: 100%">{{blog.abs}}</p>
          <div class="article-tags" style="width: 100%">
            <el-tag
              style="margin: 3px"
              :key="category"
              v-for="category in blog.tags.split('/')"
            >
              {{category}}
            </el-tag>
          </div>
          <div class="otherInfo">
            <span><i class="el-icon-time"></i>{{blog.createdAt}}</span>
            <span><i class="el-icon-s-custom"></i>xiaott</span>
            <span><i class="el-icon-view"></i>{{blog.visitedNum}}</span>
            <!--
            <span><i class="el-icon-s-comment"></i>2000</span>
            <span style=""><img src="../../assets/icos/fullheart.png">2</span>
            -->
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  data () {
    return {
      blogs: []

    }
  },
  mounted () {
    this.loadBlogs()
  },
  methods: {
    loadBlogs(){
      if (this.$route.query.tag) {
        this.$axios.get('/tag/blogs?tag=' + this.$route.query.tag).then(resp => {
          if (resp && resp.status === 200)
            this.blogs = resp.data;
        }).catch(failresp=>{
          this.$message('请求失败，请稍后重试');
        })
      } else if (this.$route.query.keywords) {
        this.$axios.get('/keywords/blogs?keywords=' + this.$route.query.keywords).then(resp => {
          if (resp && resp.status === 200)
            this.blogs = resp.data;
        }).catch(failresp=>{
          this.$message('请求失败，请稍后重试');
        })
      } else {
        this.$axios.get('/blogs').then(resp=>{
          if(resp&&resp.data) {
            this.blogs = resp.data;
          }
        }).catch(failresp=>{
          this.$message('请求失败，请稍后重试');
        })
      }
    },
    openBlog(blog) {
      this.$router.push({
        path:'/index/blogView',
        query: {
          id: blog.id
        }
      })
    }
  }
}
</script>

<style scoped>
  #blog-list {
    width: 95%;
    margin: 15px 0 0 15px;
  }

  .el-card {
    margin: 20px;
  }
  div.article {
    display: flex;
  }

  div.article-info {
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
  }

  div.article-info p {
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: left;
  }

  div.article-cover img{
    width: 240px;
    height: 140px;
  }

  div.article-cover img:hover{
    transform: scale(1.1);
  }
  div.article-tags {
    text-align: left;
  }

  div.otherInfo {
    margin-top: 10px;
    text-align: left;
  }
  div.otherInfo span {
    margin-right: 45px;
  }
</style>
