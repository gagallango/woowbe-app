<template>
  <div class="signup">
    <img src="@/assets/shop.svg" />
    <h3 class="signup__title">Be part of the woow movement</h3>
    <p>
      A new way of shopping and saving. An app that rewards you in multiple
      shops and brands
    </p>
    <section class="signup__form">
      <form @submit="userLogin">
        <div>
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div>
          <input type="text" id="lastName" placeholder="Last name" />
        </div>
        <div>
          <input type="date" id="birthday" placeholder="Birthday" />
        </div>
        <div>
          <input type="text" id="email" placeholder="Email" />
        </div>

        <div>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <button>Register</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "Signup",
};
</script>

<style lang="less">
.signup {
  height: 100vh;
  background-color: #fdf8f0;
  text-align: center;
  padding-top: 5%;
  &__form {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  form {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  input {
    width: 250px;
    height: 35px;
    margin: 5px 0;
    border: 1px solid #222;
    border-radius: 5px;
    font-size: 15px;
    color: #a6a6a6;
    padding-left: 8px;
    &::placeholder {
      color: #a6a6a6;
    }
  }
  button {
    width: 100px;
    background: #222;
    height: 30px;
    border: 1px solid #222;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    margin: 5px 0;
  }

  &__title {
    margin: 0;
    font-size: 45px;
    color: #222;
    text-align: center;
    padding-top: 35px;
    @media screen and (max-width: 1024px) {
      font-size: 30px;
      padding-top: 20px;
    }
  }
}
</style>
