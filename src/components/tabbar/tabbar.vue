<template>
    <div class="tabbar">
        <div class="tabbar-item">
            <img src="@/assets/img/tabbar/tab_home.png" alt="">
            <span class="text">主页</span>    
        </div>
        <div class="tabbar-item">
            <img src="@/assets/img/tabbar/tab_home.png" alt="">
            <span class="text">收藏</span>  </div>
        <div class="tabbar-item">消息</div>
        <div class="tabbar-item">订单</div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
    .tabbar{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        display: flex;
        border-top: 1px solid #dcccbb;
        .tabbar-item{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>