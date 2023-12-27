<template>
    <div class="tabbar">
        <template v-for="(item, index) in tabbarData">
            <div @click="itemClick(index, item)" class="tabbar-item" :class="{ active: currentIndex === index }">
                <img v-if="currentIndex !== index" :src="getImageUrl(item.image)" alt="">
                <img v-else :src="getImageUrl(item.imageActive)" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template>
    </div>
</template>
<script setup>
import tabbarData from "@/assets/data/tabbar"
import { getImageUrl } from "@/utils/load_assets"
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentIndex = ref(0)
const itemClick = (index, item) => {
    currentIndex.value = index
    router.push(item.path);
}
</script>

<style lang="less" scoped>
.tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    border-top: 1px solid #dcccbb;

    .tabbar-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &.active {
            color: var(--primary-color);
        }

        .text {
            font-size: 12px;
        }

        img {
            width: 36px;
        }
    }
}
</style>
