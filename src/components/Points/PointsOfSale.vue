<template>
  <div class="points">
    <div
      v-for="point of pointsOfSale.results"
      :key="point"
      class="points__container"
    >
      <router-link
        :to="{ name: 'BusinessById', params: { id: point.business.id } }"
        class="points__company-name"
      >
        <p class="points__name">{{ point.business.name }}</p>
      </router-link>
      <p class="points__address">Address: {{ point.address }}</p>
      <p class="points__description">City: {{ point.city }}</p>
    </div>
  </div>
  <Pagination
    :prev="pointsOfSale.previous"
    :next="pointsOfSale.next"
    :location="LOCATION"
  />
  <GoBack />
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import GoBack from "../GoBack/GoBack.vue";
import { useRoute } from "vue-router";
import Pagination from "../Pagination/index.vue";
const LOCATION = "business";
export default {
  components: { GoBack, Pagination },
  name: "PointsOfSale",
  setup() {
    const pointsOfSale = ref([]);
    const route = useRoute();
    onMounted(async () => {
      const currentPage =
        route.query.page != undefined ? `page=${route.query.page}` : "";
      const response = await axios.get(
        `/points_of_sales/public/?${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      pointsOfSale.value = response.data;
    });

    return {
      pointsOfSale,
      LOCATION,
    };
  },
};
</script>

<style lang="less">
.points {
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
  &__name {
    margin: 0;
    color: #222;
    font-weight: 700;
  }
  &__address {
    margin: 0;
    color: #222;
    font-weight: 400;
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
