<template>
  <div class="newestList">
    <el-card
      shadow="always"
      style="height: 220px;margin-top: 25px"
    >
      <div class="card-content">
        <span style="width: 100%;text-align: left">
          <img src="../../assets/icos/hot.png" style="vertical-align: middle"/>
          最新文章
        </span>
        <el-link
          v-for="(article,i) in articles"
          :key="i"
          style="margin-top: 10px;"
          @click="openBlog(article)"
        >{{article.title}}</el-link>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'NewestBlog',
  data() {
    return {
      articles: []
    }
  },
  mounted () {
    this.loadArticles();
  },
  methods: {
    loadArticles() {
      this.$axios.get('/newest/blogs').then(resp => {
        if (resp && resp.status === 200) {
          this.articles = resp.data;
        }
      })
    },
    openBlog(article) {
      this.$router.push({
        path:'/index/blogView',
        query: {
          id: article.id
        }
      })
    }
  }
}
</script>

<style scoped>
  .card-content {
    display: flex;
    flex-wrap: wrap;
  }
</style>
