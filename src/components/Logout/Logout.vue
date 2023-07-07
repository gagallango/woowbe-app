<template>
  <p class="log-out">
    Are you leaving?
    <span @click="logOut" class="log-out__click"> Log out </span>
  </p>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "Logout",
  setup() {
    const router = useRouter();
    function logOut() {
      localStorage.clear();
      router.push("/");
    }

    return {
      logOut,
    };
  },
};
</script>

<style lang="less">
.log-out {
  position: fixed;
  bottom: 0;
  border-radius: 10px;
  left: 0;
  padding: 10px 10px;
  margin: 0 20px 10px;
  background: #e5e5e5;
  font-size: 12px;
 
  &__click {
    font-weight: 700;
     cursor: pointer;
  }
}
</style>
