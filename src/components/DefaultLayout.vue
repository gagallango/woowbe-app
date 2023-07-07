<template>
  <main class="woowbe">
    <Navbar />
    <router-view :key="$route.fullPath"/>
  </main>
</template>

<script>
import Navbar from "./Navbar/Navbar.vue";
export default {
  name: "DefaulLayout",
  components: {
    Navbar
  }
};
</script>

<style lang="less">
.woowbe {
  font-family: "Roboto", sans-serif;
  height: 100vh;
  margin: 0;
}
</style>