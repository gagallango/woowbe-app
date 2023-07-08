<template>
  <div class="pagination">
    <div v-if="prev" @click.prevent="prevPage" :class="classByBusiness">
      prev
    </div>
    <div v-if="next" @click.prevent="nextPage" :class="classByBusiness">
      next
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { computed } from "vue";
export default {
  name: "Pagination",
  props: {
    prev: {
      type: String,
    },
    next: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  setup(props) {
    const router = useRouter();
    function getPage(url) {
      if (!url) return null;
      const searchParams = new URLSearchParams(url.substring(url.indexOf("?")));
      return searchParams.get("page");
    }

    function nextPage() {
      router.push({
        path: props.location,
        query: { page: getPage(props.next) },
      });
    }

    function prevPage() {
      router.push({
        path: props.location,
        query: { page: getPage(props.prev) },
      });
    }

    const classByBusiness = computed(() =>
      props.location === "business"
        ? "pagination__black"
        : "pagination__pag"
    );

    return {
      nextPage,
      prevPage,
      classByBusiness,
    };
  },
};
</script>

<style lang="less">
.pagination {
  display: flex;
  justify-content: center;
  cursor: pointer;
  &__pag {
    padding: 0 5px;
    color: #fff;
    font-weight: 400;
    &:hover {
      font-weight: 500;
    }
  }
  &__black {
    padding: 0 5px;
    color: #222;
    font-weight: 400;
    &:hover {
      font-weight: 500;
    }
  }
}
</style>
