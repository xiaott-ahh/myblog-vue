<template>
  <div class="newestList">
    <el-card
      shadow="always"
      style="height: 220px;margin-top: 25px"
    >
      <div class="card-content">
        <span>
          <img src="../../assets/icos/hot.png" style="vertical-align: middle"/>
          最新文章
        </span>
        <el-link
          v-for="(article,i) in articles"
          :key="i"
          style="margin-top: 10px"
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
      articles: [
        {
          title: '解放军啊诶激发即挨饿经发局'
        },
        {
          title: '揭发将诶可点击后机盖杰尔夫累计额季节解'
        },
        {
          title: '解放军啊诶激发即挨饿经发局'
        },
        {
          title: '解放军啊诶激发即挨饿经发局'
        },
        {
          title: '解放军啊诶激发即挨饿经发局'
        },

      ]
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
