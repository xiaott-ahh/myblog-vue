<template>
  <div id="home">
    <el-container>
      <el-aside width="72%">
        <router-view/>
      </el-aside>
      <el-main>
        <el-row>
          <about-me></about-me>
        </el-row>
        <el-row>
          <div class="newestArticle">
            <NewestBlog></NewestBlog>
          </div>
        </el-row>
        <el-row>
          <div class="tags">
            <search-tags></search-tags>
          </div>
        </el-row>
      </el-main>
    </el-container>
    <footer></footer>
  </div>
</template>

<script>
import NavBar from '../common/NavBar'
import BlogList from '../blogs/BlogList'
import Footer from '../common/Footer'
import AboutMe from '../common/AboutMe'
import NewestBlog from '../common/NewestBlog'
import SearchTags from '../common/SearchTags'
export default {
  name: 'Home',
  components: {SearchTags, NewestBlog, AboutMe, Footer, BlogList, NavBar}
}
</script>

<style scoped>

</style>
