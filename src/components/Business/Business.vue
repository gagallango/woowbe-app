<template>
  <div class="business">
    <div
      v-for="result of businessData.results"
      :key="result"
      class="business__container"
    >
      <router-link
        :to="{ name: 'BusinessById', params: { id: result.id } }"
        class="business__company-name"
      >
        <p>{{ result.name }}</p>
      </router-link>
      <p class="business__description">{{ result.description }}</p>
    </div>
  </div>
  <div class="business__pagination">
    <div
      v-if="businessData.previous"
      @click.prevent="prevPage"
      class="business__prev"
    >
      prev
    </div>
    <div
      v-if="businessData.next"
      @click.prevent="nextPage"
      class="business__next"
    >
      next
    </div>
  </div>
  <GoBack />
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import GoBack from "../GoBack/GoBack.vue";
export default {
  components: { GoBack },
  name: "Business",
  setup() {
    const businessData = ref([]);
    const router = useRouter();
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

    function getPage(url) {
      if (!url) return null;
      const searchParams = new URLSearchParams(url.substring(url.indexOf("?")));
      return searchParams.get("page");
    }

    function nextPage() {
      router.push({
        path: "business",
        query: { page: getPage(businessData.value.next) },
      });
    }

    function prevPage() {
      router.push({
        path: "business",
        query: { page: getPage(businessData.value.previous) },
      });
    }

    return {
      businessData,
      nextPage,
      prevPage,
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
  &__pagination {
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: 5px 0 20px;
  }
  &__next,
  &__prev {
    padding: 0 5px;
    color: #222;
    font-weight: 500;
  }
}
</style>
