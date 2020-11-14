<template>
  <div id="home">
    <nav-bar @handleSearch="handleSearch" @handleTagSelected="listByTag"></nav-bar>
    <el-container>
      <el-aside width="72%" style="padding: 5px;margin-bottom: 10px">
        <router-view :searchVal="searchVal" @handleBlogSelected="viewBlog"/>
      </el-aside>
      <el-main>
        <el-row>
          <about-me></about-me>
        </el-row>
        <el-row>
          <div class="newestArticle">
            <NewestBlog @handleTitleSelected="getByTitle" ref="newestBlog"></NewestBlog>
          </div>
        </el-row>
        <el-row>
          <div class="tags">
            <search-tags @handleSearchTag="listByTag" ref="searchTags"></search-tags>
          </div>
        </el-row>
      </el-main>
    </el-container>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '../common/NavBar'
import BlogList from '../blogs/BlogList'
import Footer from '../common/Footer'
import AboutMe from '../common/AboutMe'
import NewestBlog from '../common/NewestBlog'
import SearchTags from '../common/SearchTags'
import BlogView from '../blogs/BlogView'
export default {
  name: 'Home',
  components: {BlogView, SearchTags, NewestBlog, AboutMe, Footer, BlogList, NavBar},
  data() {
    return {
      searchVal:'',
      selectedBlog: ''
    }
  },
  methods: {
    getByTitle (val) {
      const id = val.id;
      this.$router.push({
        path: '/index/blogView',
        query: {
          id: id
        }
      })
    },
    listByTag (val) {
      console.log('listByTag:' + val)
      this.$router.push({
        path: '/index/blogsOfTag',
        query: {
          tag: val
        }
      })
    },
    viewBlog (val) {
      console.log('跳转到Home viewBlog,val=' + val)
      //this.selectedBlog = val
      this.$router.push({
        path: '/index/blogView',
        query: {
          id: val.id
        }
      })
    },
    handleSearch(val) {
      this.$router.push({
        path: '/index/blogsOfKey',
        query: {
          keywords: val
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
