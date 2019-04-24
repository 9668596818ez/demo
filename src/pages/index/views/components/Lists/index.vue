<template>
  <ul>
    <li v-for="list in lists" :key="list.name">
      <slot name="list" :list="list"></slot>
    </li>
  </ul>
</template>
<script>
export default {
  name: "lists",
  components: {},
  props: ["lists"]
};
</script>
