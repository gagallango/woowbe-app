<template>
  <div class="offers__title">See all the offers!</div>
  <div class="offers">
    <div
      v-for="result of offersData.results"
      :key="result"
      class="offers__container"
    >
      <router-link
        :to="{ name: 'OfferById', params: { id: result.id } }"
        class="offers__offer-name"
      >
        <p>{{ result.name }}</p>
      </router-link>
      <router-link
        :to="{ name: 'BusinessById', params: { id: result.business.id } }"
        class="offers__offer-text"
      >
        <p>
          {{ result.business.name }}
        </p>
      </router-link>
    </div>
  </div>

  <div class="offers__pagination">
    <div
      v-if="offersData.previous"
      @click.prevent="prevPage"
      class="offers__prev"
    >
      prev
    </div>
    <div v-if="offersData.next" @click.prevent="nextPage" class="offers__next">
      next
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import Card from "../Card/Card.vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Offers",
  components: { Card },
  setup() {
    const offersData = ref({});
    const router = useRouter();
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

    function getPage(url) {
      if (!url) return null;
      const searchParams = new URLSearchParams(url.substring(url.indexOf("?")));
      return searchParams.get("page");
    }

    function nextPage() {
      router.push({
        path: "offers",
        query: { page: getPage(offersData.value.next) },
      });
    }

    function prevPage() {
      router.push({
        path: "offers",
        query: { page: getPage(offersData.value.previous) },
      });
    }
    
    return {
      offersData,
      nextPage,
      prevPage
    };
  },
};
</script>

<style lang="less">
.offers {
  flex-flow: wrap;
  background: #fff;
  justify-content: space-evenly;
  margin: 35px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 800px;
  @media screen and (max-width: 1024px) {
    width: 298px;
  }
  &__container {
    border-bottom: 1px solid #f7f7f7;
    padding: 15px;

    &:last-child {
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    p {
      margin: 0;
    }
  }
  &__title {
    text-align: center;
    font-size: 30px;
    color: #fff;
        font-weight: 500;
  }
  &__offer-name {
    color: #222;
    margin: 0;
    font-size: 16px;
    text-decoration: none;
    &:hover {
      color: #5893ed;
    }
    p {
      margin: 0;
      font-weight: 700;
    }
  }
  &__offer-text {
    margin: 0;
    color: #5b5b5b;
    text-decoration: none;
    p {
      margin: 0;
    }
    span {
      font-weight: 700;
      color: #222;
      
    }
  }

  &__pagination {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  &__next,
  &__prev {
    padding: 0 5px;
    color: #fff;
        font-weight: 500;
  }
}
</style>
