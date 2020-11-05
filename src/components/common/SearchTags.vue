<template>
  <div class="search-tags">
    <el-card
      shadow="always"
      style="height: 220px;margin-top: 25px"
    >
      <div class="card-content">
        <span>
          <img src="../../assets/icos/tags.png" style="vertical-align: middle"/>
          按标签搜索
        </span>
        <div class="tags">
          <el-button
            type="primary"
            plain
            v-for="(tag,i) in tags"
            :key="i"
            style="margin-top: 10px"
          >{{tag}}</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SearchTags',
  data() {
    return {
      tags: [
        'spring','java','python','web','大数据'
      ]
    }
  }
}
</script>

<style scoped>
  div.card-content {
    display: flex;
    flex-wrap: wrap;
  }

  div.tags {
    margin-top: 10px;
  }
</style>
