<template>
  <nav class="navbar">
    <router-link :to="navigationToHome">
      <img class="navbar__logo" src="@/assets/logo-woowbe.svg" />
    </router-link>
    <p class="navbar__message">A woow experience</p>
  </nav>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Navbar",
  setup() {
    const router = useRouter();

    let isLogged = ref(false);
    router.afterEach(() => {
      isLogged.value = !!localStorage.getItem("token");
    });
    const navigationToHome = computed(() =>
      isLogged.value ? "/dashboard/offers" : "/"
    );

    return {
      isLogged,
      navigationToHome
    };
  },
};
</script>

<style lang="less">
.navbar {
  align-items: center;
  height: 58px;
  display: flex;
  padding: 10px 30px;
  border-bottom: 1px solid #eae5de;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 20px 10px;
    text-align: center;
    height: 65px;
  }
  &__logo {
    width: auto;
    @media screen and (max-width: 768px) {
      width: 190px;
    }
  }
  &__login {
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    color: #222;
    text-transform: uppercase;
  }
  &__message {
    font-weight: 500;
    color: #222;
    margin: 0;
    @media screen and (max-width: 768px) {
      padding: 10px 0;
    }
  }
}
</style>
