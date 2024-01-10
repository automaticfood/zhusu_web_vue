<script setup>
import tabbar from "@/components/tabbar/tabbar.vue"
import { useRoute } from "vue-router"
const route = useRoute()
</script>

<template>
  <RouterView></RouterView>
  <tabbar v-if="!route.meta.hideTabBar"></tabbar>
</template>

<style scoped></style>
