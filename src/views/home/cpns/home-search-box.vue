<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <div class="item date-range">
      <div class="start">
        <div class="date">
          <div class="tip">入住</div>
          <div class="time">{{ startDate }}</div>
        </div>
      </div>
      <div class="stay">共一晚</div>
      <div class="end">
        <div class="date">
          <div class="tip">离店</div>
          <div class="time">{{ endDate }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { formateMonthDay } from "@/utils/format_date"

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
const startDate = ref(formateMonthDay(nowDate))
const newDate = nowDate.setDate(nowDate.getDate() + 1)
const endDate = ref(formateMonthDay(newDate))


</script>

<style lang="less" scoped>
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
</style>
