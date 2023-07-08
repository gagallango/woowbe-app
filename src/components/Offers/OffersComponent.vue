<template>
  <div class="offers-component">
    <div
      v-for="item of data.results"
      :key="item"
      class="offers-component__container"
    >
      <router-link
        :to="{ name: 'OfferById', params: { id: item.id } }"
        class="offers-component__offer-name"
      >
        <p>{{ item.name }}</p>
      </router-link>
      <router-link
        :to="{ name: 'BusinessById', params: { id: item.business.id } }"
        class="offers-component__offer-text"
      >
        <p>
          {{ item.business.name }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "OffersComponent",
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="less">
.offers-component {
  flex-flow: wrap;
  background: #fff;
  justify-content: space-evenly;
  margin: 35px;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 800px;
  @media screen and (max-width: 1024px) {
    width: 298px;
  }
  &__container {
    border-bottom: 1px solid #f7f7f7;
    padding: 15px;

    &:last-child {
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    p {
      margin: 0;
    }
  }
  &__offer-name {
    color: #222;
    margin: 0;
    font-size: 16px;
    text-decoration: none;
    &:hover {
      color: #5893ed;
    }
    p {
      margin: 0;
      font-weight: 700;
    }
  }
  &__offer-text {
    margin: 0;
    color: #5b5b5b;
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
</style>
