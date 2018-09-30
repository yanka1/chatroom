<template>
  <router-view/>
</template>

<script>
import { Ygritte } from "@/utils/snow.js";
export default {
  name: "jsbridge",
  mounted() {
    // const Ygritte = require('@/utils/snow.js');
    this.begainPath = this.$route.path;
    let YgritteInstance = Ygritte();
    window.Ygritte = YgritteInstance;
    console.log(window.Ygritte);
    this.watchRouter();
  },
  methods: {
    watchRouter() {
      const that = this;
      window.routerBack = function() {
        if (that.begainPath === that.$route.path) {
          window.Ygritte && window.Ygritte.closeWebView();
        }
        if (window.history.length > 1) {
          that.$router.back();
        } else {
          window.Ygritte && window.Ygritte.closeWebView();
        }
      };
      window.Ygritte.on("back", "", "routerBack");
    }
  }
};
</script>

<style>
</style>
