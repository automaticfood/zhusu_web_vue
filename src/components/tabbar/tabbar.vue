<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <template #icon>
            <img v-if="currentIndex !== index" :src="getImageUrl(item.image)" alt="" />
            <img v-else :src="getImageUrl(item.imageActive)" alt="" />
          </template>
          <span>{{ item.text }}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>
<script setup>
import tabbarData from "@/assets/data/tabbar";
import { getImageUrl } from "@/utils/load_assets";
import { ref } from "vue";

const currentIndex = ref(0);
</script>

<style lang="less" scoped>
.tabbar {
  img {
    height: 26px;
  }
}
</style>
