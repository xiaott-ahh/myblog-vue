<template>
  <div class="time-line">
    <el-card
      shadow="always"
      style="width: 95%;margin:15px;"
    >
      <div class="block">
        <div class="radio">
          排序：
          <el-radio-group v-model="reverse">
            <el-radio :label="true">倒序</el-radio>
            <el-radio :label="false">正序</el-radio>
          </el-radio-group>
        </div>

        <el-timeline :reverse="reverse">
          <el-timeline-item
            v-for="(blog, index) in blogs"
            :key="index"
            color="#409EFF"
            :timestamp="blog.createdAt">
            <div style="display: flex">
              <el-link :underline="false" @click="openBlog(blog)">{{blog.title}}</el-link>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
  data(){
    return {
      reverse: false,
      blogs: []
    };
  },
  mounted () {
    this.loadBlogs();
  },
  methods: {
    loadBlogs() {
      this.$axios.get('/getAllInfo/blogs').then(resp => {
        if (resp && resp.status === 200) {
          this.blogs = resp.data;
        } else {
          this.$message.info('请求失败，请稍后重试')
        }
      }).catch(() => {
        this.$message.error('请求失败,请稍后重试')
      })
    },
    openBlog(blog) {
      this.$emit('handleBlogSelected',blog)
    }
  }
}
</script>

<style scoped>
  div.block {
    display: flex;
    flex-wrap: wrap;
  }

  div.radio {
    width: 100%;
    text-align: left;
    margin-bottom: 30px;
  }
</style>
