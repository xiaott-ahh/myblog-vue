<template>
  <div id="app">
    <nav-bar></nav-bar>
    <home></home>
  </div>
</template>

<script>
import Home from './components/home/Home'
import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'

export default {
  name: 'app',
  components: {
    Footer,
    NavBar,
    Home,
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
