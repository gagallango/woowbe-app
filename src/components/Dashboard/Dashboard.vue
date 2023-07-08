<template>
  <div class="dashboard">
    <div class="dashboard__left-side">
      <Profile />
      <div class="dashboard__companies">
        Get to know the companies <br />
        that work with us
        <div class="dashboard__section">
          <router-link to="/business"> See the companies </router-link>
        </div>
      </div>
      <div class="dashboard__log-out">
        <Logout />
      </div>
    </div>
    <div class="dashboard__right-side">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Offers from "../Offers/Offers.vue";
import Profile from "../Profile/Profile.vue";
import Logout from "../Logout/Logout.vue";
export default {
  name: "Dashboard",
  components: { Offers, Profile, Logout },
  setup() {
    const router = useRouter();

    function logOut() {
      localStorage.clear();
      router.push("/");
    }
    const dashboardData = ref({});
    onMounted(async () => {
      const userResponse = await axios.get("/users/me/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dashboardData.value = userResponse.data;
    });
    return {
      dashboardData,
      logOut,
    };
  },
};
</script>

<style lang="less">
.dashboard {
  width: 100%;
  display: flex;
  height: auto;
  @media screen and (max-width: 1024px) {
    display: inherit;
  }

  &__left-side {
    width: 30%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 1024px) {
      width: 100%;
      height: 685px;
    }
  }
  &__companies {
    text-align: center;
  }
  &__right-side {
    width: 70%;
    background-color: #5893ed;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    padding: 30px 0;
    @media screen and (max-width: 1024px) {
      width: 100%;
      height: auto;
      padding: 30px 0 70px;
    }
  }

  &__section {
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    background: #fff;
    width: 300px;
    height: 40px;
    display: flex;
    margin: 20px 0 0;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    a {
      text-decoration: none;
      font-weight: 500;
      color: #222;
      &:hover {
        color: #5893ed;
      }
    }
  }
}
</style>
