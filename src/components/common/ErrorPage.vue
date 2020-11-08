<template>
  <div class="errorPage">
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    toHome() {
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>
.errorPage {
  background: url("../../assets/images/errorPage.gif") no-repeat center;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
}

</style>
