<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <div class="item date-range" @click="showCalendar=true">
      <div class="start">
        <div class="date">
          <div class="tip">入住</div>
          <div class="time">{{ startDate }}</div>
        </div>
      </div>
      <div class="stay">共{{stayTime}}晚</div>
      <div class="end">
        <div class="date">
          <div class="tip">离店</div>
          <div class="time">{{ endDate }}</div>
        </div>
      </div>
    </div>

    <van-calendar 
      color="#ff6954" 
      v-model:show="showCalendar" 
      type="range" 
      :round="false"
      @confirm="onConfirm"
      :show-confirm="false"
    />
    <div class="item price-counter">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="item keyword">关键字/位置/民宿名</div>
    <div class="hot-suggest"></div>
  </div>
</template>

<script setup>
import router from "@/router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { formateMonthDay,getDiffDays } from "@/utils/format_date"

const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (err) => {
      console.log(err);
    }
  );
};
const cityClick = () => {
  router.push("/city");
};

const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

const nowDate = new Date()
const newDate = new Date().setDate(nowDate.getDate() + 1)

const startDate = ref(formateMonthDay(nowDate))
const endDate = ref(formateMonthDay(newDate))
const stayTime = ref(getDiffDays(nowDate,newDate))

const showCalendar = ref(false)
const onConfirm = (value) => {
  startDate.value = formateMonthDay(value[0])
  endDate.value = formateMonthDay(value[1])
  showCalendar.value = false

  stayTime.value = getDiffDays(value[0],value[1])
}


</script>

<style lang="less" scoped>
.search-box{
  --van-calendar-popup-height: 100%;
}
.location {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  .city {
    flex: 1;
  }

  .position {
    display: flex;
    align-items: center;

    img {
      width: 26px;
    }
  }
}

.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #999;

  .start {
    flex: 2;
    display: flex;
    height: 44px;
    align-items: center;
    justify-content: space-between;
  }

  .stay {
    flex: 1;
    margin-right: 40px;
    display: flex;
    justify-content: center;
    height: 44px;
    line-height: 44px;
  }

  .end {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 30%;
    padding-left: 20px;
    height: 44px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}
.price-counter{
  height: 44px;
  .start{
    border-right: 1px solid #f8f9f9;
  }
}
.keyword{
  height: 44px;
}
</style>
