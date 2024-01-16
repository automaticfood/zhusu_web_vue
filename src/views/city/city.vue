<template>
  <div class="city">
    <form action="/">
      <van-search v-model="searchValue" show-action placeholder="请输入搜索关键词" @cancel="onCancel" shape="round" />
    </form>
    <van-tabs v-model:active="activeTab" color="#ff9854">
      <template v-for="(value, key, index ) in allCitys.data">
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city"
import { storeToRefs } from "pinia";

const router = useRouter();
const searchValue = ref("");

const onCancel = () => {
  router.back();
};

const activeTab = ref("");

const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCitys } = storeToRefs(cityStore) 
</script>

<style lang="less" scoped></style>
