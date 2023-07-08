<template>
  <div class="offers">
    <div class="offers__title">See all the offers!</div>
    <div class="offers__filter">
      <router-link to="offers/finished" class="offers__filter-link"
        >finished</router-link
      >
      <router-link to="offers/enabled" class="offers__filter-link"
        >enabled</router-link
      >
    </div>
    <OffersComponent :data="offersData" />
    <Pagination
      :prev="offersData.previous"
      :next="offersData.next"
      :location="LOCATION"
    />
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import OffersComponent from "./OffersComponent.vue";
import Pagination from "../Pagination/index.vue";
const LOCATION = 'offers'
export default {
  name: "Offers",
  components: {
    OffersComponent,
    Pagination,
  },
  setup() {
    const offersData = ref({});
    const route = useRoute();
    onMounted(async () => {
      const currentPage =
        route.query.page != undefined ? `page=${route.query.page}` : "";
      const offersResponse = await axios.get(`/offers/public/?${currentPage}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      offersData.value = offersResponse.data;
    });
    return {
      offersData,
      LOCATION
    };
  },
};
</script>

<style lang="less">
.offers {
  &__title {
    text-align: center;
    font-size: 30px;
    color: #fff;
    font-weight: 500;
  }
  &__filter {
    display: flex;
    justify-content: center;
  }
  &__filter-link {
    text-decoration: none;
    color: #fff;
    font-weight: 400;
    padding: 0 5px;
    text-transform: uppercase;
    &:hover {
      font-weight: 700;
    }
  }
}
</style>
