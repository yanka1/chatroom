import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import dfaultLayout from "./layouts/default";
// import jsbridgeLayout from "./layouts/jsbridge";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: () => import('@/views/Login.vue')
    },
    {
      path: "/chatroom/:id",
      name: "chatroom",
      component: () => import('@/views/ChatRoom.vue')
    }
  ]
});
