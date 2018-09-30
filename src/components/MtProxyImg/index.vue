<template>
<div :style="{backgroundImage:'url('+url+')',
  backgroundSize:'contain',
  width:width+'px',
  height:height+'px',
  marginRight: noMargin?0:5+'px'
}">
</div>
</template>
<script>
import placeholder from "./quexing.png";
export default {
  props: {
    src: null,
    title: null,
    width: {
      type: Number,
      default: 20
    },
    height: {
      type: Number,
      default: 20
    },
    noMargin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      url: placeholder
    };
  },
  mounted() {
    this.url = placeholder;
    if (this.src) {
      this.loadImg(this.src);
    }
  },
  methods: {
    loadImg(src) {
      var newImg = new Image();
      newImg.src = src;
      newImg.onerror = () => {
        newImg.src = placeholder;
      };
      newImg.onload = () => {
        this.url = newImg.src;
        setTimeout(() => {
          this.$emit("loaded");
        }, 200);
      };
    }
  },
  watch: {
    src: function(val) {
      this.loadImg(val);
    }
  }
};
</script>
<style scoped>
div {
  background-repeat: no-repeat;
  background-position: center;
}
</style>
