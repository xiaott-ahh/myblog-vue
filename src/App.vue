<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'
import Home from './components/home/Home'

export default {
  name: 'app',
  components: {
    Home,
    Footer,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
