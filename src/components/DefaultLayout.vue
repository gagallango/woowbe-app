<template>
  <main class="woowbe-app">
    <Navbar />
    <router-view :key="$route.fullPath"/>
  </main>
</template>

<script>
import Login from "./Login/Login.vue";
import Business from "./Business/Business.vue";
import Logout from "./Logout/Logout.vue";
import Navbar from "./Navbar/Navbar.vue";
export default {
  name: "DefaulLayout",
  components: {
    Login,
    Business,
    Logout,
    Navbar
  }
};
</script>

<style>
</style>