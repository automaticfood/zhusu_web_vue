<template>
  <div class="city">
    <div class="head">
      <form action="/">
        <van-search v-model="searchValue" show-action placeholder="请输入搜索关键词" @cancel="onCancel" shape="round" />
      </form>
      <van-tabs v-model:active="activeTab" color="#ff9854">
        <template v-for="(value, key, index ) in allCitys.data">
          <van-tab :name="key" :title="value.title"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="body">
      {{ currentTab }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city"
import { storeToRefs } from "pinia";

const router = useRouter();
const searchValue = ref("");

const onCancel = () => {
  router.push('/home');
};

const activeTab = ref("");

const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCitys } = storeToRefs(cityStore)

const currentTab = computed(() => allCitys.value.data[activeTab.value])
console.log();
</script>

<style lang="less" scoped>
.city {
  overflow: hidden;

  .head {
    position: fixed;
    width: 100%;
  }

  .body {
    height: calc(100vh - 98px);
    margin-top: 98px;
    overflow-y: auto;
  }
}
</style>
