<template>
  <div class="login">
    <img src="@/assets/signup.svg" />
    <h3 class="login__title">Get the woow started</h3>
    <section class="login__form">
      <form @submit="userLogin">
        <div>
          <input
            type="text"
            id="email"
            v-model="data.email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            v-model="data.password"
            placeholder="Password"
          />
        </div>
        <button>Login</button>
      </form>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const data = ref({
      email: "prueba@woowbe.com",
      password: "pruebatecnica2023!",
    });

    const router = useRouter();
    function userLogin() {
      axios
        .post("/auth/jwt/token/", data.value)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          router.push("/dashboard/offers");
        })
        .catch((error) => console.log(error));
    }

    return {
      data,
      userLogin,
    };
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background-color: #f1fbfc;
  text-align: center;
  padding-top: 5%;
  img {
    width: 300px;
  }
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
    border: 1px solid #458588;
    border-radius: 5px;
    font-size: 15px;
    color: #458588;
    padding-left: 8px;
    &::placeholder {
      color: #458588;
    }
  }
  button {
    width: 100px;
    background: #458588;
    height: 30px;
    border: 1px solid #458588;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    margin: 5px 0;
  }

  &__title {
    margin: 0;
    font-size: 45px;
    color: #458588;
    text-align: center;
    padding-top: 35px;
    @media screen and (max-width: 1024px) {
      font-size: 30px;
      padding-top: 20px;
    }
  }
}
</style>
