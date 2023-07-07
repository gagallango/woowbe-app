<template>
  <div class="dashboard__user-information">
    <div class="dashboard__user-image">
      <img src="@/assets/user-dashboard.svg" />
    </div>
    <h1>Welcome back!</h1>
    <p>Name: {{ dashboardData.first_name }}</p>
    <p>Last name: {{ dashboardData.last_name }}</p>
    <p>Email: {{ dashboardData.email }}</p>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  name: "Profile",
   setup() {
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
    };
  },
};
</script>

<style lang="less">
.dashboard {
  &__user-information {
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    padding: 40px;
  }
}

</style>

