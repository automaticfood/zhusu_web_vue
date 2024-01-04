<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue"
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
