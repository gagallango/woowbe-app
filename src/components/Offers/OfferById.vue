<template>
  <div class="offer__card">
    <div class="offer__left-side">
      <div class="offer__left-side-image">
        <img src="@/assets/offer.svg" />
      </div>
    </div>
    <div class="offer__right-side">
      <h3>{{ offerDetails.name }}</h3>
      <div class="offer__owner">
        <p>
          By
          <router-link
            :to="{
              name: 'BusinessById',
              params: { id: offerDetailsBusiness.id },
            }"
            class="offer__offer-text"
          >
            <span>{{ offerDetailsBusiness.name }}</span>
          </router-link>
        </p>
      </div>

      <div class="offer__form">
        <div class="type-a">
          <label for="kind">Kind</label>
          <input type="text" :placeholder="offerDetails.kind" disabled/>
        </div>
        <div class="type-a">
          <label for="reward">Reward</label>
          <input type="text" :placeholder="offerDetails.reward" disabled/>
        </div>
        <div class="type-a">
          <label for="minimum_purchase_amount">Minimum purchase amount</label>
          <input
            type="text"
            :placeholder="offerDetails.minimum_purchase_amount"
            disabled
          />
        </div>
        <div class="type-a">
          <label for="budget">Budget</label>
          <input type="text" :placeholder="offerDetails.budget" disabled/>
        </div>

        <div class="type-a">
          <label for="budget">Start date</label>
          <input type="text" :placeholder="offerDetails.start_date" disabled/>
        </div>

        <div class="type-a">
          <label for="budget">Status</label>
          <input type="text" :placeholder="offerDetails.status" disabled/>
        </div>
      </div>
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
  name: "OfferById",
  components: {
    GoBack,
  },
  setup() {
    const offerDetails = ref({});
    const offerDetailsBusiness = ref({});
    const route = useRoute();
    onMounted(() => {
      axios
        .get(`/offers/public/${route.params.id}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(({ data }) => {
          offerDetails.value = data;
          offerDetailsBusiness.value = data.business;
        });
    });

    return {
      offerDetails,
      offerDetailsBusiness,
    };
  },
};
</script>

<style lang="less">
.offer {
  &__card {
    width: 815px;
    border-radius: 10px;
    height: 430px;
    display: flex;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    margin: 75px auto;
    @media screen and (max-width: 768px) {
      display: inline;
    }
  }
  &__left-side {
    border-radius: 10px 0 0 10px;
    width: 30%;
    background: #5893ed;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 300px;
      border-radius: 10px 10px 0 0;
    }
  }
  &__right-side {
    width: 70%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    @media screen and (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
    }
    input {
      height: 25px;
      width: 166px;
      border: 1px solid #ccc;
      border-radius: 3px;
      padding-left: 5px;
    }
    h3 {
      padding-left: 20px;
      font-size: 35px;
      margin: 20px 0 5px;
      @media screen and (max-width: 768px) {
        padding-left: 0px;
      }
    }
    label {
      color: #ccc;
      font-size: 14px;
    }
  }
  &__owner {
    padding-left: 20px;
    p {
      margin: 0 0 25px;
    }
  }
  &__form {
    display: flex;
    flex-flow: wrap;
    padding: 0 20px;
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }
  &__offer-text {
    margin: 0;
    color: #ccc;
    text-decoration: none;
    p {
      margin: 0;
    }
    span {
      font-weight: 700;
      color: #222;
    }
  }
}

.type-a {
  width: 260px;
  display: flex;
  flex-flow: column;
  align-content: flex-end;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    width: 260px;
    align-items: baseline;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-bottom: 20px;
  }
}
</style>
