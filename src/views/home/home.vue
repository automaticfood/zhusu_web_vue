<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <div class="city">北京</div>
      <div class="position">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}

.location {
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .city {
    padding-left: 15px;
  }
  .position {
    padding-right: 15px;
    display: flex;
    align-items: center;
    img {
      width: 26px;
    }
  }
}
</style>
