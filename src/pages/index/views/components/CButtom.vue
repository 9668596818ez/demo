<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "CButton",
  methods: {
    handleClick(event) {
      // console.log(event, this, 1);
      // console.log(this.$options, 1);
      // console.log(this.$parent, 1);
      // console.log(this.$root, 1);
      // this.$emit("on-click", event);
    }
  }
};
</script>
