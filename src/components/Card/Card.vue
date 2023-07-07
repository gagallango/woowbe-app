<template>
  <div class="card">
    <router-link
      :to="{ name: 'OfferById', params: { id: offer.id } }"
      class="card__offer-name"
    >
      <p>{{ offer.name }}</p>
    </router-link>
    <router-link
      :to="{ name: 'BusinessById', params: { id: offer.business.id } }"
      class="card__offer-text"
    >
      <p>
        by <span>{{ offer.business.name }}</span>
      </p>
    </router-link>
    <p class="card__offer-text">Status: {{ offer.status }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    offer: {
      type: Object,
    },
  },
  setup(props) {
    console.log(props.offer);
  },
};
</script>

<style lang="less">
.card {
  padding: 10px 10px;
  width: 350px;
  margin: 10px 0;
  background: #fff;
  height: 70px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 255px;
    margin: 10px 15px;
  }

  &__offer-name {
    color: #222;
    margin: 0;
    font-size: 16px;
    text-decoration: none;
    p {
      margin: 0;
      font-weight: 700;
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
</style>
