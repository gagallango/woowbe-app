<template>
  <h3 class="offers__title">Finished offers</h3>
  <OffersComponent :data="finishedOffersData" />
  <Pagination
    :prev="finishedOffersData.previous"
    :next="finishedOffersData.next"
    :location="LOCATION"
  />
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import OffersComponent from "./OffersComponent.vue";
import Pagination from "../Pagination/index.vue";
const LOCATION = "finished";
export default {
  name: "FinishedOffers",
  components: {
    OffersComponent,
    Pagination,
  },
  setup() {
    const finishedOffersData = ref({});
    const route = useRoute();
    onMounted(async () => {
      const currentPage =
        route.query.page != undefined ? `page=${route.query.page}` : "";
      const finishedOffersResponse = await axios.get(
        `/offers/public/?${currentPage}&status=finished`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      finishedOffersData.value = finishedOffersResponse.data;
    });
    return {
      finishedOffersData,
      LOCATION,
    };
  },
};
</script>
