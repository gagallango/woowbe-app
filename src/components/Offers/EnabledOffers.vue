<template>
  <h3 class="offers__title">Enabled offers</h3>
  <OffersComponent :data="enabledOffersData" />
  <Pagination
    :prev="enabledOffersData.previous"
    :next="enabledOffersData.next"
    :location="LOCATION"
  />
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import OffersComponent from "./OffersComponent.vue";
import Pagination from "../Pagination/index.vue";
const LOCATION = "enabled";
export default {
  name: "OffersByStatus",
  components: {
    OffersComponent,
    Pagination,
  },
  setup() {
    const enabledOffersData = ref({});
    const route = useRoute();
    const location = "enabled";
    onMounted(async () => {
      const currentPage =
        route.query.page != undefined ? `page=${route.query.page}` : "";

      const enabledOffersResponse = await axios.get(
        `/offers/public/?enabled=true&${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      enabledOffersData.value = enabledOffersResponse.data;
    });
    return {
      enabledOffersData,
      LOCATION,
    };
  },
};
</script>
