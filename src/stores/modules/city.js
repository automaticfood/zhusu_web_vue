import { getCityAll } from "@/services"
import { defineStore } from "pinia"

const useCityStore = defineStore("cityStore", {
  state: () => ({
    allCitys: {}
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCitys = res
    }
  }
})

export default useCityStore