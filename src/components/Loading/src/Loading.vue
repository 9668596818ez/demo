<template>
  <transition name="fade">
    <div v-show="visible" class="c-loading-mask">
      <div class="c-loading-spinner">
        <p class="c-loading-text">loading...</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Loading",
  data() {
    return {
      visible: false
    };
  }
};
</script>
<style>
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.c-loading-mask {
  opacity: 1;
  transition: opacity 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  font-size: 20px;
}
</style>
