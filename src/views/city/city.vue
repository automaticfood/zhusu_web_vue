<template>
  <div class="city">
    <div class="head">
      <form action="/">
        <van-search v-model="searchValue" show-action placeholder="请输入搜索关键词" @cancel="onCancel" shape="round" />
      </form>
      <van-tabs v-model:active="activeTab" color="#ff9854">
        <template v-for="(value, key, index) in allCities">
          <van-tab :name="key" :title="value.title"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key) in allCities">
        <CityGroup v-show="activeTab == key" :currentGroup="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";

import CityGroup from "./cpns/city-group.vue"

const router = useRouter();
const searchValue = ref("");

const onCancel = () => {
  router.push("/home");
};

const activeTab = ref("");

const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);

const currentGroup = computed(() => allCities.value[activeTab.value]);
</script>

<style lang="less" scoped>
.city {
  overflow: hidden;

  .head {
    position: fixed;
    width: 100%;
  }

  .content {
    height: calc(100vh - 98px);
    margin-top: 98px;
    overflow-y: auto;
  }
}
</style>
