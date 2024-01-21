<template>
  <div class="city-group">
    <van-index-bar>
      <template v-for="cityGroups in currentGroup?.cities">
        <van-index-anchor :index="cityGroups.group" />
        <template v-for="city in cityGroups.cities">
          <van-cell :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
defineProps({
  currentGroup: {
    type: Object,
    default: () => { }
  }
})
</script>

<style lang="scss" scoped></style>