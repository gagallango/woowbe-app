<template>
  <div class="business__card">
    <div v-if="companyDetails.square_picture" class="business__card-left-side">
      <img :src="companyDetails.square_picture" />
    </div>
    <div class="business__card-right-side">
      <h3>{{ companyDetails.name }}</h3>
      <p class="business__description-company">
        {{ companyDetails.description }}
      </p>

      <div
        v-if="companyDetails.descriptive_categories"
        class="business__descriptive-categories"
      >
        <div class="business__categories">
          <div
            v-for="item of companyDetails.descriptive_categories"
            :key="item"
            class="business__categories-list"
          >
            {{ item.name }}
          </div>
        </div>
      </div>

      <p class="business__visit">
        Visit <span>{{ companyDetails.name }}</span> website by clicking<span>
          <a :href="companyDetails.url">here</a>
        </span>
      </p>
    </div>
  </div>
  <GoBack />
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import GoBack from "../GoBack/GoBack.vue";
export default {
  name: "BusinessById",
  components: {
    GoBack,
  },
  setup() {
    const companyDetails = ref({});
    const route = useRoute();
    onMounted(() => {
      axios
        .get(`/business/public/${route.params.id}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          companyDetails.value = data;
        });
    });

    return {
      companyDetails,
    };
  },
};
</script>

<style lang="less">
.business {
  &__card {
    width: auto;
    border-radius: 10px;
    height: 430px;
    margin: 75px 30px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
      display: inherit;
      margin: 25px 0;
    }
  }
  &__card-left-side {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 10px;
    margin: 0 20px;
    display: flex;
    width: auto;
    padding: 20px;
    justify-content: center;
    img {
      width: 390px;
      border-radius: 10px;
      border: 5px solid #fff;
    }

    @media screen and (max-width: 768px) {
      width: auto;
      padding: 30px 0;
      border-radius: 10px;
      margin-bottom: 30px;
      img {
        width: 225px;
        border-radius: 10px;
      }
    }
  }
  &__visit {
    padding: 15px 0;
    display: flex;
    a {
      text-decoration: none;
      color: #222;
      font-weight: 700;
    }
    span {
      font-weight: 700;
      padding: 0 5px;
    }
    @media screen and (max-width: 768px) {
      display: initial;
    }
  }
  &__card-right-side {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 10px;
    margin: 0 20px;
    width: 45%;
    padding: 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    p {
      margin: 0;
    }
    h3 {
      font-size: 35px;
      margin: 20px 0;
    }
    @media screen and (max-width: 768px) {
      width: auto;
      padding: 15px 15px 50px;
      text-align: center;
    }
  }
  &__description-company {
    text-align: justify;
    color: #222;
  }
  &__categories {
    display: flex;
    flex-flow: wrap;
    padding-top: 10px;
  }
  &__categories-list {
    width: 116px;
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    margin: 5px 10px;
    color: #c2c2c2;
    padding: 5px 0;
    display: flex;
    justify-content: center;
  }
  &__descriptive-categories {
    display: flex;
    flex-flow: column;
    align-items: baseline;
    padding: 15px 0;
  }
}
</style>
