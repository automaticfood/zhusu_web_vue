<template>
  <div class="city">
    <form action="/">
      <van-search
        v-model="searchValue"
        show-action
        placeholder="请输入搜索关键词"
        @cancel="onCancel"
        shape="round"
      />
    </form>
    <van-tabs v-model:active="activeTab" color="#ff9854">
      <van-tab title="标签 1"></van-tab>
      <van-tab title="标签 2"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const searchValue = ref("");

const onCancel = () => {
  router.back();
};

const activeTab = ref("");
</script>

<style lang="less" scoped></style>
