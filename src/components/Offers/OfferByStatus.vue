<template>
  <div>hey</div>
</template>

<script>
import { computed, onMounted} from "vue";
import store from "../../store";
import { useRoute } from 'vue-router';
export default {
  name: "OfferByStatus",
  setup() {
    console.log(store.state)
    const route = useRoute()
    const test = computed(() => store.state.offersByStatus);
    console.log(test.value);

    onMounted(() => {
        store.dispatch('searchOffersByStatus', route.params.status)
    })
    return {
      test,
    };
  },
};
</script>

<style>
</style>