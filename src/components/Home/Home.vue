<template>
  <div class="home">
    <div class="home__center-sec">
      <img class="home__main-image" src="@/assets/home.svg" />
      <h2 class="home__title">Be part of the woowbe movement!</h2>
      <router-link to="/signup" class="home__signup"> Come join us!</router-link>
      <p class="home__text">
        Forget about coupons, QR codes or recording your purchases. <br />
        As easy as paying with your usual card.
      </p>
      <p class="home__text-question">Do you have an account?</p>
      <router-link v-if="!isLogged" class="home__login" to="/login"
      >Login</router-link
    >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    let isLogged = ref(false);

    return {
      isLogged
    }
  }
};
</script>

<style lang="less">
.home {
  background: #5893ed;
  height: 100vh;
   @media screen and (max-width: 1024px) {
      width: 100%;
    }
  &__center-sec {
    padding: 5% 10%;
    text-align: center;
  }
  &__title {
    margin: 0;
    color: #fff;
    font-size: 45px;
    font-weight: 700;
    margin-bottom: 15px;
     @media screen and (max-width: 1024px) {
      font-size: 30px;
    }
  }
  &__text {
    color: #fff;
    font-size: 20px;
     @media screen and (max-width: 1024px) {
      font-size: 15px;
    }
  }

  &__text-question {
    color: #fff;
    font-size: 20px;
    margin:0;
     @media screen and (max-width: 1024px) {
      font-size: 15px;
    }
  }
  &__main-image {
    width: 320px;
     @media screen and (max-width: 1024px) {
      width: auto;
  
    }
  }
  &__login {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
    margin: 0;
    &:hover {
      font-weight: 700;
    }
    @media screen and (max-width: 1024px) {
      font-size: 15px;
    }
  }
  &__signup {
    color: #fff;
    font-size: 25px;
    font-weight: 400;
    text-decoration: none;
    &:hover {
      font-weight: 700;
    }
    @media screen and (max-width: 1024px) {
      font-size: 15px;
    }
  }
}
</style>
