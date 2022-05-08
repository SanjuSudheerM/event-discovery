import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventView from "../views/EventView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/e/:id",
    name: "event",
    component: EventView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
