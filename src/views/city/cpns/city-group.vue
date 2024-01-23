<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hot">
        <template v-for="city in currentGroup.hotCities">
          <div @click="cityClick(city)" class="city">{{ city.cityName }}</div>
        </template>
      </div>
      <template v-for=" cityGroups  in  currentGroup?.cities ">
        <van-index-anchor :index="cityGroups.group" />
        <template v-for="city in cityGroups.cities">
          <van-cell @click="cityClick(city)" :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import router from '@/router';
import { computed } from 'vue';
import useCityStore from "@/stores/modules/city"
import { storeToRefs } from 'pinia';

const props = defineProps({
  currentGroup: {
    type: Object,
    default: () => { }
  }
})

const indexList = computed(() => {
  const list = props.currentGroup.cities.map(item => item.group)
  list.unshift("#");
  return list;
})

const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore)
const cityClick = (city) => {
  currentCity.value = city
  router.back()
}
</script>

<style lang="less" scoped>
.hot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 20px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 10px 0;
  }
}
</style>