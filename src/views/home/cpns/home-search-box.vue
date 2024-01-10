<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">北京</div>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (err) => {
      console.log(err);
    }
  );
};
const cityClick = () => {
  console.log("cityClick");
  router.push("/city")
};
</script>

<style lang="less" scoped>
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
}</style>
