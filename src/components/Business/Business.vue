<template>
  <div class="business">
    <div
      v-for="business of businessData.results"
      :key="business"
      class="business__container"
    >
      <router-link
        :to="{ name: 'BusinessById', params: { id: business.id } }"
        class="business__company-name"
      >
        <p>{{ business.name }}</p>
      </router-link>
      <p class="business__description">{{ business.description }}</p>
    </div>
  </div>
  <Pagination
      :prev="businessData.previous"
      :next="businessData.next"
      :location="LOCATION"
    />
  <GoBack />
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import {  useRoute } from "vue-router";
import GoBack from "../GoBack/GoBack.vue";
import Pagination from '../Pagination/index.vue'
const LOCATION = 'business'
export default {
  components: { GoBack, Pagination },
  name: "Business",
  setup() {
    const businessData = ref([]);
    const route = useRoute();
    onMounted(async () => {
      const currentPage =
        route.query.page != undefined ? `page=${route.query.page}` : "";
      const response = await axios.get(`/business/public/?${currentPage}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      businessData.value = response.data;
    });
    return {
      businessData,
      LOCATION
    };
  },
};
</script>

<style lang="less">
.business {
  flex-flow: wrap;
  background: #fff;
  justify-content: space-evenly;
  margin: 35px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  &__container {
    border-bottom: 1px solid #f7f7f7;
    padding: 15px;

    &:last-child {
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
  &__description {
    margin: 0;
    color: #5b5b5b;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__company-name {
    color: #5b5b5b;
    margin: 0;
    font-size: 16px;
    text-decoration: none;

    p {
      margin: 0;
      font-weight: 700;
      color: #222;
      &:hover {
        color: #5893ed;
      }
    }
  }
}
</style>
