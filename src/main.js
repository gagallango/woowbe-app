import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./axios/index";
import Business from "./components/Business/Business.vue";
import DefaultLayout from './components/DefaultLayout.vue'
import Login from "./components/Login/Login.vue";
import Home from "./components/Home/Home.vue";
import store from './store'
import BusinessById from './components/Business/BusinessById.vue'
import Dashboard from './components/Dashboard/Dashboard.vue'
import Offers from './components/Offers/Offers.vue'
import OfferById from './components/Offers/OfferById.vue'

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/business",
        component: Business,
      },
      {
        path: "/offers",
        component: Offers,
      },
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/business/:id",
        name: "BusinessById",
        component: BusinessById,
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        children: [
          {
            path: 'offers',
            component: Offers,
          },
        ],
        component: Dashboard
      },
      {
        path: "/offers/:id",
        name: "OfferById",
        component: OfferById,
      },
    ]
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(store)
app.use(router);
app.mount("#app");
