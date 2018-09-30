<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view/>
    </transition> 
  </div>
</template>

<style lang="scss">
#app {
  font-family: -apple-system,  'PingFangSC-Regular', BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
}
// transition
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

// vant
.van-dialog  .van-button__text{
  color: #007aff;
}
</style>
