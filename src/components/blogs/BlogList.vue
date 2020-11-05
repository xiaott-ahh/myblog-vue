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
          <el-link :underline="false" @click="openBlog(blog)" style="font-size: 20px;font-weight: bold;display: flex">{{blog.title}}</el-link>
          <p>{{blog.abs}}</p>
          <div class="article-tags">
            <el-tag
              style="margin: 3px"
              :key="category.id"
              v-for="category in blog.categories"
            >
              {{category.type}}
            </el-tag>
          </div>
          <div class="otherInfo">
            <span><i class="el-icon-time"></i>2020-10-3</span>
            <span><i class="el-icon-s-custom"></i>xiaott</span>
            <span><i class="el-icon-view"></i>2000</span>
            <span><i class="el-icon-s-comment"></i>2000</span>
            <span style=""><img src="../../assets/icos/fullheart.png">2</span>
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
      blogs: [
        {
          title: 'SpringBoot到底是个啥?',
          cover: require('../../assets/images/test.png'),
          abs: '一文搞懂SSM',
          categories: [
            {
              id: 0,
              type : 'springboot'
            },
            {
              id: 1,
              type : 'java'
            },
            {
              id: 2,
              type : 'web'
            },
          ]
        },
        {
          title: 'SpringBoot到底是个啥?',
          cover: require('../../assets/images/test.png'),
          abs: '一文搞懂SSM'
        },
        {
          title: 'SpringBoot到底是个啥?',
          cover: require('../../assets/images/test.png'),
          abs: '一文搞懂SSM'
        },
        {
          title: 'SpringBoot到底是个啥?',
          cover: require('../../assets/images/test.png'),
          abs: '一文搞懂SSM'
        },
        {
          title: 'SpringBoot到底是个啥?',
          cover: require('../../assets/images/test.png'),
          abs: '一文搞懂SSM'
        }
      ]
    }
  },
  mounted () {
    this.loadBlogs()
  },
  methods: {
    loadBlogs(){

    },
    openBlog(blog) {
      this.$router.push({
        path:'/blogview',
        query: {
          blog:blog
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
    flex-direction: column;
    justify-content: flex-start;
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
