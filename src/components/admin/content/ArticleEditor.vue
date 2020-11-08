<template>
  <div>
    <el-row style="margin: 18px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin/xiaoTT/dashboard'}">管理中心</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/admin/xiaoTT/blogManagement'}">文章管理</el-breadcrumb-item>
        <el-breadcrumb-item>编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <el-input
        v-model="article.title"
        style="margin: 10px 0px;font-size: 18px;"
        placeholder="请输入标题"></el-input>
    </el-row>
    <el-row style="height: calc(100vh - 140px);">
      <mavon-editor
        v-model="article.blogMd"
        style="height: 100%;"
        ref=md
        @save="saveArticles"
        @imgAdd="imgAdd"
        @imgDel="imgDel"
        fontSize="16px">
        <button type="button" class="op-icon el-icon-document" :title="'摘要/封面/分类'" slot="left-toolbar-after"
                @click="dialogVisible = true"></button>
      </mavon-editor>
      <el-dialog
        :visible.sync="dialogVisible"
        width="50%">
        <el-divider content-position="left">摘要</el-divider>
        <el-input
          type="textarea"
          v-model="article.abs"
          rows="4"
          maxlength="255"
          show-word-limit></el-input>
        <el-divider content-position="left">封面</el-divider>
        <div style="margin-top: 20px">
          <el-input v-model="article.cover" autocomplete="off" placeholder="图片 URL"></el-input>
          <img-upload @onUpload="uploadImg" ref="imgUpload" style="margin-top: 5px"></img-upload>
        </div><el-divider content-position="left">分类(以‘/'为分隔符)</el-divider>
        <el-input v-model="article.tags" autocomplete="off" placeholder="分类"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-row>
  </div>
</template>

<script>
import ImgUpload from './ImgUpload'

export default {
  name: 'Editor',
  components: {ImgUpload},
  data () {
    return {
      article: {},
      dialogVisible: false
    }
  },
  mounted () {
    if (this.$route.params.article) {
      this.article = this.$route.params.article
    }
  },
  methods: {
    saveArticles (value, render) {
      // value 是 md，render 是 html
      this.$confirm('是否保存并发布文章?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
          this.article.createdAt = this.formatDate(new Date().getTime());
          console.log('创建时间:' + this.article.createdAt)
          this.$axios
            .post('/blogs', {
              id: this.article.id,
              title: this.article.title,
              blogMd: value,
              blogHtml: render,
              abs: this.article.abs,
              cover: this.article.cover,
              createdAt: this.article.createdAt,
              tags: this.article.tags || '其他'
            }).then(resp => {
            if (resp && resp.status === 200) {
              this.$message({
                type: 'info',
                message: resp.data.message
              })
            }
          })
        }
      ).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消发布'
        })
      })
    },
    uploadImg () {
      this.article.cover = this.$refs.imgUpload.url
    },
    imgAdd(pos,$file) {
      let formData = new FormData();
      formData.append('file',$file);
      this.$axios.post('/admin/blog/images',formData).then(resp => {
        if (resp && resp.status === 200) {
          console.log('图片url' + resp.data);
          this.$refs.md.$img2Url(pos,resp.data);
        }else {
          this.$message.error("图片上传失败");
        }
      })
    },
    imgDel(pos) {
      console.log(pos[0])
      this.$axios.post('/admin/blog/images/delete',{
        url: pos[0]
      }).then(
        (resp) => {
          this.$alert(resp.data.message);
        }
      ).catch(()=>{
        this.$message.error("请求失败");
      })
    },
    formatDate(inputTime) {
      const date = new Date(inputTime)
      const y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m;
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h;
      let minute = date.getMinutes()
      let second = date.getSeconds()
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
    }
  }
}
</script>

<style scoped>

</style>
