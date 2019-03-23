<template>
  <div class="app2">
    <div class="div1">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <div class="div2">
      <FooterGuide></FooterGuide>
    </div>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";

export default {
  data() {
    return {
    };
  },

  methods: {

  },
  components: {
    FooterGuide
  }
};
</script>

<style>
.app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.div1 {
  width: 100%;
  height: 92.5%;
}
.div2 {
  width: 100%;
  height: 7.5%;
  position: fixed;
  bottom: 0;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
